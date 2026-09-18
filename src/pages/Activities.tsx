import SectionHeading from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { activities, org } from '@/data/content';
import { ArrowRight } from 'lucide-react';
import { navigateTo } from '@/router';

export default function Activities() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="pt-24">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-50 via-cream-50 to-gold-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-mw container-px relative">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 mb-4">
              Activities & Programs
            </span>
            <h1 className="reveal reveal-delay-1 font-serif text-display font-semibold text-cream-900 text-balance mb-6">
              Our Activities & Programs
            </h1>
            <p className="reveal reveal-delay-2 text-xl text-cream-800 leading-relaxed">
              Our main gathering is every {org.contact.meetingDay}, {org.contact.meetingTime}, at{' '}
              {org.contact.fullAddress}. Here are the other activities we run together.
            </p>
          </div>
        </div>
      </section>

      {/* Activities grid */}
      <section className="section-py bg-cream-50">
        <div className="container-mw container-px">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, i) => (
              <div
                key={activity.title}
                className={`reveal reveal-delay-${(i % 3) + 1} card card-hover overflow-hidden group`}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream-950/50 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-primary-700">
                    {activity.category}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-xl font-semibold text-cream-950 mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-cream-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 reveal">
            <div className="card p-8 lg:p-10 text-center bg-gradient-to-br from-cream-50 to-primary-50 border-primary-100">
              <h3 className="font-serif text-2xl font-semibold text-cream-950 mb-4">
                Want to Join an Activity?
              </h3>
              <p className="text-body max-w-xl mx-auto mb-6">
                We'd love to welcome you to one of our gatherings or programs. Reach out to us
                for more information about upcoming activities and how you can get involved.
              </p>
              <button onClick={() => navigateTo('/contact')} className="btn-primary">
                Contact Us
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
