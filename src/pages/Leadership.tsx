import SectionHeading from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { leaders } from '@/data/content';
import { ArrowRight } from 'lucide-react';
import { navigateTo } from '@/router';

export default function Leadership() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="pt-24">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-accent-50 via-cream-50 to-primary-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-mw container-px relative">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 mb-4">
              Our Leadership
            </span>
            <h1 className="reveal reveal-delay-1 font-serif text-display font-semibold text-cream-900 text-balance mb-6">
              Meet Our Leader
            </h1>
            <p className="reveal reveal-delay-2 text-xl text-cream-800 leading-relaxed">
              The woman who founded and leads Virtuous Women of Destiny with dedication, faith,
              and a heart for empowering women.
            </p>
          </div>
        </div>
      </section>

      {/* Leaders */}
      <section className="section-py bg-cream-50">
        <div className="container-mw container-px">
          <div className={`grid gap-8 ${leaders.length === 1 ? 'max-w-sm mx-auto' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
            {leaders.map((leader, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1} card card-hover overflow-hidden group`}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-xl font-semibold text-white">{leader.name}</h3>
                    <p className="text-sm text-primary-200 font-medium">{leader.title}</p>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-sm text-cream-600 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 reveal">
            <div className="card p-8 lg:p-10 text-center bg-gradient-to-br from-cream-50 to-accent-50 border-accent-100">
              <h3 className="font-serif text-2xl font-semibold text-cream-950 mb-4">
                Join Our Fellowship
              </h3>
              <p className="text-body max-w-xl mx-auto mb-6">
                We are dedicated to serving and supporting every woman who joins us. We'd love to
                connect with you.
              </p>
              <button onClick={() => navigateTo('/contact')} className="btn-primary">
                Get in Touch
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
