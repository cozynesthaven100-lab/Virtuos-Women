import { ArrowRight, Target, Eye, Heart } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { org, whoWeAreImage, values } from '@/data/content';
import { navigateTo } from '@/router';

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="pt-24">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-50 via-cream-50 to-accent-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-mw container-px relative">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 mb-4">
              About Us
            </span>
            <h1 className="reveal reveal-delay-1 font-serif text-display font-semibold text-cream-900 text-balance mb-6">
              Who We Are
            </h1>
            <p className="reveal reveal-delay-2 text-xl text-cream-800 leading-relaxed">
              {org.description}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-py bg-cream-50">
        <div className="container-mw container-px">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-primary-100 -z-10" />
                <img
                  src={whoWeAreImage}
                  alt="Women in prayer"
                  className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <span className="section-label">Our Story</span>
              <h2 className="heading-2 mt-4 mb-6">A Fellowship of Women, United by Faith</h2>
              <div className="space-y-4 text-body">
                <p>
                  {org.name} was founded by {org.leader.name} to bring women together in faith,
                  purpose, and service. What began as a calling has grown into a fellowship of
                  women who support, encourage, and empower one another.
                </p>
                <p>
                  We are not a church — we are a women's ministry, a sisterhood that believes
                  faith is lived out through action. Through prayer, fellowship, outreach, and
                  leadership training, we help women discover their God-given purpose and walk in
                  it with confidence.
                </p>
                <p>
                  We meet every {org.contact.meetingDay}, {org.contact.meetingTime}, at{' '}
                  {org.contact.fullAddress}. Whether you are new to faith or have walked with
                  Christ for years, there is a place for you here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="section-py bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="container-mw container-px">
          <SectionHeading
            label="Our Purpose"
            title="Why We Exist"
            subtitle="We exist to see women grow in faith, discover their purpose, and make a tangible difference in the world around them."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Heart, title: 'Faith Foundation', text: 'Rooted in God\u2019s Word and led by the Spirit, we help women build a strong spiritual foundation.' },
              { icon: Target, title: 'Purpose-Driven', text: 'We help every woman discover and fulfill her unique, God-given calling.' },
              { icon: Eye, title: 'Community Impact', text: 'Through service and outreach, we bring hope and practical help to those who need it most.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={`reveal reveal-delay-${i + 1} card card-hover p-8 text-center`}>
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-5">
                    <Icon size={28} className="text-primary-600" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-cream-950 mb-3">{item.title}</h3>
                  <p className="text-sm text-cream-600 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-py bg-cream-50">
        <div className="container-mw container-px">
          <SectionHeading
            label="Mission & Vision"
            title="What We Strive to Achieve"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal card p-8 lg:p-10">
              <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                <Target className="text-primary-600" size={28} />
              </div>
              <h3 className="heading-3 mb-5">Our Mission</h3>
              <p className="text-body mb-0">
                Our mission is simple: to help women grow strong in faith, build true
                friendships, and serve their communities with love.
              </p>
            </div>
            <div className="reveal reveal-delay-1 card p-8 lg:p-10">
              <div className="w-14 h-14 rounded-2xl bg-accent-100 flex items-center justify-center mb-6">
                <Eye className="text-accent-600" size={28} />
              </div>
              <h3 className="heading-3 mb-5">Our Vision</h3>
              <p className="text-body mb-0">
                We see a fellowship of women who live out their faith with purpose, integrity,
                and compassion — women who lead well and bring positive change to their families
                and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-gradient-to-b from-cream-100 to-cream-50">
        <div className="container-mw container-px">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            subtitle="The principles that guide everything we do."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`reveal reveal-delay-${(i % 3) + 1} card card-hover p-7`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center">
                    <Heart size={18} className="text-white" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-cream-950">
                    {value.title}
                  </h3>
                </div>
                <p className="text-sm text-cream-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="container-mw container-px relative text-center">
          <h2 className="reveal font-serif text-heading font-semibold text-white mb-6">
            What We Hope to Achieve
          </h2>
          <p className="reveal reveal-delay-1 text-lg text-cream-300 max-w-2xl mx-auto mb-8">
            To see a generation of women living with faith, purpose, and integrity — leading,
            serving, and transforming their communities for the glory of God.
          </p>
          <button onClick={() => navigateTo('/contact')} className="btn-primary reveal reveal-delay-2">
            Join Our Community
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
