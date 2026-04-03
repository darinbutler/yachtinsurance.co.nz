import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Compass,
  Waves,
  Shield,
  Anchor,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Coastal Cruising Insurance NZ | Bay Cruiser Coverage',
  description:
    'Specialist coastal and bay cruising insurance for New Zealand. Coverage for Hauraki Gulf, Bay of Islands, and regional waters. Get instant quotes.',
  keywords: [
    'coastal cruising insurance',
    'bay cruising insurance nz',
    'hauraki gulf insurance',
    'bay of islands insurance',
    'regional cruising insurance',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://yachtinsurance.co.nz/sectors/coastal-cruising',
    title: 'Coastal Cruising Insurance New Zealand',
    description:
      'Insurance for coastal and bay cruising in New Zealand regional waters.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1768667779694-c8a1ec81528e?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Coastal cruising in New Zealand',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://yachtinsurance.co.nz/sectors/coastal-cruising',
  },
};

const popularyRoutes = [
  {
    name: 'Bay of Islands',
    location: 'Far North',
    description: 'Sheltered waters perfect for leisurely cruising and island exploration',
  },
  {
    name: 'Hauraki Gulf',
    location: 'Auckland',
    description: 'New Zealand\'s busiest cruising ground with numerous islands and anchorages',
  },
  {
    name: 'Marlborough Sounds',
    location: 'South Island',
    description: 'Dramatic waterways ideal for scenic cruising and adventure sailing',
  },
  {
    name: 'Great Barrier Island',
    location: 'Auckland Region',
    description: 'Remote island cruising offering pristine anchorages and adventure',
  },
];

const coverageItems = [
  {
    title: 'Hull & Machinery',
    description: 'Protection against accidental damage while cruising regional waters.',
    icon: Waves,
  },
  {
    title: 'Third-Party Liability',
    description:
      'Coverage for legal liability in busy harbors and anchorages.',
    icon: Shield,
  },
  {
    title: 'Navigation Limits',
    description:
      'Insurance valid for defined coastal cruising areas in specified zones.',
    icon: Compass,
  },
  {
    title: 'Salvage & Towing',
    description:
      'Professional recovery services in case of emergency or breakdown.',
    icon: Anchor,
  },
];

export default function CoastalCruisingInsurancePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Coastal Cruising Insurance New Zealand',
    description:
      'Insurance for coastal and bay cruising in New Zealand regional waters including Hauraki Gulf and Bay of Islands.',
    provider: {
      '@type': 'Organization',
      name: 'Yacht Insurance NZ',
      url: 'https://yachtinsurance.co.nz',
    },
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
    serviceType: 'Coastal Cruising Insurance',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* Hero Section */}
      <section className="h-[52vh] bg-gradient-to-br from-sky-600 via-sky-500 to-teal-500 text-white flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
        </div>

        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Coastal Cruising Insurance New Zealand
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-2xl mx-auto">
            Perfect for regional bay and coastal water cruising
          </p>
        </div>
      </section>

      {/* Above Fold Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Cruise New Zealand's Regional Waters with Confidence
                </h2>
                <p className="text-lg text-slate-700 mb-4">
                  New Zealand's coastal waters offer some of the world's most beautiful
                  cruising grounds. From the Bay of Islands to the Marlborough Sounds,
                  coastal cruising is a favorite pastime for Kiwi boat owners. Coastal
                  cruising insurance provides protection tailored to regional waters,
                  typically at more affordable rates than blue water coverage.
                </p>
                <p className="text-slate-600">
                  Our coastal cruising insurance specialists connect you with insurers
                  who understand the specific characteristics and risks of regional NZ
                  waters, providing coverage that matches your cruising patterns.
                </p>
              </div>

              <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
                <h3 className="font-semibold text-sky-900 mb-3">
                  Regional Cruising Benefits
                </h3>
                <p className="text-slate-700 text-sm">
                  Coastal cruising insurance typically costs 30-40% less than blue water
                  coverage, while providing excellent protection for regional sailing
                </p>
              </div>
            </div>

            <div>
              <QuoteForm mode="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cruising Routes */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Popular NZ Cruising Routes
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Iconic coastal cruising destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {popularyRoutes.map((route, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm"
              >
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {route.name}
                    </h3>
                    <p className="text-sm font-medium text-sky-600 mb-2">
                      {route.location}
                    </p>
                    <p className="text-slate-600 text-sm">
                      {route.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Coastal Cruising Coverage
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Protection for your regional cruising adventures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-sky-50 rounded-lg p-6 border border-sky-200"
                >
                  <Icon className="w-8 h-8 text-sky-600 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Navigation Limits */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Understanding Navigation Limits
          </h2>

          <div className="bg-white rounded-xl p-8 border border-sky-200 shadow-md">
            <p className="text-slate-700 mb-6">
              Coastal cruising insurance defines specific cruising areas where your
              vessel is covered. These limits are typically measured in nautical miles
              from designated ports or coastlines.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Typical Cruising Zones
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span>Within 50-100 nautical miles of home port</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span>Defined regional cruising areas (Gulf, Sounds, etc.)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span>Specific anchorages and harbors</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Exceeding Limits
                </h3>
                <p className="text-slate-600 mb-3">
                  If you plan occasional offshore passages or extended cruising beyond
                  your defined area:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span>Notify your insurer before departing</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span>Purchase extended coverage for longer trips</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                    <span>Consider blue water coverage if cruising offshore regularly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cruising Area Details */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Coastal Cruising Areas
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-sky-600 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                North Island Coastal
              </h3>
              <p className="text-slate-600 mb-3">
                Coverage for cruising in the Bay of Islands, Hauraki Gulf, Bay of Plenty,
                and Tasman coastal waters. These routes are ideal for year-round cruising
                with generally protected anchorages and established cruising communities.
              </p>
              <p className="text-sm text-slate-500">
                Includes: Auckland, Whangarei, Tauranga regions
              </p>
            </div>

            <div className="border-l-4 border-teal-600 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                South Island Coastal
              </h3>
              <p className="text-slate-600 mb-3">
                Coverage for the Marlborough Sounds, Fiordland, and Southland coastal
                cruising. These regions offer dramatic scenery and can involve longer
                passages between anchorages.
              </p>
              <p className="text-sm text-slate-500">
                Includes: Nelson, Southland, West Coast regions
              </p>
            </div>

            <div className="border-l-4 border-cyan-600 pl-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Strait Cruising
              </h3>
              <p className="text-slate-600 mb-3">
                Special coverage for Cook Strait and Tasman Strait passages. These
                routes connect North and South Island cruising grounds with reliable
                weather windows.
              </p>
              <p className="text-sm text-slate-500">
                Seasonal cruising March-October recommended
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Affordable Coastal Cruising Insurance
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm text-center">
              <p className="text-sm font-semibold text-sky-900 mb-2">
                Small Cruisers
              </p>
              <p className="text-2xl font-bold text-sky-600 mb-1">$400-700</p>
              <p className="text-xs text-sky-700">per year</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm text-center">
              <p className="text-sm font-semibold text-sky-900 mb-2">
                Mid-Size Yachts
              </p>
              <p className="text-2xl font-bold text-sky-600 mb-1">$700-1,200</p>
              <p className="text-xs text-sky-700">per year</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm text-center">
              <p className="text-sm font-semibold text-sky-900 mb-2">
                Larger Yachts
              </p>
              <p className="text-2xl font-bold text-sky-600 mb-1">$1,200+</p>
              <p className="text-xs text-sky-700">per year</p>
            </div>
          </div>

          <p className="text-center text-slate-600 mt-8 text-sm">
            Based on vessel value and cruising area. Exact premiums depend on many factors.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-sky-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Explore Coastal Waters with Confidence
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Get a free quote for coastal cruising insurance
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 font-bold rounded-lg hover:bg-sky-50 transition-colors shadow-xl"
          >
            Get Your Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
