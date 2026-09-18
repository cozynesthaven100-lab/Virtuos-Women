import { ArrowRight, Mail, MapPin, Clock } from 'lucide-react';
import { org, heroImage } from '@/data/content';
import { navigateTo } from '@/router';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Women of faith gathered in prayer"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-950/70 via-cream-950/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-mw container-px py-32">
        <div className="max-w-2xl">
          <div className="reveal is-visible animate-fade-in-down">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-cream-100 text-xs font-medium tracking-[0.15em] uppercase">
              {org.tagline}
            </span>
          </div>

          <h1 className="mt-6 font-serif text-display font-semibold text-white text-balance animate-fade-in-up">
            Virtuous Women
            <span className="block text-primary-300">of Destiny</span>
          </h1>

          <p className="mt-7 text-lg lg:text-xl text-cream-100 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
            {org.description}
          </p>

          {/* Quick facts: day, time, location — for people and search engines */}
          <div
            className="mt-6 flex flex-wrap gap-3 animate-fade-in-up"
            style={{ animationDelay: '0.22s', animationFillMode: 'both' }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-cream-50 text-sm">
              <Clock size={15} className="text-primary-300" />
              {org.contact.meetingDay}s, {org.contact.meetingTime}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-cream-50 text-sm">
              <MapPin size={15} className="text-primary-300" />
              East Legon, Accra
            </span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <button onClick={() => navigateTo('/about')} className="btn-primary">
              Learn More
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigateTo('/contact')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-white hover:text-cream-950 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
        <span className="text-xs text-cream-200 uppercase tracking-[0.2em]">Discover Our Work</span>
        <div className="w-px h-12 bg-gradient-to-b from-cream-200/60 to-transparent" />
      </div>
    </section>
  );
}
