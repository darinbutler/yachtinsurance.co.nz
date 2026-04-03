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

// Marine insurance comparison sites
const pricingSources = [
  'https://www.mariner.co.nz/services/yacht-insurance',
  'https://www.nminsurance.co.nz/our-brands/nautilus-marine-insurance/',
  'https://www.marine-insurance.co.nz/',
  'https://www.Tower.co.nz/'
];

// Ensure src/data directory exists
const dataDir = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
  console.log('Created src/data directory');
}

async function scrapePricing(url) {
  console.log(`Scraping pricing from: ${url}`);

  try {
    const client = new ApifyClient({ token: apiKey });

    // Use the Web Scraper actor to extract pricing info
    const runInput = {
      startUrls: [{ url }],
      useChrome: false,
      pageFunction: `
        const pricingData = [];

        // Common patterns for pricing information
        const priceElements = document.querySelectorAll('[class*="price"], [class*="cost"], [class*="premium"], [data-price], .pricing, .rates, .quote');

        // Also look for text content with dollar signs
        const allText = document.body.innerText;
        const priceMatches = allText.match(/\\$\\d+[,.]?\\d*/g) || [];

        // Extract vessel types mentioned
        const vesselTypes = ['yacht', 'sailing', 'motor', 'catamaran', 'monohull', 'powerboat', 'sailboat', 'jetski', 'dinghy', 'tender', 'boat'];
        const mentionedTypes = [];

        vesselTypes.forEach(type => {
          if (allText.toLowerCase().includes(type)) {
            mentionedTypes.push(type);
          }
        });

        // Extract features/coverage mentioned
        const features = [];
        const featurePatterns = [
          { pattern: /liability|third party/gi, feature: 'Third Party Liability' },
          { pattern: /hull|damage/gi, feature: 'Hull Coverage' },
          { pattern: /medical|emergency/gi, feature: 'Medical Coverage' },
          { pattern: /racing|competition/gi, feature: 'Racing Coverage' },
          { pattern: /towing|breakdown/gi, feature: 'Towing/Breakdown' },
          { pattern: /accessories|equipment/gi, feature: 'Equipment Coverage' },
          { pattern: /crew|crew liability/gi, feature: 'Crew Liability' }
        ];

        featurePatterns.forEach(({ pattern, feature }) => {
          if (pattern.test(allText)) {
            features.push(feature);
          }
        });

        return {
          provider: document.querySelector('h1, .company-name')?.textContent?.trim() || new URL(window.location.href).hostname,
          url: window.location.href,
          priceMentions: priceMatches.slice(0, 10),
          vesselTypes: [...new Set(mentionedTypes)],
          features: [...new Set(features)],
          priceElementCount: priceElements.length,
          hasQuoteForm: !!document.querySelector('form[action*="quote"], form[id*="quote"], button[class*="quote"]'),
          hasCalculator: !!document.querySelector('[id*="calculator"], [class*="calculator"]')
        };
      `
    };

    const run = await client.actor('apify/web-scraper').call(runInput);

    // Fetch results
    const results = [];
    for await (const item of client.dataset(run.defaultDatasetId).iterateItems()) {
      results.push(item);
    }

    if (results.length > 0) {
      const data = results[0];
      console.log(`  ✓ Provider: ${data.provider}`);
      console.log(`    Vessel types: ${data.vesselTypes.length}`);
      console.log(`    Features: ${data.features.length}`);
      console.log(`    Price mentions found: ${data.priceMentions.length}\n`);
      return data;
    }

    return null;
  } catch (error) {
    console.error(`  Error scraping ${url}: ${error.message}\n`);
    return null;
  }
}

