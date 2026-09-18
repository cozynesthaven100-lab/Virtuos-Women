import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { org } from '@/data/content';

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div ref={ref} className="pt-24">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-50 via-cream-50 to-accent-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-mw container-px relative">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 mb-4">
              Contact Us
            </span>
            <h1 className="reveal reveal-delay-1 font-serif text-display font-semibold text-cream-900 text-balance mb-6">
              Connect With Us
            </h1>
            <p className="reveal reveal-delay-2 text-xl text-cream-800 leading-relaxed">
              We'd love to hear from you. Reach out, ask a question, or simply connect — we're
              here to welcome you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section-py bg-cream-50">
        <div className="container-mw container-px">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="reveal">
              <h2 className="heading-3 mb-8">Reach Out to Us</h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: 'Location', value: org.contact.fullAddress, href: org.contact.mapUrl },
                  { icon: Phone, label: 'Phone', value: org.contact.phone, href: org.contact.phoneHref },
                  { icon: Clock, label: 'Gathering Times', value: org.contact.meetingInfo, href: null },
                  ...(org.contact.email
                    ? [{ icon: Mail, label: 'Email', value: org.contact.email, href: `mailto:${org.contact.email}` }]
                    : []),
                ].map((item) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? 'a' : 'div';
                  return (
                    <Wrapper
                      key={item.label}
                      {...(item.href
                        ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-cream-200/60 shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-md"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <Icon size={22} className="text-primary-600" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cream-500 mb-1">
                          {item.label}
                        </p>
                        <p className="text-cream-800">{item.value}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* WhatsApp */}
              {org.contact.whatsapp && (
                <a
                  href={org.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-medium text-sm transition-all duration-300 hover:bg-[#1da851] hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} />
                  Chat With Us on WhatsApp
                </a>
              )}

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-sm border border-cream-200/60">
                <iframe
                  title={org.contact.fullAddress}
                  src={org.contact.mapEmbedUrl}
                  className="w-full aspect-[16/10]"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={org.contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                <MapPin size={16} />
                Get Directions
              </a>
            </div>

            {/* Form */}
            <div className="reveal reveal-delay-1">
              <div className="card p-8 lg:p-10">
                <h2 className="heading-3 mb-3">Send Us a Message</h2>
                <p className="text-body mb-8">
                  Have a question or want to connect? Send us a message — we'll get back to you
                  as soon as we can.
                </p>

                {submitted && (
                  <div className="mb-6 p-5 rounded-xl bg-success-50 border border-success-500/20 flex items-start gap-3 animate-fade-in">
                    <CheckCircle2 size={22} className="text-success-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-success-700">Message Sent!</p>
                      <p className="text-sm text-success-600 mt-1">
                        Thank you for reaching out. We've received your message and will respond
                        soon. We can't wait to welcome you to {org.name}!
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cream-800 mb-2">
                      Name <span className="text-primary-600">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 text-cream-950 placeholder-cream-400 transition-all duration-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cream-800 mb-2">
                      Email <span className="text-primary-600">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 text-cream-950 placeholder-cream-400 transition-all duration-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-cream-800 mb-2">
                      Phone <span className="text-cream-400">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 text-cream-950 placeholder-cream-400 transition-all duration-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-cream-800 mb-2">
                      Message <span className="text-primary-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-200 text-cream-950 placeholder-cream-400 transition-all duration-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-500/20 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bible verse */}
          <div className="mt-16 text-center reveal">
            <p className="font-serif text-xl italic text-cream-600 max-w-2xl mx-auto">
              &ldquo;The Lord bless you and keep you; the Lord make His face shine on you and be
              gracious to you.&rdquo;
            </p>
            <p className="mt-3 text-sm text-cream-500">— Numbers 6:24-25</p>
          </div>
        </div>
      </section>
    </div>
  );
}
