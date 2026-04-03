import type { Metadata } from 'next';
import Link from 'next/link';
import { Anchor, Shield, Waves, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Tender Insurance New Zealand | Yacht Tender & RIB Coverage',
  description:
    'Specialist tender and RIB boat insurance for New Zealand yacht owners. Protect your auxiliary vessel with comprehensive coverage.',
  keywords: [
    'tender insurance nz',
    'rib boat insurance',
    'yacht tender insurance',
    'inflatable tender',
    'rescue tender insurance',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://yachtinsurance.co.nz/sectors/tender',
    title: 'Tender Insurance New Zealand',
    description:
      'Specialist insurance for yacht tenders, RIBs, and inflatable auxiliary vessels.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1769655991063-cc63efc4e2d0?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Tender boat alongside yacht',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://yachtinsurance.co.nz/sectors/tender',
  },
};

const tenderTypes = [
  {
    type: 'RIBs (Rigid Inflatables)',
    description:
      'Popular auxiliary vessels for yacht access, with rigid hulls and inflatable tubes.',
  },
  {
    type: 'Inflatable Tenders',
    description:
      'Lightweight, packable dinghies perfect for cruising yachts with storage constraints.',
  },
  {
    type: 'Hard Dinghies',
    description:
      'Traditional wooden or plastic tenders used alongside larger yachts.',
  },
  {
    type: 'Rescue Tenders',
    description:
      'Specialized rescue and recovery vessels used for emergency response.',
  },
];

const coverageItems = [
  {
    title: 'Hull & Engine Protection',
    description:
      'Comprehensive damage coverage for your tender vessel and outboard engine.',
    icon: Anchor,
  },
  {
    title: 'Third-Party Liability',
    description:
      'Protection for claims when your tender causes injury or damage to others.',
    icon: Shield,
  },
  {
    title: 'Equipment & Outboards',
    description:
      'Coverage for engines, GPS, communication equipment, and other marine gear.',
    icon: Waves,
  },
  {
    title: 'Towing & Recovery',
    description:
      'Professional assistance if your tender becomes disabled or requires recovery.',
    icon: Zap,
  },
];

export default function TenderInsurancePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tender Insurance New Zealand',
    description:
      'Specialist tender and RIB boat insurance for New Zealand yacht owners.',
    provider: {
      '@type': 'Organization',
      name: 'Yacht Insurance NZ',
      url: 'https://yachtinsurance.co.nz',
    },
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
    serviceType: 'Tender Insurance',
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
      <section className="h-[45vh] bg-gradient-to-br from-sky-600 via-sky-500 to-teal-500 text-white flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
        </div>

        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Tender Insurance New Zealand
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-2xl mx-auto">
            Protection for yacht tenders, RIBs, and auxiliary vessels
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
                  Your Tender Deserves Protection
                </h2>
                <p className="text-lg text-slate-700 mb-4">
                  Your tender is an essential part of your cruising setup, whether
                  it's a sturdy RIB, an inflatable dinghy, or a traditional hard
                  tender. Often left unattended at anchorages or marinas, tenders
                  face unique risks—theft, damage from weather, and collision damage.
                </p>
                <p className="text-slate-600">
                  Tender insurance is often overlooked by yacht owners but is
                  essential protection. We help you find affordable coverage that
                  works with your yacht insurance or as a standalone policy.
                </p>
              </div>

              <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
                <h3 className="font-semibold text-sky-900 mb-3">
                  Bundle with Yacht Insurance
                </h3>
                <p className="text-slate-700 text-sm">
                  Many insurers offer discounted rates when you insure your yacht
                  and tender together
                </p>
              </div>
            </div>

            <div>
              <QuoteForm mode="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Tender Types */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Types of Tenders We Cover
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From RIBs to traditional hard dinghies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tenderTypes.map((tender, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {tender.type}
                </h3>
                <p className="text-slate-600">{tender.description}</p>
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
              Tender Coverage Options
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive protection for your auxiliary vessel
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

      {/* Linked Vessel Coverage */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Linked Vessel Coverage
          </h2>

          <div className="bg-white rounded-xl p-8 border border-sky-200 shadow-md">
            <p className="text-slate-700 mb-6">
              Most tender insurance is linked to your primary yacht insurance
              policy. This integration offers several advantages:
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Single Deductible
                  </h4>
                  <p className="text-slate-600">
                    One deductible applies across yacht and tender claims
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Package Discounts
                  </h4>
                  <p className="text-slate-600">
                    Bundled coverage typically costs 20-30% less than separate policies
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Coordinated Claims
                  </h4>
                  <p className="text-slate-600">
                    Single insurer handles both yacht and tender claims for faster
                    resolution
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Easy Updates
                  </h4>
                  <p className="text-slate-600">
                    Simple process to adjust tender coverage as you upgrade or change
                    vessels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage & Storage */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Tender Usage & Storage
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                At-Anchor Storage
              </h3>
              <p className="text-slate-700 mb-4">
                Most tender insurance covers your vessel while moored at anchor or
                tied to your yacht. This is the primary use case for cruising sailors.
              </p>
              <p className="text-slate-600 text-sm">
                Insurers appreciate that at-anchor tender storage with proper
                security typically costs less to insure than marina mooring.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Marina Mooring
              </h3>
              <p className="text-slate-700 mb-4">
                Tender insurance also covers your vessel at marina moorings, though
                premiums may be slightly higher due to increased theft risk.
              </p>
              <p className="text-slate-600 text-sm">
                Inform your insurer if you typically moor your tender at a specific
                marina for best rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-sky-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Insure Your Tender Today
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Get a free quote for tender insurance, standalone or linked to your yacht
            policy
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
