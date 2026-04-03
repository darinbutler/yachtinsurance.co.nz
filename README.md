# YachtInsurance.co.nz

New Zealand yacht and marine insurance comparison website built with Next.js 16, Tailwind CSS v4, and TypeScript. Integrates Google Gemini AI for image generation and Apify for data intelligence.

## Tech Stack

- **Frontend**: Next.js 16 (App Router, Static Export)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Forms**: FormSubmit.co
- **Image Generation**: Google Gemini AI
- **Data Scraping**: Apify
- **Deployment**: GitHub Pages

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` file with your API keys (never commit this file):

```
GEMINI_API_KEY=your_gemini_api_key
APIFY_API_KEY=your_apify_api_key
NEXT_PUBLIC_FORM_EMAIL=hello@cover4you.co.nz
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (static export) |
| `npm run images` | Generate images via Gemini AI + Unsplash fallback |
| `npm run scrape:competitors` | Scrape competitor sites via Apify |
| `npm run scrape:content` | Pull marine content feeds via Apify |
| `npm run scrape:pricing` | Scrape pricing data via Apify |
| `npm run scrape:all` | Run all Apify scrapers |

## Deployment

Static export to GitHub Pages via `gh-pages` branch:

```bash
npm run build
# Deploy out/ directory to gh-pages branch
```

## Site Structure

- `/` - Homepage with hero, vessel types, stats, FAQ
- `/contact` - Lead capture form (primary conversion page)
- `/coverage` - Coverage types and tiers explained
- `/compare` - Side-by-side insurer comparison
- `/about` - About the service
- `/blog` - Insurance guides and articles
- `/sectors/yacht` - Yacht insurance (flagship)
- `/sectors/jetski` - Jet ski insurance
- `/sectors/dinghy` - Dinghy insurance
- `/sectors/tender` - Tender insurance
- `/sectors/racing-boat` - Racing boat insurance
- `/sectors/coastal-cruising` - Coastal cruising insurance
- `/sectors/bluewater` - Blue water cruiser insurance

## SEO

- JSON-LD schema on every page
- OpenGraph and Twitter Card metadata
- sitemap.xml, robots.txt, llms.txt
- Semantic HTML with proper heading hierarchy
