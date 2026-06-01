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

        {/* Review Image Placeholders — Wall of Love (NO carousel) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 px-2 sm:px-0">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card-dark rounded-xl sm:rounded-2xl overflow-hidden relative group hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,242,255,0.1)] transition-all duration-300">
              <div className="glow-line" />
              <img
                src={`/images/v${i}.webp`}
                alt={`Creator Review ${i}`}
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Additional text testimonials */}
        {/*
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {[
            { name: 'Rahul S.', role: 'Wedding Videographer', text: 'This bundle saved me ₹40,000+ on assets. The LUTs alone are worth 10x the price. My wedding films look cinematic now!', stars: 5 },
            { name: 'Priya M.', role: 'YouTube Creator', text: 'I went from 200 views to 10K+ per video after using these transitions and overlays. My content finally looks professional.', stars: 5 },
            { name: 'Arjun K.', role: 'Freelance Editor', text: 'Clients are impressed with my work quality now. I charge 3x more per project and they happily pay. Best ₹199 I ever spent!', stars: 5 },
            { name: 'Sneha D.', role: 'Social Media Manager', text: 'The motion graphics and templates cut my editing time in half. I handle more clients now without burning out.', stars: 5 },
          ].map((t, i) => (
            <div key={i} className="card-dark rounded-2xl p-5 sm:p-6 relative overflow-hidden">
              <div className="glow-line" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #00f2ff, #7000ff)' }}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-[#94a3b8]">{t.role}</p>
                </div>
              </div>
              <div className="text-yellow-400 text-xs mb-2">{'★'.repeat(t.stars)}</div>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
