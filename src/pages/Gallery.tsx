import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { galleryImages } from '@/data/content';

export default function Gallery() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(galleryImages.map((img) => img.category)))];

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filtered.length));
  }, [filtered.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <div ref={ref} className="pt-24">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gold-50 via-cream-50 to-primary-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-mw container-px relative">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 mb-4">
              Gallery
            </span>
            <h1 className="reveal reveal-delay-1 font-serif text-display font-semibold text-cream-900 text-balance mb-6">
              Moments & Memories
            </h1>
            <p className="reveal reveal-delay-2 text-xl text-cream-800 leading-relaxed">
              A look at our gatherings, conferences, outreach, and fellowship moments over the
              years.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-py bg-cream-50">
        <div className="container-mw container-px">
          {/* Category filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12 reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20'
                    : 'bg-cream-100 text-cream-700 hover:bg-cream-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className={`reveal reveal-delay-${(i % 4) + 1} relative overflow-hidden rounded-xl group cursor-pointer aspect-square`}
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-cream-950/0 group-hover:bg-cream-950/30 transition-all duration-300 flex items-end p-4">
                  <p className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-cream-950/90 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] px-16 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center mt-4 text-sm text-cream-300">
              {filtered[lightboxIndex].alt} — {filtered[lightboxIndex].category}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
