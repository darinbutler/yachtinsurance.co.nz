const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const scriptsDir = path.join(__dirname);

// Script execution order
const scripts = [
  {
    name: 'Competitor Analysis',
    file: 'scrape-competitors.js',
    description: 'Analyzing competitor websites'
  },
  {
    name: 'Content Scraping',
    file: 'scrape-content.js',
    description: 'Pulling marine/yacht content feeds'
  },
  {
    name: 'Pricing Data',
    file: 'scrape-pricing.js',
    description: 'Extracting pricing information'
  }
];

function runScript(scriptPath) {
  return new Promise((resolve, reject) => {
    const child = spawn('node', [scriptPath], {
      cwd: path.dirname(scriptPath),
      stdio: 'inherit'
    });

    child.on('error', (error) => {
      reject(error);
    });

    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Script exited with code ${code}`));
      } else {
        resolve();
      }
    });
  });
}

async function refreshAllData() {
  console.log('\n' + '='.repeat(60));
  console.log('YACHT INSURANCE WEBSITE - DATA REFRESH MASTER SCRIPT');
  console.log('='.repeat(60));
  console.log(`Starting at: ${new Date().toISOString()}\n`);

  const results = {
    startTime: new Date(),
    scripts: [],
    summary: {
      successful: 0,
      failed: 0,
      total: scripts.length
    }
  };

  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    const scriptPath = path.join(scriptsDir, script.file);

    console.log(`\n[${i + 1}/${scripts.length}] Running: ${script.name}`);
    console.log(`Description: ${script.description}`);
    console.log('-'.repeat(60));

    try {
      const startTime = new Date();
      await runScript(scriptPath);
      const endTime = new Date();
      const duration = (endTime - startTime) / 1000;

      results.scripts.push({
        name: script.name,
        file: script.file,
        status: 'success',
        duration: duration,
        completedAt: endTime.toISOString()
      });

      results.summary.successful++;
      console.log(`✓ Completed in ${duration.toFixed(2)} seconds`);
    } catch (error) {
      results.scripts.push({
        name: script.name,
        file: script.file,
        status: 'failed',
        error: error.message,
        failedAt: new Date().toISOString()
      });

      results.summary.failed++;
      console.error(`✗ Failed: ${error.message}`);
    }
  }

  // Check generated data files
  console.log('\n' + '='.repeat(60));
  console.log('DATA FILES VERIFICATION');
  console.log('='.repeat(60));

  const dataDir = path.join(__dirname, '..', 'src', 'data');
  const expectedFiles = [
    'competitor-analysis.json',
    'external-content.json',
    'pricing-data.json',
    'pricing-comparable.json'
  ];

  const fileStats = {
    found: [],
    missing: []
  };

  expectedFiles.forEach(file => {
    const filePath = path.join(dataDir, file);
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      fileStats.found.push({
        file: file,
        size: `${(stats.size / 1024).toFixed(2)} KB`,
        modified: stats.mtime.toISOString()
      });
      console.log(`✓ ${file} - ${(stats.size / 1024).toFixed(2)} KB`);
    } else {
      fileStats.missing.push(file);
      console.log(`✗ ${file} - NOT FOUND`);
    }
  });

  // Check image files
  console.log('\n' + '='.repeat(60));
  console.log('IMAGE FILES VERIFICATION');
  console.log('='.repeat(60));

  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  const manifestPath = path.join(imagesDir, 'manifest.json');

  if (fs.existsSync(manifestPath)) {
    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      const imageCount = Object.keys(manifest.images || {}).length;
      console.log(`✓ Image manifest found with ${imageCount} images`);
      fileStats.found.push({
        file: 'manifest.json',
        images: imageCount,
        modified: new Date(manifest.generatedAt).toISOString()
      });
    } catch (error) {
      console.log(`✗ Image manifest corrupted: ${error.message}`);
      fileStats.missing.push('manifest.json');
    }
  } else {
    console.log('✗ Image manifest not found');
    fileStats.missing.push('manifest.json');
  }

  // Final summary
  results.fileStats = fileStats;
  results.endTime = new Date();
  results.summary.duration = (results.endTime - results.startTime) / 1000;

  console.log('\n' + '='.repeat(60));
  console.log('REFRESH COMPLETE - SUMMARY');
  console.log('='.repeat(60));
  console.log(`\nExecution Time: ${results.summary.duration.toFixed(2)} seconds`);
  console.log(`Successful scripts: ${results.summary.successful}/${results.summary.total}`);
  console.log(`Failed scripts: ${results.summary.failed}/${results.summary.total}`);
  console.log(`Data files generated: ${fileStats.found.length}`);
  console.log(`Data files missing: ${fileStats.missing.length}`);

  if (fileStats.missing.length > 0) {
    console.log(`\nMissing files:`);
    fileStats.missing.forEach(file => {
      console.log(`  - ${file}`);
    });
  }

  console.log(`\nStarted: ${results.startTime.toISOString()}`);
  console.log(`Ended: ${results.endTime.toISOString()}`);

  // Save results
  const resultsPath = path.join(__dirname, '..', 'src', 'data', 'refresh-results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  console.log(`\nDetailed results saved to: ${resultsPath}`);

  // Exit with appropriate code
  if (results.summary.failed > 0) {
    console.log('\n⚠️  Some scripts failed. Review logs above.');
    process.exit(1);
  } else {
    console.log('\n✓ All scripts completed successfully!');
    process.exit(0);
  }
}

refreshAllData().catch(error => {
  console.error('Master script error:', error);
  process.exit(1);
});
