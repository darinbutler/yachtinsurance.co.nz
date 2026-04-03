import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, Shield, BadgeCheck, Lock, Zap, CheckCircle2 } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Get Your Free Yacht Insurance Quote | YachtInsurance.co.nz',
  description: 'Get a free, no-obligation yacht insurance quote in under 2 minutes. Compare rates from 15+ NZ insurers. ICNZ registered, 100% secure, instant response.',
  keywords: [
    'yacht insurance quote',
    'boat insurance quote nz',
    'marine insurance quote',
    'free insurance quote',
    'yacht insurance contact',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://yachtinsurance.co.nz/contact',
    title: 'Get Your Free Yacht Insurance Quote | YachtInsurance.co.nz',
    description: 'Get a free, no-obligation yacht insurance quote in under 2 minutes. Compare rates from 15+ NZ insurers.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1602943554726-d8bebe914982?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Luxury yacht sailing in New Zealand waters',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://yachtinsurance.co.nz/contact',
  },
};

const trustBadges = [
  {
    icon: BadgeCheck,
    title: 'ICNZ Registered',
    description: 'Insurance Council of NZ verified',
  },
  {
    icon: Zap,
    title: 'No Broker Fees',
    description: 'Direct rates, no middleman markup',
  },
  {
    icon: Lock,
    title: '100% Secure',
    description: '256-bit SSL encryption on all data',
  },
  {
    icon: Zap,
    title: 'Instant Quotes',
    description: 'Same-day response from insurers',
  },
];

const whyChooseUs = [
  'Dedicated marine insurance specialists',
  'Personalized service from our expert team',
  'Access to exclusive insurer rates',
  'No hidden fees or surprise charges',
  'Fast claims support coordination',
  'Tailored coverage for all vessel types',
];

const contactFaqs = [
  faqs[0], // What does yacht insurance cover in NZ?
  faqs[1], // Do I need insurance for my yacht in New Zealand?
  faqs[4], // What is marine third-party liability?
];

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Yacht Insurance NZ Contact',
    description: 'Get your free yacht insurance quote',
    url: 'https://yachtinsurance.co.nz/contact',
    telephone: '+64-1-800-YACHT-NZ',
    email: 'hello@cover4you.co.nz',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+64-1-800-YACHT-NZ',
      contactType: 'Customer Service',
      areaServed: 'NZ',
      availableLanguage: 'en',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://yachtinsurance.co.nz',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: 'https://yachtinsurance.co.nz/contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section
        className="relative h-[46vh] min-h-[345px] sm:min-h-[403px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1602943554726-d8bebe914982?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/60" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Get Your Free Yacht Insurance Quote
          </h1>
          <p className="text-lg text-sky-100">
            Takes less than 2 minutes. No credit card required.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Left: Quote Form */}
            <div className="md:col-span-2">
              <div className="relative">
                {/* Badge */}
                <div className="absolute -top-4 left-6 bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-xs font-semibold z-10">
                  Takes less than 2 minutes
                </div>

                {/* Form Container */}
                <QuoteForm mode="full" />
              </div>
            </div>

            {/* Right: Contact Info & Trust Badges */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Get in Touch
                </h3>

                {/* Email */}
                <div className="flex gap-4 mb-6 pb-6 border-b border-slate-200">
                  <div className="p-3 bg-sky-100 rounded-lg h-fit">
                    <Mail className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium">Email</p>
                    <a
                      href="mailto:hello@cover4you.co.nz"
                      className="text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                    >
                      hello@cover4you.co.nz
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="p-3 bg-teal-100 rounded-lg h-fit">
                    <Phone className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 font-medium">Phone</p>
                    <a
                      href="tel:+641800924824"
                      className="text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                    >
                      +64 1800 924 824
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust Badges Grid */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Why Choose Us
                </h3>
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 border border-slate-200 hover:border-sky-300 transition-colors"
                    >
                      <div className="flex gap-3">
                        <div className="p-2 bg-sky-50 rounded-lg h-fit">
                          <Icon className="w-4 h-4 text-sky-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-slate-900">
                            {badge.title}
                          </p>
                          <p className="text-xs text-slate-600 mt-0.5">
                            {badge.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Why Choose Us Extended Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Why Choose Yacht Insurance NZ?
              </h3>

              <ul className="space-y-3">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-block px-6 py-3 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-colors"
                >
                  Learn More About Our Service
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-teal-50 rounded-lg p-8 border border-sky-200">
              <h4 className="text-lg font-bold text-slate-900 mb-4">
                Quick Facts
              </h4>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-600 font-medium">
                    Average Response Time
                  </p>
                  <p className="text-2xl font-bold text-sky-600">Under 24 Hours</p>
                </div>

                <div className="border-t border-sky-300 pt-4">
                  <p className="text-sm text-slate-600 font-medium">
                    Insurance Partners
                  </p>
                  <p className="text-2xl font-bold text-sky-600">15+ Insurers</p>
                </div>

                <div className="border-t border-sky-300 pt-4">
                  <p className="text-sm text-slate-600 font-medium">
                    Vessels Covered
                  </p>
                  <p className="text-2xl font-bold text-sky-600">All Types</p>
                </div>

                <div className="border-t border-sky-300 pt-4">
                  <p className="text-sm text-slate-600 font-medium">
                    Average Quote Cost
                  </p>
                  <p className="text-2xl font-bold text-sky-600">$350+ p.a.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-sky-300">
                <p className="text-sm text-slate-700 text-center">
                  <span className="font-semibold">No Hidden Fees.</span> Compare
                  real rates from real insurers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Below Form */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Insurance FAQs
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about yacht insurance in New Zealand
            </p>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-lg border border-slate-200 hover:border-sky-300 transition-colors"
              >
                <summary className="flex items-center justify-between w-full p-6 cursor-pointer font-semibold text-slate-900 hover:text-sky-600 transition-colors">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-slate-600 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-200">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/faqs"
              className="inline-block px-8 py-3 bg-sky-600 text-white rounded-xl font-semibold hover:bg-sky-700 transition-colors"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-sky-600 to-teal-500 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Protect Your Vessel?
          </h2>
          <p className="text-lg text-sky-100 mb-8">
            Get your personalized insurance quote now and find the perfect coverage for your yacht or boat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote-form"
              className="px-8 py-3 bg-white text-sky-700 rounded-xl font-semibold hover:bg-sky-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Your Quote
            </a>
            <Link
              href="/compare"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-sky-700 transition-colors"
            >
              Compare All Insurers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
