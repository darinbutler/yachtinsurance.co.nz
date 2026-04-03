import type { Metadata } from 'next';
import Link from 'next/link';
import { Trophy, Shield, Zap, Users, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Racing Boat Insurance New Zealand | Yacht Racing Coverage',
  description:
    'Specialist racing yacht and sailing boat insurance in New Zealand. Coverage for competitive sailing, regattas, and racing events. America\'s Cup heritage.',
  keywords: [
    'racing boat insurance nz',
    'yacht racing insurance',
    'competitive sailing insurance',
    'regatta insurance',
    'sailing yacht insurance',
    'americas cup',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://yachtinsurance.co.nz/sectors/racing-boat',
    title: 'Racing Boat Insurance New Zealand',
    description:
      'Specialist racing yacht insurance for competitive sailing and regattas in New Zealand.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Racing yachts competing',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://yachtinsurance.co.nz/sectors/racing-boat',
  },
};

const coverageItems = [
  {
    title: 'Race-Specific Damage',
    description:
      'Coverage for incident damage that occurs during sanctioned racing events and regattas.',
    icon: Trophy,
  },
  {
    title: 'Crew Liability',
    description:
      'Protection against claims for crew injuries and third-party liability during racing.',
    icon: Users,
  },
  {
    title: 'Rigging & Equipment',
    description:
      'Specialized coverage for racing sails, carbon masts, rigging systems, and performance gear.',
    icon: Zap,
  },
  {
    title: 'Protest & Legal',
    description:
      'Coverage for legal costs and representation in race protests and sailing disputes.',
    icon: Globe,
  },
];

const racingCoverageTypes = [
  {
    type: 'Day Racing',
    description:
      'Coverage for local club racing series and regular competitive events.',
  },
  {
    type: 'Regional Championships',
    description:
      'Extended coverage for regional racing series and qualifying events.',
  },
  {
    type: 'National Events',
    description:
      'Full coverage for national championship regattas and elite competitions.',
  },
  {
    type: 'Offshore Racing',
    description:
      'Specialized coverage for offshore and long-distance racing events.',
  },
];

export default function RacingBoatInsurancePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Racing Boat Insurance New Zealand',
    description:
      'Specialist racing yacht and competitive sailing boat insurance for New Zealand racers.',
    provider: {
      '@type': 'Organization',
      name: 'Yacht Insurance NZ',
      url: 'https://yachtinsurance.co.nz',
    },
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
    serviceType: 'Racing Boat Insurance',
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
      <section className="h-[45vh] bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-600 text-white flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
        </div>

        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Racing Boat Insurance New Zealand
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-2xl mx-auto">
            Specialist coverage for competitive sailing and racing yachts
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
                  Insurance for Competitive Sailors
                </h2>
                <p className="text-lg text-slate-700 mb-4">
                  New Zealand has a rich tradition of competitive sailing, from club
                  racing series to national championships and the legendary America's
                  Cup. Racing demands specialized insurance that protects your
                  investment while accommodating the unique risks of competitive sport.
                </p>
                <p className="text-slate-600">
                  Standard yacht insurance often excludes or limits racing coverage.
                  Our specialist racing boat insurance is designed specifically for
                  competitive sailors, with coverage tailored to racing activities and
                  competitive events.
                </p>
              </div>

              <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
                <h3 className="font-semibold text-sky-900 mb-3">
                  New Zealand Racing Heritage
                </h3>
                <p className="text-slate-700 text-sm">
                  From Auckland's thriving winter racing series to classic yacht
                  divisions, racing is fundamental to NZ sailing culture
                </p>
              </div>
            </div>

            <div>
              <QuoteForm mode="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* America's Cup Context */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 border border-sky-200 shadow-md">
            <div className="flex gap-6 items-start">
              <Trophy className="w-12 h-12 text-sky-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  New Zealand's Racing Pedigree
                </h3>
                <p className="text-slate-700 mb-4">
                  New Zealand's racing sailors have achieved extraordinary success on
                  the international stage. With two America's Cup victories and
                  countless world championships, Kiwi racers are known for skill,
                  innovation, and competitive excellence.
                </p>
                <p className="text-slate-700">
                  From professional campaigns to dedicated club racers, New Zealand's
                  competitive sailing community demands insurance partners who
                  understand the sport's unique requirements and risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Race-Specific Coverage */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Race-Specific Coverage
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Protection designed for competitive sailing activities
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

      {/* Types of Racing Coverage */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Racing Coverage Levels
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From club racing to national championships
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {racingCoverageTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-sky-200 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {type.type}
                </h3>
                <p className="text-slate-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Considerations */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Special Considerations for Racing
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Rigging & Equipment
              </h3>
              <p className="text-slate-700 mb-4">
                Racing yachts feature expensive, specialized equipment. Your insurance
                should specifically cover:
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Carbon fiber masts and booms
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Racing sails and sail systems
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Advanced rigging and fittings
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Navigation and performance systems
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Racing Activity Documentation
              </h3>
              <p className="text-slate-700 mb-4">
                To get the best rates on racing boat insurance:
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Provide racing schedule and series information
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Document racing club memberships
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Share crew qualifications and experience
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  Maintain safety equipment certifications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Protest & Legal Coverage */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Protest & Legal Coverage
          </h2>

          <div className="bg-white rounded-xl p-8 border border-sky-200 shadow-md">
            <p className="text-slate-700 mb-6">
              Racing disputes can result in expensive protest hearings and potential
              appeals. Our racing insurance includes coverage for:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-sky-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Legal Representation
                </h4>
                <p className="text-slate-600 text-sm">
                  Coverage for attorney fees in racing protests and legal disputes
                </p>
              </div>
              <div className="border-l-4 border-sky-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Expert Witnesses
                </h4>
                <p className="text-slate-600 text-sm">
                  Costs for technical experts in race protest hearings
                </p>
              </div>
              <div className="border-l-4 border-sky-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Appeals
                </h4>
                <p className="text-slate-600 text-sm">
                  Coverage for appeals of protest decisions
                </p>
              </div>
              <div className="border-l-4 border-sky-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Regulatory Compliance
                </h4>
                <p className="text-slate-600 text-sm">
                  Support for equipment rule compliance verification
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Racing Series */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Coverage for NZ Racing Series
          </h2>

          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            We provide specialized insurance for major New Zealand racing competitions
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
              <h3 className="font-semibold text-slate-900 mb-2">
                Summer & Winter Racing Series
              </h3>
              <p className="text-slate-600 text-sm">
                Coverage for club-level racing series throughout Auckland, Wellington,
                and Christchurch
              </p>
            </div>

            <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
              <h3 className="font-semibold text-slate-900 mb-2">
                Offshore Yacht Racing
              </h3>
              <p className="text-slate-600 text-sm">
                Extended coverage for offshore racing events including the Round the
                North Island Race
              </p>
            </div>

            <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
              <h3 className="font-semibold text-slate-900 mb-2">
                Classic & Vintage Classes
              </h3>
              <p className="text-slate-600 text-sm">
                Specialized coverage for classic yacht divisions and heritage racing
                classes
              </p>
            </div>

            <div className="bg-sky-50 rounded-lg p-6 border border-sky-200">
              <h3 className="font-semibold text-slate-900 mb-2">
                Match Racing Events
              </h3>
              <p className="text-slate-600 text-sm">
                Coverage for head-to-head match racing competitions and fleet racing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Race with Confidence
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Get specialist racing boat insurance for competitive sailing
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
