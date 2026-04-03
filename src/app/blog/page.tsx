import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
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
        className="h-[35vh] bg-gradient-to-br from-sky-600 via-sky-500 to-teal-500 text-white flex items-center justify-center relative overflow-hidden"
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

      {/* Above Fold: Intro + Quote Form */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p className="text-lg text-slate-700 mb-4">
                Welcome to the YachtInsurance.co.nz blog, your trusted resource
                for marine insurance knowledge. Our expert guides cover
                everything from understanding hull coverage to managing risks on
                the water.
              </p>
              <p className="text-slate-600">
                Whether you're a new boat owner or an experienced sailor, our
                articles provide practical advice, coverage explanations, and
                insights into New Zealand's marine insurance landscape.
              </p>
            </div>
            <div>
              <QuoteForm mode="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
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
                  <div className="space-y-3 mb-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-sky-600" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-sky-600" />
                      <span>
                        {new Date(post.date).toLocaleDateString('en-NZ', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-sky-600" />
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
    </>
  );
}
