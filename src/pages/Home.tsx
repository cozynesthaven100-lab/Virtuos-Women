import { ArrowRight, Target, Eye, MapPin, Phone, Clock } from 'lucide-react';
import Hero from '@/components/home/Hero';
import SectionHeading from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  org,
  whoWeAreImage,
  impactImage,
  whatWeDo,
  activities,
  leaders,
  galleryImages,
  faqs,
} from '@/data/content';
import { navigateTo } from '@/router';

export default function Home() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <Hero />

      {/* WHO WE ARE */}
      <section className="section-py bg-cream-50">
        <div className="container-mw container-px">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-primary-100 -z-10" />
                <img
                  src={whoWeAreImage}
                  alt="Women in heartfelt prayer gathering"
                  className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-accent-100 -z-10" />
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <span className="section-label">Who We Are</span>
              <h2 className="heading-2 mt-4 mb-6">A Women's Ministry Rooted in Faith</h2>
              <p className="text-body-lg mb-5">
                {org.name} is a women's ministry in East Legon, Accra. We are not a church — we
                are a fellowship where women grow in faith, encourage one another, and serve the
                community together. We meet every {org.contact.meetingDay}, {org.contact.meetingTime}.
              </p>
              <p className="text-body mb-8">
                We were founded by {org.leader.name}. We believe every woman has a God-given
                purpose. Through prayer, fellowship, outreach, and leadership training, we help
                women discover that purpose and walk in it with confidence.
              </p>
              <button onClick={() => navigateTo('/about')} className="btn-outline">
                Read More
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-py bg-gradient-to-b from-cream-100 to-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container-mw container-px relative">
          <SectionHeading
            label="Mission & Vision"
            title="Our Purpose & Direction"
            subtitle="Guided by faith and driven by purpose — here is what we strive to achieve and the future we envision."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Mission */}
            <div className="reveal card card-hover p-8 lg:p-10">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                <Target className="text-primary-600" size={28} />
              </div>
              <h3 className="heading-3 mb-5">Our Mission</h3>
              <p className="text-body mb-0">
                We help women grow stronger in faith, build real friendships, and serve their
                communities with love and purpose.
              </p>
            </div>

            {/* Vision */}
            <div className="reveal reveal-delay-1 card card-hover p-8 lg:p-10">
              <div className="w-14 h-14 rounded-2xl bg-accent-100 flex items-center justify-center mb-6">
                <Eye className="text-accent-600" size={28} />
              </div>
              <h3 className="heading-3 mb-5">Our Vision</h3>
              <p className="text-body mb-0">
                To build a community of women who live with faith, purpose, integrity, and
                compassion — women who lead, serve, and positively influence their families,
                communities, and the world around them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section-py bg-cream-50">
        <div className="container-mw container-px">
          <SectionHeading
            label="What We Do"
            title="Our Areas of Impact"
            subtitle="From prayer and spiritual growth to community outreach and leadership development, here are the key ways we serve and empower."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whatWeDo.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`reveal reveal-delay-${(i % 3) + 1} card card-hover p-8 lg:p-9 group`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary-600">
                    <Icon
                      size={28}
                      className="text-primary-600 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-cream-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cream-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACTIVITIES PREVIEW */}
      <section className="section-py bg-gradient-to-b from-cream-50 to-cream-100">
        <div className="container-mw container-px">
          <SectionHeading
            label="Our Activities & Programs"
            title="What We Do Together"
            subtitle="Gatherings, prayer meetings, outreach, and more — these are the activities that bring our community to life."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.slice(0, 3).map((activity, i) => (
              <div
                key={activity.title}
                className={`reveal reveal-delay-${i + 1} card card-hover overflow-hidden group`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-primary-700">
                    {activity.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-cream-950 mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-cream-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <button onClick={() => navigateTo('/activities')} className="btn-outline">
              View All Activities
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={impactImage}
            alt="Community outreach volunteers"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-cream-950/80" />
        </div>
        <div className="relative z-10 container-mw container-px">
          <div className="max-w-3xl mx-auto text-center">
            <span className="reveal inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300 mb-5">
              Making an Impact
            </span>
            <h2 className="reveal reveal-delay-1 font-serif text-heading font-semibold text-white text-balance mb-8">
              Faith. Service. Community. Impact.
            </h2>
            <p className="reveal reveal-delay-2 text-lg text-cream-200 leading-relaxed mb-12">
              We want to touch the lives of women, families, and communities through prayer,
              service, and genuine care. Every gathering, every prayer, and every act of service
              is a step toward a stronger, more hopeful community.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'Women Empowered', text: 'Through mentorship, prayer, and leadership training.' },
                { title: 'Communities Served', text: 'Through outreach, charity, and hands-on service.' },
                { title: 'Lives Touched', text: 'Through fellowship, faith, and the love of Christ.' },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal reveal-delay-${i + 2} p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10`}
                >
                  <h3 className="font-serif text-xl font-semibold text-primary-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cream-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP PREVIEW */}
      <section className="section-py bg-cream-50">
        <div className="container-mw container-px">
          <SectionHeading
            label="Our Leadership"
            title="Meet Our Leader"
            subtitle="The woman who founded, guides, and leads our ministry with dedication and faith."
          />
          <div className={`grid gap-8 ${leaders.length === 1 ? 'max-w-sm mx-auto' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
            {leaders.map((leader, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} card card-hover overflow-hidden group text-center`}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream-950/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-cream-950 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-primary-600 font-medium mb-3">{leader.title}</p>
                  <p className="text-sm text-cream-600 leading-relaxed line-clamp-3">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <button onClick={() => navigateTo('/leadership')} className="btn-outline">
              Meet the Full Team
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section-py bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="container-mw container-px">
          <SectionHeading
            label="Gallery"
            title="Moments & Memories"
            subtitle="A glimpse of our gatherings, outreach, fellowship, and the moments that define our community."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.slice(0, 8).map((img, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 4) + 1} relative overflow-hidden rounded-xl group aspect-square`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-cream-950/0 group-hover:bg-cream-950/20 transition-all duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <button onClick={() => navigateTo('/gallery')} className="btn-outline">
              View Full Gallery
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-cream-50">
        <div className="container-mw container-px">
          <SectionHeading
            label="Common Questions"
            title="Frequently Asked Questions"
            subtitle="Quick answers about our ministry, meeting time, and location."
          />
          <div className="max-w-3xl mx-auto grid gap-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className={`reveal reveal-delay-${(i % 3) + 1} card p-6 lg:p-7`}
              >
                <h3 className="font-serif text-lg font-semibold text-cream-950 mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-cream-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
