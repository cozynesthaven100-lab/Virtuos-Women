import SectionHeading from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { whatWeDo, org } from '@/data/content';
import { ArrowRight } from 'lucide-react';
import { navigateTo } from '@/router';

export default function WhatWeDo() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="pt-24">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-accent-50 via-cream-50 to-primary-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-mw container-px relative">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 mb-4">
              What We Do
            </span>
            <h1 className="reveal reveal-delay-1 font-serif text-display font-semibold text-cream-900 text-balance mb-6">
              Our Areas of Work
            </h1>
            <p className="reveal reveal-delay-2 text-xl text-cream-800 leading-relaxed">
              From prayer to outreach, here are the ways we serve women and our community —
              every {org.contact.meetingDay}, {org.contact.meetingTime}.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="section-py bg-cream-50">
        <div className="container-mw container-px">
          <div className="space-y-16">
            {whatWeDo.map((item, i) => {
              const Icon = item.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={item.title}
                  className={`reveal grid lg:grid-cols-2 gap-10 items-center ${
                    isEven ? '' : 'lg:[&>*:first-child]:order-2'
                  }`}
                >
                  {/* Visual side */}
                  <div className="relative">
                    <div
                      className={`absolute ${isEven ? '-top-4 -left-4' : '-top-4 -right-4'} w-24 h-24 rounded-2xl ${
                        isEven ? 'bg-primary-100' : 'bg-accent-100'
                      } -z-10`}
                    />
                    <div
                      className={`rounded-2xl shadow-lg p-10 lg:p-14 ${
                        isEven ? 'bg-gradient-to-br from-primary-50 to-cream-50' : 'bg-gradient-to-br from-accent-50 to-cream-50'
                      } border border-cream-200/60`}
                    >
                      <div
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${
                          isEven ? 'bg-primary-600' : 'bg-accent-600'
                        }`}
                      >
                        <Icon size={36} className="text-white" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['Faith', 'Growth', 'Community', 'Purpose'].map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-white/60 text-xs font-medium text-cream-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div>
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                        isEven ? 'text-primary-600' : 'text-accent-600'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')} — Area of Work
                    </span>
                    <h2 className="heading-3 mt-3 mb-5">{item.title}</h2>
                    <p className="text-body-lg">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="container-mw container-px relative text-center">
          <h2 className="reveal font-serif text-heading font-semibold text-white mb-6">
            Get Involved
          </h2>
          <p className="reveal reveal-delay-1 text-lg text-cream-300 max-w-2xl mx-auto mb-8">
            Want to learn more about our activities or join one of our programs? We'd love to
            connect with you.
          </p>
          <button onClick={() => navigateTo('/activities')} className="btn-primary reveal reveal-delay-2">
            View Our Activities
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
