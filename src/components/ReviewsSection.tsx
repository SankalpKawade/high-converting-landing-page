import { useEffect, useRef } from 'react';

function ReviewCard({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Only enable scroll-reveal on mobile (< 768px)
    const mq = window.matchMedia('(max-width: 767px)');
    if (!mq.matches) {
      el.classList.add('review-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('review-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="review-card-reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="review-card-inner card-dark rounded-2xl overflow-hidden relative group hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(0,242,255,0.15)] transition-all duration-500">
        <div className="glow-line" />
        <img
          src={`https://demo.scalenite.com/wp-content/uploads/2024/06/v${index}.webp`}
          alt={`Creator Review ${index}`}
          className="w-full h-auto block"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-16 sm:py-20 px-4 relative z-10" id="reviews">
      <div className="section-divider mb-16" />
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">Social Proof</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Trusted by Creators
          </h2>
          <div className="flex flex-col items-center gap-2 mb-4">
            <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
            <p className="text-xl sm:text-2xl font-black text-white">9.4 / 10</p>
            <p className="text-sm text-[#00f2ff] font-bold">100% Satisfaction</p>
          </div>
          <p className="text-sm sm:text-base text-[#94a3b8] max-w-xl mx-auto">
            See how creators are saving time and improving their workflow
          </p>
        </div>

        {/* Review Images — grid on desktop, stacked scroll-reveal on mobile */}
        <div className="reviews-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ReviewCard key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
