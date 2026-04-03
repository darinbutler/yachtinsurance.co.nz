import type { Metadata } from 'next';
import Link from 'next/link';
import { Star, ChevronRight, Check } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { insurers } from '@/data/insurers';

export const metadata: Metadata = {
  title: 'Compare Yacht Insurance Providers NZ | YachtInsurance.co.nz',
  description: 'Compare yacht and boat insurance providers in New Zealand. View ratings, features, premiums and specialties for Mariner, Tower, NMI, Gallagher, Baileys, AMI, NZI and Star Insurance.',
  keywords: [
    'yacht insurance comparison nz',
    'boat insurance providers new zealand',
    'compare marine insurance',
    'best yacht insurance nz',
    'boat insurance quotes nz',
    'marine insurance companies',
    'yacht insurance rates nz',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://yachtinsurance.co.nz/compare',
    title: 'Compare Yacht Insurance Providers NZ',
    description: 'Compare top yacht and boat insurance providers in New Zealand side-by-side.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1563305503-2f917bc90a69?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Comparing yacht insurance options',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://yachtinsurance.co.nz/compare',
  },
};

const chooseInsurertips = [
  {
    title: 'Compare Premium Costs',
    description: 'Get quotes from multiple insurers. Premiums vary based on your vessel, usage, and coverage level. Lowest price isn\'t always best value—compare what\'s included.',
  },
  {
    title: 'Check Claims Processing',
    description: 'Look at claims assessment timeframes and support availability. 24/7 claims support and quick settlement are crucial when you need help on the water.',
  },
  {
    title: 'Verify Specialties Match Your Needs',
    description: 'Choose an insurer specializing in your vessel type. Racing yacht owners should pick specialists in racing cover; offshore cruisers need blue water expertise.',
  },
  {
    title: 'Review Coverage Options',
    description: 'Ensure the insurer offers the specific coverage you need—agreed value, salvage rights, new-for-old, or racing coverage. Standard options vary significantly.',
  },
  {
    title: 'Consider Customer Service',
    description: 'Read reviews and check accessibility. Good marine insurers offer personalized service, expert advice, and responsive support for their customers.',
  },
];

