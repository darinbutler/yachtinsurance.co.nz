import { Anchor, Compass, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Anchor,
    title: 'Tell Us About Your Vessel',
    description: 'Share your vessel details and coverage needs',
  },
  {
    number: 2,
    icon: Compass,
    title: 'Compare Top Insurers',
    description: 'We match you with NZ\'s leading marine insurance providers',
  },
  {
    number: 3,
    icon: TrendingUp,
    title: 'Get Covered & Save',
    description: 'Choose the best policy and save with our exclusive rates',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get personalized insurance quotes in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex flex-col items-center">
                {/* Numbered Circle */}
                <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mb-6 border-2 border-sky-600">
                  <span className="text-2xl font-bold text-sky-600">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="p-4 bg-sky-50 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-sky-600" />
                </div>

                {/* Card */}
                <div className="bg-sky-50 rounded-lg p-6 text-center flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (hidden on last) */}
                {step.number < 3 && (
                  <div className="hidden md:block absolute left-1/3 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-sky-600 to-transparent mt-24" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
