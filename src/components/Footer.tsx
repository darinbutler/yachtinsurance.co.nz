import Link from 'next/link';
import Logo from './Logo';
import { Mail } from 'lucide-react';

const vesselTypes = [
  { label: 'Yacht', href: '/sectors/yacht' },
  { label: 'Jet Ski', href: '/sectors/jetski' },
  { label: 'Dinghy', href: '/sectors/dinghy' },
  { label: 'Tender', href: '/sectors/tender' },
  { label: 'Racing Boat', href: '/sectors/racing-boat' },
  { label: 'Coastal Cruising', href: '/sectors/coastal-cruising' },
  { label: 'Blue Water Cruiser', href: '/sectors/bluewater' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="mb-4">
              <Logo variant="white" />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              New Zealand's leading yacht insurance comparison platform. Compare top insurers, save on premiums, and protect your vessel with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Coverage', href: '/coverage' },
                { label: 'Compare', href: '/compare' },
                { label: 'Blog', href: '/blog' },
                { label: 'About', href: '/about' },
                { label: 'FAQs', href: '/faqs' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vessel Types */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Vessel Types</h3>
            <ul className="space-y-2.5">
              {vesselTypes.map((type) => (
                <li key={type.href}>
                  <Link
                    href={type.href}
                    className="text-slate-300 hover:text-sky-400 transition-colors text-sm"
                  >
                    {type.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-sky-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@cover4you.co.nz"
                  className="text-slate-300 hover:text-sky-400 transition-colors text-sm"
                >
                  hello@cover4you.co.nz
                </a>
              </li>
              <li className="text-slate-300 text-sm">
                Quote <span className="font-semibold">YI</span> for best prices
              </li>
            </ul>
          </div>
        </div>

        {/* How This Site Works Disclaimer */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-slate-700">
          <h4 className="text-white font-bold text-sm mb-2">How This Site Works</h4>
          <p className="text-slate-300 text-xs leading-relaxed">
            YachtInsurance.co.nz is operated by Cover4You Group. We are a referral service — when you submit a quote request, your details are passed to licensed insurance advisers and brokers who will contact you with quotes and coverage options. We do not sell insurance directly and do not provide regulated financial advice. Our advisers earn commission from insurers when a policy is placed. This service is completely free to you — you pay nothing extra.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-slate-400 text-xs">
              <p>
                &copy; {new Date().getFullYear()} Yacht Insurance NZ. All rights reserved. |{' '}
                <a href="https://icnz.org.nz" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
                  Insurance Council of New Zealand (ICNZ)
                </a>
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-slate-400 hover:text-sky-400 transition-colors text-xs"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-400 hover:text-sky-400 transition-colors text-xs"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="text-center text-slate-400 text-xs mt-6">
            <p>Powered by <span className="text-sky-400 font-semibold">Cover4You</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