export default function Compare() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Compare Yacht Insurance Providers in New Zealand',
    description: 'Comprehensive comparison of marine insurance providers in NZ',
    url: 'https://yachtinsurance.co.nz/compare',
    publisher: {
      '@type': 'Organization',
      name: 'YachtInsurance.co.nz',
      url: 'https://yachtinsurance.co.nz',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Hero Section */}
      <section
        className="relative h-[40vh] min-h-[300px] sm:min-h-[380px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1563305503-2f917bc90a69?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/75 to-slate-900/65" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Compare Yacht Insurance Providers in NZ
          </h1>
          <p className="text-lg sm:text-xl text-sky-100 max-w-3xl mx-auto">
            Side-by-side comparison of New Zealand's leading marine insurers. Find the right provider for your vessel.
          </p>
        </div>
      </section>

      {/* Above Fold: Intro + Quote Form */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Intro Text */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Find Your Ideal Marine Insurance Provider
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed text-lg">
                New Zealand has numerous yacht and boat insurance providers, each offering different coverage options, premium rates, and specialties. This comparison helps you find the insurer that best matches your vessel type and insurance needs.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Whether you own a small dinghy, cruising yacht, racing boat, or jet ski, New Zealand's marine insurers have coverage options available. Compare ratings, minimum premiums, key features, and specialties to make an informed decision.
              </p>
            </div>

            {/* Right Column - Quote Form */}
            <div className="lg:col-span-1">
              <div className="bg-sky-50 rounded-xl p-6 border-2 border-sky-200 sticky top-20">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Get Multiple Quotes</h3>
                <p className="text-sm text-slate-600 mb-6">Compare personalized quotes from our partner insurers</p>
                <QuoteForm mode="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurer Cards Grid */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Insurer Profiles & Ratings
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Detailed overview of New Zealand's leading marine insurance providers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insurers.map((insurer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border-t-4 border-sky-600 flex flex-col"
              >
                {/* Card Header */}
                <div className="p-6 pb-4 border-b border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {insurer.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(insurer.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-900">
                      {insurer.rating}/5
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-3">
                    {insurer.description}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow">
                  <div className="mb-6">
                    <p className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wide">
                      Minimum Premium
                    </p>
                    <p className="text-2xl font-bold text-sky-600">
                      {insurer.minPremium}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 font-semibold mb-3 uppercase tracking-wide">
                      Key Specialties
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {insurer.specialties.slice(0, 3).map((specialty, i) => (
                        <span
                          key={i}
                          className="inline-block px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-4 border-t border-slate-200 bg-slate-50">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-semibold hover:bg-sky-700 transition-colors"
                  >
                    Get Quote
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Comparison Table */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Provider Comparison Table
            </h2>
            <p className="text-lg text-slate-600">
              Side-by-side comparison of features across all NZ yacht insurance providers
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto bg-white rounded-lg shadow-lg border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Insurer</th>
                  <th className="px-6 py-4 text-center font-bold">Rating</th>
                  <th className="px-6 py-4 text-center font-bold">Min Premium</th>
                  <th className="px-6 py-4 text-left font-bold">Key Specialties</th>
                  <th className="px-6 py-4 text-center font-bold">Hull Cover</th>
                  <th className="px-6 py-4 text-center font-bold">Liability</th>
                </tr>
              </thead>
              <tbody>
                {insurers.map((insurer, index) => (
                  <tr key={index} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      {insurer.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <span className="font-bold text-amber-500">{insurer.rating}</span>
                        <span className="text-xs text-slate-500">/5</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-medium text-sky-600">
                      {insurer.minPremium}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {insurer.specialties.slice(0, 2).join(', ')}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison */}
          <div className="lg:hidden space-y-6">
            {insurers.map((insurer, index) => (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-900 text-white px-6 py-4">
                  <h3 className="font-bold text-lg mb-2">{insurer.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(insurer.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-400'}
                        />
                      ))}
                    </div>
                    <span className="text-sm">{insurer.rating}/5</span>
                  </div>
                </div>
                <div className="px-6 py-4 space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 font-semibold mb-1">Min Premium</p>
                    <p className="text-xl font-bold text-sky-600">{insurer.minPremium}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold mb-2">Specialties</p>
                    <p className="text-slate-700">{insurer.specialties.join(', ')}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-green-600" />
                      <span className="text-sm text-slate-700">Hull Cover</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-green-600" />
                      <span className="text-sm text-slate-700">Liability</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How to Choose the Right Marine Insurer
            </h2>
            <p className="text-lg text-slate-600">
              Five key considerations when selecting a yacht insurance provider
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {chooseInsurertips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-sky-100">
                      <span className="text-sky-600 font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-slate-600">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            Understanding Yacht Insurance in New Zealand
          </h2>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p>
              Yacht and boat insurance is a specialized form of marine insurance that protects vessel owners against financial risks associated with boat ownership and operation. In New Zealand, where boating is a popular recreational activity, several insurance providers specialize in marine coverage with expertise in local conditions and specific vessel types.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Leading Yacht Insurance Providers</h3>
            <p>
              New Zealand's yacht insurance market is served by both large national insurers and specialist marine insurers. Major providers like Tower Insurance, NZI, and AMI offer comprehensive boat insurance alongside their general insurance products. These large insurers typically provide competitive rates and the convenience of bundled policies.
            </p>

            <p>
              Specialist marine insurers like Mariner, Nautilus Marine Insurance (NMI), Gallagher, Baileys, and Star Insurance focus exclusively on marine risks. Their expertise in yacht and boat insurance translates to more comprehensive coverage options, better understanding of specialized vessels like racing yachts, and superior claims handling for maritime-specific issues.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Premium Calculations in Marine Insurance</h3>
            <p>
              Yacht insurance premiums are calculated based on several factors including vessel value, age, construction material, length, usage patterns, navigation limits, claims history, security measures, and operator experience. Most insurers in New Zealand charge premiums between NZD 350 and 500 annually for basic coverage, with comprehensive policies costing more depending on vessel value and coverage options.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Coverage Options Across Different Providers</h3>
            <p>
              While all marine insurers provide basic hull and liability coverage, differences emerge in optional features. Some providers specialize in new-for-old replacement policies, guaranteed agreed value without depreciation, or specialized racing coverage. Offshore cruising requires providers with blue water experience and international geographic coverage. Charter and commercial vessels need different policies than recreational boats.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Claims Handling and Customer Support</h3>
            <p>
              A critical difference between insurers is their claims handling process and customer support. 24/7 claims support ensures you can access help when needed, whether your vessel requires emergency assistance or survey inspection. Some insurers assess claims within 48 hours, while others may take longer. Specialist marine insurers typically employ marine engineers and surveyors who understand vessel issues better than general insurance claim handlers.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Specializations by Insurer</h3>
            <p>
              Each insurer in the NZ market has developed specializations reflecting their expertise and customer focus. Mariner and Gallagher excel in large yacht and offshore cruising coverage. NMI specializes in racing yacht insurance. Baileys and Star Insurance focus on high-value vessels and classic boats. Tower and NZI offer broad coverage across all vessel types at competitive rates. Understanding these specializations helps match your needs with the right provider.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Comparing Quotes from Multiple Providers</h3>
            <p>
              The best way to find the right insurance provider is comparing quotes from multiple insurers. Premium quotes vary significantly based on your specific vessel characteristics and chosen coverage level. A vessel that costs NZD 400 per year to insure with one provider might cost NZD 600 with another due to different underwriting criteria and risk assessment approaches. Comparing at least 3-4 quotes ensures you understand market rates and select the best value.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">ICNZ Compliance and Insurer Reliability</h3>
            <p>
              All legitimate yacht insurance providers in New Zealand are registered with and comply with the Insurance Council of New Zealand (ICNZ) regulations. This membership ensures adherence to professional standards, ethical practices, and consumer protections. When comparing insurers, verify their ICNZ status to ensure you're dealing with established, regulated providers.
            </p>

            <p className="text-slate-600 italic mt-8">
              Ready to compare yacht insurance providers and find the right coverage for your vessel? Get multiple quotes today to see how much you can save with the right insurer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
