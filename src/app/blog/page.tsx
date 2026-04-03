import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight, Shield } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Yacht Insurance Blog & Guides | YachtInsurance.co.nz',
  description:
    'Read expert guides on yacht insurance in New Zealand. Learn about coverage types, risk management, and how to protect your vessel with comprehensive insurance.',
  keywords: [
    'yacht insurance guides',
    'boat insurance blog',
    'marine insurance tips',
    'yacht insurance nz',
    'boat insurance advice',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://yachtinsurance.co.nz/blog',
    title: 'Yacht Insurance Blog & Guides',
    description:
      'Expert guides on yacht and marine insurance in New Zealand to help boat owners make informed decisions.',
    siteName: 'Yacht Insurance NZ',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1774256627968-01e193f1e777?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Yacht sailing in blue water',
        type: 'image/jpeg',
      },
    ],
  },
  alternates: {
    canonical: 'https://yachtinsurance.co.nz/blog',
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Yacht Insurance Blog & Guides',
            description:
              'Expert guides on yacht and marine insurance in New Zealand',
            url: 'https://yachtinsurance.co.nz/blog',
            mainEntity: blogPosts.map((post) => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              image: post.image,
              datePublished: post.date,
              author: {
                '@type': 'Person',
                name: post.author,
              },
              articleBody: post.content,
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section
        className="h-[40vh] bg-gradient-to-br from-sky-600 via-sky-500 to-teal-500 text-white flex items-center justify-center relative overflow-hidden"
        aria-label="Blog hero section"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
        </div>

        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Yacht Insurance Blog & Guides
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-2xl mx-auto">
            Expert insights to help you protect your vessel and make informed
            insurance decisions
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-sky-600 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-sky-600" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-sky-600" />
                      <span>
                        {new Date(post.date).toLocaleDateString('en-NZ', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-sky-600" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-sky-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <Shield size={16} className="text-white" />
            <span className="text-sm font-medium text-white">Free, No-Obligation Quotes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Protect Your Vessel?
          </h2>
          <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
            Compare quotes from 15+ top NZ marine insurers and find the right coverage for your boat, yacht, or jet ski.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-sky-700 rounded-xl font-semibold text-lg hover:bg-sky-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/compare"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-sky-700 transition-colors"
            >
              Compare Insurers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
