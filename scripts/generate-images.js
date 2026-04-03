const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");

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
const apiKey = env.GEMINI_API_KEY;

if (!apiKey) {
  console.error('GEMINI_API_KEY not found in .env.local');
  process.exit(1);
}

// Image prompts for each section
const imagePrompts = {
  'hero-home': 'Cinematic aerial photograph of a luxury sailing yacht cutting through turquoise New Zealand waters near Bay of Islands, golden hour lighting, dramatic clouds, 8k quality',
  'hero-coverage': 'Professional photograph of a modern yacht anchored in calm waters with mountains in background, safety equipment visible on deck, editorial quality',
  'hero-compare': 'Clean editorial photograph of multiple sailing yachts moored in a New Zealand marina at sunset, organized composition',
  'hero-about': 'Warm photograph of a yacht crew sailing together in New Zealand waters, teamwork and camaraderie, natural lighting',
  'hero-contact': 'Inviting photograph of a luxury yacht at dock with city skyline in background, warm evening light',
  'hero-blog': 'Beautiful photograph of yacht sails backlit by sunrise over Pacific Ocean, dramatic sky',
  'sector-yacht': 'Elegant sailing yacht under full sail in open ocean off New Zealand coast',
  'sector-jetski': 'Action photograph of jet ski rider on turquoise water near New Zealand beach',
  'sector-dinghy': 'Small sailing dinghy racing in harbor with scenic New Zealand backdrop',
  'sector-tender': 'Polished yacht tender alongside a larger vessel in calm marina waters',
  'sector-racing': 'Exciting yacht racing photograph with multiple boats competing, America\'s Cup style',
  'sector-coastal': 'Peaceful coastal cruising scene through Marlborough Sounds New Zealand',
  'sector-bluewater': 'Blue water cruising yacht on open ocean passage, deep blue water, dramatic sky'
};

// Unsplash fallback photo IDs
const unsplashFallbacks = {
  'hero-home': 'photo-1540946485063-a40da27545f8',
  'hero-coverage': 'photo-1559494007-9f5847c49d94',
  'hero-compare': 'photo-1569263979104-865ab7cd8d13',
  'hero-about': 'photo-1504280390367-361c6d9f38f4',
  'hero-contact': 'photo-1544551763-46a013bb70d5',
  'hero-blog': 'photo-1508739773434-c26b3d09e071',
  'sector-yacht': 'photo-1540946485063-a40da27545f8',
  'sector-jetski': 'photo-1541976844346-f18aedc57b95',
  'sector-dinghy': 'photo-1500514966906-fe245eea9344',
  'sector-tender': 'photo-1544551763-46a013bb70d5',
  'sector-racing': 'photo-1540946485063-a40da27545f8',
  'sector-coastal': 'photo-1559494007-9f5847c49d94',
  'sector-bluewater': 'photo-1508739773434-c26b3d09e071'
};

// Ensure public/images directory exists
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('Created public/images directory');
}

async function generateImageDescription(prompt) {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const enhancedPrompt = `Create a detailed, marketing-focused alt text description (max 150 words) for this image: "${prompt}". The description should be SEO-friendly and emphasize the nautical/yacht insurance context.`;

    const result = await model.generateContent(enhancedPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error(`Error generating description: ${error.message}`);
    return prompt; // Return original prompt as fallback
  }
}

async function downloadUnsplashImage(photoId, filename) {
  try {
    const unsplashUrl = `https://images.unsplash.com/${photoId}?w=1200&h=675&fit=crop`;
    const response = await fetch(unsplashUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const buffer = await response.buffer();
    const filepath = path.join(imagesDir, filename);
    fs.writeFileSync(filepath, buffer);
    console.log(`  Downloaded and saved: ${filename}`);
    return true;
  } catch (error) {
    console.error(`  Failed to download ${filename}: ${error.message}`);
    return false;
  }
}

async function createPlaceholder(name, prompt) {
  const placeholderPath = path.join(imagesDir, `${name}-placeholder.txt`);
  const content = `Placeholder for: ${name}\n\nIntended prompt:\n${prompt}\n\nNote: Image generation not available. Download manually or use provided Unsplash fallback.`;
  fs.writeFileSync(placeholderPath, content);
  console.log(`  Created placeholder: ${name}-placeholder.txt`);
}

async function processImages() {
  console.log('Starting image generation and download process...\n');

  const manifest = {
    generatedAt: new Date().toISOString(),
    images: {}
  };

  for (const [key, prompt] of Object.entries(imagePrompts)) {
    console.log(`Processing ${key}...`);

    // Generate enhanced alt text
    console.log('  Generating alt text...');
    const altText = await generateImageDescription(prompt);

    // Download Unsplash fallback
    const photoId = unsplashFallbacks[key];
    const filename = `${key}.jpg`;

    console.log(`  Downloading Unsplash fallback (${photoId})...`);
    const downloadSuccess = await downloadUnsplashImage(photoId, filename);

    if (!downloadSuccess) {
      await createPlaceholder(key, prompt);
      manifest.images[key] = {
        path: `images/${key}-placeholder.txt`,
        alt: altText,
        source: 'placeholder',
        fallback: photoId
      };
    } else {
      manifest.images[key] = {
        path: `images/${filename}`,
        alt: altText,
        source: 'unsplash',
        photoId: photoId,
        originalPrompt: prompt
      };
    }

    console.log(`  Completed ${key}\n`);
  }

  // Save manifest
  const manifestPath = path.join(imagesDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\nSaved manifest to public/images/manifest.json`);

  console.log(`\n✓ Image processing complete!`);
  console.log(`  Total images processed: ${Object.keys(manifest.images).length}`);
  console.log(`  Manifest saved: ${manifestPath}`);
}

processImages().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
