import type { Metadata } from 'next';
import Link from 'next/link';
import { Sailboat, Shield, Trophy, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Dinghy Insurance New Zealand | Sailing & Tender Coverage',
  description:
    'Affordable dinghy insurance in New Zealand for sailing dinghies, racing dinghies, and tenders. Quick quotes from specialist providers.',
  keywords: [
    'dinghy insurance nz',
    'sailing dinghy insurance',
    'inflatable dinghy insurance',
    'racing dinghy insurance',
    'tender insurance',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://yachtinsurance.co.nz/sectors/dinghy',
    title: 'Dinghy Insurance New Zealand',
    description:
      'Affordable insurance for sailing dinghies, racing dinghies, and tender vessels.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1768667779694-c8a1ec81528e?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Sailing dinghies on the water',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://yachtinsurance.co.nz/sectors/dinghy',
  },
};

const dinghyTypes = [
  {
    type: 'Sailing Dinghies',
    description:
      'Single or double-handed racing dinghies and day sailers. Includes popular classes like Optimist, Laser, and 470.',
  },
  {
    type: 'Inflatable Dinghies',
    description:
      'Rigid inflatable boats and soft inflatables used for recreation and water sports.',
  },
  {
    type: 'Tenders',
    description:
      'Small auxiliary vessels used to access larger yachts or as standalone fishing boats.',
  },
  {
    type: 'Racing Dinghies',
    description:
      'High-performance racing vessels competing in club and national racing series.',
  },
];

const coveragePoints = [
  {
    title: 'Hull Damage',
    description: 'Protection against accidental damage and collision repair costs.',
  },
  {
    title: 'Third-Party Liability',
    description:
      'Covers injuries to others and damage to other property or vessels.',
  },
  {
    title: 'Theft Protection',
    description:
      'Coverage if your dinghy or equipment is stolen from moorings or storage.',
  },
  {
    title: 'Racing Coverage (Optional)',
    description:
      'Additional protection specifically for racing incidents and competition damage.',
  },
];

export default function DinghyInsurancePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Dinghy Insurance New Zealand',
    description:
      'Affordable dinghy and small boat insurance for sailing dinghies, racing dinghies, and inflatable tenders.',
    provider: {
      '@type': 'Organization',
      name: 'Yacht Insurance NZ',
      url: 'https://yachtinsurance.co.nz',
    },
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
    serviceType: 'Dinghy Insurance',
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
            Dinghy Insurance New Zealand
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-2xl mx-auto">
            Affordable coverage for sailing dinghies and small vessels
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
                  Insurance for Your Dinghy
                </h2>
                <p className="text-lg text-slate-700 mb-4">
                  Sailing dinghies and small boats are cherished by New Zealand's
                  boating community, whether you compete in racing series or enjoy
                  casual day sailing. Even small vessels need proper insurance
                  protection against damage, theft, and liability.
                </p>
                <p className="text-slate-600">
                  We help dinghy owners find affordable coverage that protects their
                  investment without breaking the bank. From racing dinghies to
                  inflatable tenders, we connect you with specialist insurers who
                  understand small boat insurance.
                </p>
              </div>

              <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
                <h3 className="font-semibold text-sky-900 mb-3">
                  Affordable Protection
                </h3>
                <p className="text-3xl font-bold text-sky-600 mb-2">
                  From $150/year
                </p>
                <p className="text-sm text-sky-700">
                  for basic dinghy insurance coverage
                </p>
              </div>
            </div>

            <div>
              <QuoteForm mode="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Dinghy Types */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Types of Dinghies We Cover
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From racing dinghies to inflatable tenders
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dinghyTypes.map((dinghy, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {dinghy.type}
                </h3>
                <p className="text-slate-600">{dinghy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            What's Covered
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {coveragePoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-sky-50 rounded-lg p-6 border border-sky-200"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-slate-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Racing Dinghy Coverage */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Racing Dinghy Insurance
              </h2>
              <p className="text-slate-700 mb-4">
                New Zealand has a vibrant dinghy racing community with competitive
                series at clubs throughout the country. Racing brings special
                insurance considerations.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Trophy className="w-6 h-6 text-sky-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Race-Specific Coverage
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Includes incident damage during sanctioned races and regattas
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Users className="w-6 h-6 text-sky-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Protest Coverage
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Legal costs for race protests and sailing disputes
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Equipment Protection
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Coverage for sails, masts, rigging, and racing gear
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border border-sky-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Racing Dinghy Coverage Options
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Day Racing
                  </h4>
                  <p className="text-sm text-slate-600">
                    Coverage for local club racing events
                  </p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Regional Events
                  </h4>
                  <p className="text-sm text-slate-600">
                    Extended coverage for regional championships
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    National Regattas
                  </h4>
                  <p className="text-sm text-slate-600">
                    Full coverage for national-level racing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Information */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Affordable Dinghy Insurance
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-sky-50 rounded-lg p-6 border border-sky-200 text-center">
              <p className="text-sm font-semibold text-sky-900 mb-2">
                Small Dinghies
              </p>
              <p className="text-2xl font-bold text-sky-600 mb-1">$150-300</p>
              <p className="text-xs text-sky-700">per year</p>
            </div>

            <div className="bg-teal-50 rounded-lg p-6 border border-teal-200 text-center">
              <p className="text-sm font-semibold text-teal-900 mb-2">
                Racing Dinghies
              </p>
              <p className="text-2xl font-bold text-teal-600 mb-1">$300-500</p>
              <p className="text-xs text-teal-700">per year</p>
            </div>

            <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-200 text-center">
              <p className="text-sm font-semibold text-cyan-900 mb-2">
                Inflatable Tenders
              </p>
              <p className="text-2xl font-bold text-cyan-600 mb-1">$200-400</p>
              <p className="text-xs text-cyan-700">per year</p>
            </div>
          </div>

          <p className="text-center text-slate-600 mt-8">
            Actual premiums depend on vessel value, usage, and coverage selected
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-sky-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Protect Your Dinghy Today
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Get an instant quote for dinghy insurance
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
