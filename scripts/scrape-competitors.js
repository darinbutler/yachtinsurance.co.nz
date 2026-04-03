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

// Competitor URLs to analyze
const competitorUrls = [
  'https://www.mariner.co.nz/services/yacht-insurance',
  'https://www.nminsurance.co.nz/our-brands/nautilus-marine-insurance/',
  'https://www.yachtingnz.org.nz/racing-cruising/racing/insurance',
  'https://www.marine-insurance.co.nz/'
];

// Ensure src/data directory exists
const dataDir = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
  console.log('Created src/data directory');
}

async function scrapeCompetitor(url) {
  console.log(`\nScraping: ${url}`);

  try {
    const client = new ApifyClient({ token: apiKey });

    // Use the Web Scraper actor to extract page content
    const runInput = {
      startUrls: [{ url }],
      useChrome: false,
      pageFunction: `
        return {
          title: document.title,
          metaDescription: document.querySelector('meta[name="description"]')?.content || '',
          h1: document.querySelector('h1')?.textContent?.trim() || '',
          h2Elements: Array.from(document.querySelectorAll('h2')).map(h => h.textContent.trim()).slice(0, 5),
          h3Elements: Array.from(document.querySelectorAll('h3')).map(h => h.textContent.trim()).slice(0, 5),
          navLinks: Array.from(document.querySelectorAll('nav a, header a')).map(a => ({
            text: a.textContent.trim(),
            href: a.href
          })).filter(l => l.text).slice(0, 20),
          mainContent: document.querySelector('main')?.textContent?.trim().substring(0, 1000) || document.body.textContent.trim().substring(0, 1000),
          images: Array.from(document.querySelectorAll('img')).map(img => ({
            src: img.src,
            alt: img.alt
          })).slice(0, 10),
          url: window.location.href
        };
      `
    };

    // Run the Web Scraper actor
    const run = await client.actor('apify/web-scraper').call(runInput);

    // Fetch results
    const results = [];
    for await (const item of client.dataset(run.defaultDatasetId).iterateItems()) {
      results.push(item);
    }

    if (results.length === 0) {
      console.log(`  No results returned for ${url}`);
      return null;
    }

    const data = results[0];
    console.log(`  ✓ Scraped successfully`);
    console.log(`    Title: ${data.title}`);
    console.log(`    H1: ${data.h1}`);
    console.log(`    H2 count: ${data.h2Elements.length}`);
    console.log(`    Nav links: ${data.navLinks.length}`);

    return {
      url,
      title: data.title,
      metaDescription: data.metaDescription,
      h1: data.h1,
      headings: {
        h2: data.h2Elements,
        h3: data.h3Elements
      },
      navigationLinks: data.navLinks,
      mainContent: data.mainContent,
      images: data.images,
      scrapedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error(`  Error scraping ${url}: ${error.message}`);
    return null;
  }
}

async function analyzeCompetitors() {
  console.log('Starting competitor analysis...');
  console.log(`Target URLs: ${competitorUrls.length}\n`);

  const analysis = {
    scrapedAt: new Date().toISOString(),
    competitors: [],
    summary: {
      totalCompetitors: competitorUrls.length,
      successfulScrapes: 0,
      failedScrapes: 0
    }
  };

  for (const url of competitorUrls) {
    const result = await scrapeCompetitor(url);
    if (result) {
      analysis.competitors.push(result);
      analysis.summary.successfulScrapes++;
    } else {
      analysis.summary.failedScrapes++;
    }
  }

  // Generate summary insights
  if (analysis.competitors.length > 0) {
    const allHeadings = analysis.competitors.flatMap(c => [...c.headings.h2, ...c.headings.h3]);
    const allLinks = analysis.competitors.flatMap(c => c.navigationLinks);

    analysis.summary.commonTopics = getCommonTopics(allHeadings);
    analysis.summary.commonNavItems = getCommonNavItems(allLinks);
    analysis.summary.keywordOpportunities = identifyKeywordOpportunities(allHeadings);
  }

  // Save analysis to file
  const outputPath = path.join(dataDir, 'competitor-analysis.json');
  fs.writeFileSync(outputPath, JSON.stringify(analysis, null, 2));

  console.log('\n' + '='.repeat(50));
  console.log('ANALYSIS SUMMARY');
  console.log('='.repeat(50));
  console.log(`Successful scrapes: ${analysis.summary.successfulScrapes}`);
  console.log(`Failed scrapes: ${analysis.summary.failedScrapes}`);

  if (analysis.summary.commonTopics) {
    console.log(`\nCommon Topics Found:`);
    analysis.summary.commonTopics.forEach(topic => {
      console.log(`  - ${topic}`);
    });
  }

  if (analysis.summary.commonNavItems) {
    console.log(`\nCommon Navigation Items:`);
    analysis.summary.commonNavItems.forEach(item => {
      console.log(`  - ${item}`);
    });
  }

  console.log(`\nDetailed results saved to: ${outputPath}`);
}

function getCommonTopics(headings) {
  const frequencyMap = {};
  const keywords = ['insurance', 'coverage', 'marine', 'yacht', 'boat', 'claim', 'premium', 'policy', 'vessel', 'protection', 'risk', 'damage', 'accident', 'navigation', 'safety', 'competitive'];

  headings.forEach(heading => {
    keywords.forEach(keyword => {
      if (heading.toLowerCase().includes(keyword)) {
        frequencyMap[keyword] = (frequencyMap[keyword] || 0) + 1;
      }
    });
  });

  return Object.entries(frequencyMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([topic]) => topic);
}

function getCommonNavItems(links) {
  const frequencyMap = {};
  const commonItems = ['About', 'Contact', 'Coverage', 'Claims', 'FAQs', 'Products', 'Services', 'Marine', 'Insurance', 'How to Apply', 'Get Quote'];

  links.forEach(link => {
    commonItems.forEach(item => {
      if (link.text && link.text.toLowerCase().includes(item.toLowerCase())) {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
      }
    });
  });

  return Object.entries(frequencyMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([item]) => item);
}

function identifyKeywordOpportunities(headings) {
  const allText = headings.join(' ').toLowerCase();
  const opportunities = [];

  // Look for frequently occurring terms
  const termPatterns = [
    { pattern: /new zealand/gi, term: 'New Zealand targeting' },
    { pattern: /competitive|affordable|best/gi, term: 'Price positioning' },
    { pattern: /24\/7|emergency|support/gi, term: 'Support/Service messaging' },
    { pattern: /fast|quick|easy|simple/gi, term: 'Ease of use messaging' }
  ];

  termPatterns.forEach(({ pattern, term }) => {
    if (allText.match(pattern)) {
      opportunities.push(term);
    }
  });

  return opportunities;
}

analyzeCompetitors().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
