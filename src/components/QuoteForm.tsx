'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle2, Shield, Lock } from 'lucide-react';

interface QuoteFormProps {
  mode?: 'compact' | 'full';
}

export default function QuoteForm({ mode = 'full' }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const formData = new FormData(e.currentTarget);
      const data: Record<string, string> = {};
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });

      const response = await fetch('https://formsubmit.co/ajax/hello@cover4you.co.nz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        e.currentTarget.reset();
        window.location.href = 'https://yachtinsurance.co.nz/thank-you';
      } else {
        setSubmitError('Failed to submit form. Please try again.');
      }
    } catch (error) {
      setSubmitError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Hidden fields for FormSubmit.co */}
      <input type="hidden" name="_subject" value="New Quote Request - YachtInsurance.co.nz" />
      <input type="hidden" name="_next" value="https://yachtinsurance.co.nz/thank-you" />
      <input type="hidden" name="_cc" value="butlerdarin@gmail.com" />
      <input type="hidden" name="_captcha" value="false" />

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400"
          placeholder="Your full name"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400"
          placeholder="your@email.com"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400"
          placeholder="+64 9 XXX XXXX"
        />
      </div>

      {/* Vessel Type Field */}
      <div>
        <label htmlFor="vesselType" className="block text-sm font-medium text-slate-700 mb-1.5">
          Vessel Type
        </label>
        <select
          id="vesselType"
          name="vessel_type"
          required
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all text-slate-900 bg-white"
        >
          <option value="">Select a vessel type...</option>
          <option value="Yacht">Yacht</option>
          <option value="Jet Ski">Jet Ski</option>
          <option value="Dinghy">Dinghy</option>
          <option value="Tender">Tender</option>
          <option value="Racing Boat">Racing Boat</option>
          <option value="Coastal Cruising">Coastal Cruising</option>
          <option value="Blue Water Cruiser">Blue Water Cruiser</option>
        </select>
      </div>

      {/* Estimated Vessel Value Field */}
      <div>
        <label htmlFor="vesselValue" className="block text-sm font-medium text-slate-700 mb-1.5">
          Estimated Vessel Value
        </label>
        <select
          id="vesselValue"
          name="vessel_value"
          required
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all text-slate-900 bg-white"
        >
          <option value="">Select a value range...</option>
          <option value="Under $25,000">Under $25,000</option>
          <option value="$25,000 - $75,000">$25,000 - $75,000</option>
          <option value="$75,000 - $150,000">$75,000 - $150,000</option>
          <option value="$150,000 - $500,000">$150,000 - $500,000</option>
          <option value="Over $500,000">Over $500,000</option>
        </select>
      </div>

      {/* Additional Details (Full mode only) */}
      {mode === 'full' && (
        <div>
          <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-1.5">
            Additional Details (Optional)
          </label>
          <textarea
            id="details"
            name="additional_details"
            rows={4}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400 resize-none"
            placeholder="Tell us more about your vessel, usage, or coverage needs..."
          />
        </div>
      )}

      {/* Error Message */}
      {submitError && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-700">{submitError}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-3.5 bg-gradient-to-r from-sky-600 to-teal-500 text-white rounded-xl font-semibold text-lg hover:from-sky-700 hover:to-teal-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        {isSubmitting ? 'Submitting...' : 'Get My Free Quote →'}
      </button>
      <p className="text-center text-xs text-slate-400 mt-2">No credit card required</p>
    </form>
  );

  const trustBadges = (
    <div className="mt-6 pt-6 border-t border-slate-200">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
          <span className="text-xs text-slate-600 font-medium">ICNZ Registered</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
          <span className="text-xs text-slate-600 font-medium">No Broker Fees</span>
        </div>
        <div className="flex items-center gap-2">
          <Lock size={16} className="text-emerald-500 flex-shrink-0" />
          <span className="text-xs text-slate-600 font-medium">256-bit SSL Secure</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-emerald-500 flex-shrink-0" />
          <span className="text-xs text-slate-600 font-medium">24hr Response</span>
        </div>
      </div>
    </div>
  );

  if (mode === 'compact') {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-lg ring-2 ring-sky-500 sticky top-20">
        {/* Compact Header */}
        <div className="bg-gradient-to-r from-sky-600 to-teal-500 px-5 py-4">
          <div className="flex items-center gap-2 mb-1">
            <Shield size={18} className="text-white" />
            <h3 className="text-lg font-bold text-white">Get Your Free Quote</h3>
          </div>
          <p className="text-sky-100 text-sm">No obligation — takes under 2 minutes</p>
        </div>
        <div className="px-5 py-5">
          {formContent}
          {trustBadges}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-xl ring-2 ring-sky-500">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-teal-500 px-6 py-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-white/20 rounded-lg">
            <Shield size={22} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Free, No-Obligation Quote</h2>
        </div>
        <p className="text-sky-100 mt-1">Get a personalized quote in under 2 minutes</p>
      </div>

      {/* Form Content */}
      <div className="px-6 py-8">
        {formContent}
        {trustBadges}
      </div>
    </div>
  );
}