async function fetchPricingData() {
  console.log('Starting pricing data scrape...');
  console.log(`Target sources: ${pricingSources.length}\n`);

  const pricingAnalysis = {
    scrapedAt: new Date().toISOString(),
    sources: pricingSources,
    providers: [],
    summary: {
      totalProviders: 0,
      commonVesselTypes: [],
      commonFeatures: [],
      providersWithQuoteForms: 0,
      providersWithCalculators: 0
    }
  };

  for (const source of pricingSources) {
    const data = await scrapePricing(source);
    if (data) {
      pricingAnalysis.providers.push({
        provider: data.provider,
        url: data.url,
        vesselTypes: data.vesselTypes,
        features: data.features,
        priceMentions: data.priceMentions,
        priceElementCount: data.priceElementCount,
        hasQuoteForm: data.hasQuoteForm,
        hasCalculator: data.hasCalculator,
        scrapedAt: new Date().toISOString()
      });

      if (data.hasQuoteForm) pricingAnalysis.summary.providersWithQuoteForms++;
      if (data.hasCalculator) pricingAnalysis.summary.providersWithCalculators++;
    }
  }

  // Calculate summaries
  if (pricingAnalysis.providers.length > 0) {
    const allVesselTypes = pricingAnalysis.providers.flatMap(p => p.vesselTypes);
    const allFeatures = pricingAnalysis.providers.flatMap(p => p.features);

    // Count occurrences
    const typeFrequency = {};
    const featureFrequency = {};

    allVesselTypes.forEach(type => {
      typeFrequency[type] = (typeFrequency[type] || 0) + 1;
    });

    allFeatures.forEach(feature => {
      featureFrequency[feature] = (featureFrequency[feature] || 0) + 1;
    });

    pricingAnalysis.summary.commonVesselTypes = Object.entries(typeFrequency)
      .sort((a, b) => b[1] - a[1])
      .map(([type, count]) => ({ type, providers: count }));

    pricingAnalysis.summary.commonFeatures = Object.entries(featureFrequency)
      .sort((a, b) => b[1] - a[1])
      .map(([feature, count]) => ({ feature, providers: count }));

    pricingAnalysis.summary.totalProviders = pricingAnalysis.providers.length;
  }

  // Create derived data structure for compare page
  const comparableData = {
    scrapedAt: new Date().toISOString(),
    providers: pricingAnalysis.providers.map(p => ({
      name: p.provider,
      url: p.url,
      features: p.features,
      vesselTypes: p.vesselTypes,
      hasQuoteForm: p.hasQuoteForm,
      hasCalculator: p.hasCalculator,
      pricingAvailable: p.priceMentions.length > 0,
      samplePrices: p.priceMentions
    }))
  };

  // Save both files
  const pricingPath = path.join(dataDir, 'pricing-data.json');
  const comparablePath = path.join(dataDir, 'pricing-comparable.json');

  fs.writeFileSync(pricingPath, JSON.stringify(pricingAnalysis, null, 2));
  fs.writeFileSync(comparablePath, JSON.stringify(comparableData, null, 2));

  console.log('='.repeat(50));
  console.log('PRICING DATA SUMMARY');
  console.log('='.repeat(50));
  console.log(`Total providers analyzed: ${pricingAnalysis.summary.totalProviders}`);
  console.log(`Providers with quote forms: ${pricingAnalysis.summary.providersWithQuoteForms}`);
  console.log(`Providers with calculators: ${pricingAnalysis.summary.providersWithCalculators}`);

  if (pricingAnalysis.summary.commonVesselTypes.length > 0) {
    console.log('\nMost Common Vessel Types:');
    pricingAnalysis.summary.commonVesselTypes.slice(0, 5).forEach(({ type, providers }) => {
      console.log(`  ${type}: offered by ${providers} provider(s)`);
    });
  }

  if (pricingAnalysis.summary.commonFeatures.length > 0) {
    console.log('\nMost Common Features:');
    pricingAnalysis.summary.commonFeatures.slice(0, 8).forEach(({ feature, providers }) => {
      console.log(`  ${feature}: ${providers} provider(s)`);
    });
  }

  console.log(`\nResults saved to:`);
  console.log(`  ${pricingPath}`);
  console.log(`  ${comparablePath}`);
}

fetchPricingData().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
