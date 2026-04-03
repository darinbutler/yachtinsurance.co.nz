const fs = require('fs');
const path = require('path');
const { ApifyClient } = require('apify-client');

// Read API key from .env.local
function readEnvLocal() {
  const envPath = path.join(__dirname, '..', '.env.local');
  const content = fs.readFileSync(envPath, 'utf-8');
  const lines = content.split('\n');
  const env = {};

  lines.forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      env[match[1]] = match[2];
    }
  });

  return env;
}

const env = readEnvLocal();
const apiKey = env.APIFY_API_KEY;

if (!apiKey) {
  console.error('APIFY_API_KEY not found in .env.local');
  process.exit(1);
}

// NZ news and marine content sources
const contentSources = [
  'https://www.boatsales.co.nz/news',
  'https://www.odt.co.nz/',
  'https://www.stuff.co.nz/travel/destinations/new-zealand',
  'https://www.nzherald.co.nz/travel/',
  'https://www.yachtingnz.org.nz/news',
];

// Ensure src/data directory exists
const dataDir = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
  console.log('Created src/data directory');
}

async function scrapeContent(url) {
  console.log(`Scraping content from: ${url}`);

  try {
    const client = new ApifyClient({ token: apiKey });

    // Use the Web Scraper actor to extract articles
    const runInput = {
      startUrls: [{ url }],
      useChrome: false,
      pageFunction: `
        const articles = [];

        // Extract article elements (common patterns)
        const articleElements = document.querySelectorAll('article, [data-testid="article"], .article, .news-item, .post, .story');

        articleElements.forEach(elem => {
          const titleEl = elem.querySelector('h1, h2, h3, .title, .headline');
          const excerptEl = elem.querySelector('p, .excerpt, .summary, .description');
          const dateEl = elem.querySelector('time, .date, .published, .timestamp');
          const imageEl = elem.querySelector('img, picture img');
          const linkEl = elem.querySelector('a[href]');

          if (titleEl) {
            articles.push({
              title: titleEl.textContent.trim(),
              excerpt: excerptEl?.textContent?.trim?.() || '',
              date: dateEl?.textContent?.trim?.() || dateEl?.getAttribute?.('datetime') || '',
              image: imageEl?.src || imageEl?.getAttribute?.('data-src') || '',
              url: linkEl?.href || window.location.href,
              source: new URL(window.location.href).hostname
            });
          }
        });

        return articles.slice(0, 20);
      `
    };

    const run = await client.actor('apify/web-scraper').call(runInput);

    // Fetch results
    const results = [];
    for await (const item of client.dataset(run.defaultDatasetId).iterateItems()) {
      if (Array.isArray(item)) {
        results.push(...item);
      } else {
        results.push(item);
      }
    }

    console.log(`  ✓ Found ${results.length} articles\n`);
    return results;
  } catch (error) {
    console.error(`  Error scraping ${url}: ${error.message}\n`);
    return [];
  }
}

async function fetchExternalContent() {
  console.log('Starting content scraping...');
  console.log(`Target sources: ${contentSources.length}\n`);

  const allContent = {
    scrapedAt: new Date().toISOString(),
    sources: contentSources,
    articles: [],
    summary: {
      totalArticles: 0,
      sourceBreakdown: {}
    }
  };

  for (const source of contentSources) {
    const articles = await scrapeContent(source);

    // Filter for marine/yacht/insurance related content
    const relevantArticles = articles.filter(article => {
      const text = (article.title + ' ' + article.excerpt).toLowerCase();
      return text.includes('yacht') || text.includes('marine') || text.includes('boat') ||
             text.includes('insurance') || text.includes('water') || text.includes('sailing') ||
             text.includes('nautical') || text.includes('vessel');
    });

    if (relevantArticles.length > 0) {
      allContent.articles.push(...relevantArticles.map(article => ({
        ...article,
        sourceUrl: article.url,
        source: article.source || new URL(source).hostname,
        scrapedAt: new Date().toISOString()
      })));

      allContent.summary.sourceBreakdown[source] = relevantArticles.length;
    }
  }

  // Remove duplicates and sort by date
  allContent.articles = allContent.articles.filter((article, index, self) => {
    return self.findIndex(a => a.title === article.title) === index;
  });

  allContent.articles = allContent.articles.sort((a, b) => {
    const dateA = new Date(a.date || 0);
    const dateB = new Date(b.date || 0);
    return dateB - dateA;
  });

  allContent.summary.totalArticles = allContent.articles.length;

  // Save content to file
  const outputPath = path.join(dataDir, 'external-content.json');
  fs.writeFileSync(outputPath, JSON.stringify(allContent, null, 2));

  console.log('='.repeat(50));
  console.log('CONTENT SCRAPING SUMMARY');
  console.log('='.repeat(50));
  console.log(`Total relevant articles found: ${allContent.summary.totalArticles}`);
  console.log('\nBreakdown by source:');
  Object.entries(allContent.summary.sourceBreakdown).forEach(([source, count]) => {
    console.log(`  ${new URL(source).hostname}: ${count} articles`);
  });
  console.log(`\nResults saved to: ${outputPath}`);
}

fetchExternalContent().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
