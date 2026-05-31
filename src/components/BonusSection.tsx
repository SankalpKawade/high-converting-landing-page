const bonuses = [
  {
    emoji: '🎬',
    title: '1500+ Motivational Reels',
    desc: 'Ready-to-post viral motivational content for Instagram & YouTube Shorts',
    value: '₹1,999',
  },
  {
    emoji: '📚',
    title: 'Premium E-Books Pack',
    desc: 'Digital marketing, content creation & video editing reference guide',
    value: '₹1,499',
  },
  {
    emoji: '🤖',
    title: 'ChatGPT Prompts Pack',
    desc: '200+ AI prompts for video scripts, captions, thumbnails & content ideas',
    value: '₹999',
  },
  {
    emoji: '📈',
    title: 'Instagram Growth Course',
    desc: 'Proven strategies to grow your Instagram to 10K+ followers fast',
    value: '₹1,999',
  },
];

export default function BonusSection() {
  return (
    <section className="py-16 sm:py-20 px-4 relative z-10">
      <div className="section-divider mb-16" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">Free Bonuses</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            4 Exclusive Bonuses — Absolutely FREE
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8]">
            Total Bonus Value: <strong className="text-[#00f2ff]">₹6,499</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {bonuses.map((b, i) => (
            <div key={i} className="card-accent rounded-2xl p-6 sm:p-7 relative overflow-hidden">
              <div className="glow-line" />
              <div className="absolute top-4 right-4 rounded-full px-3 py-0.5"
                style={{ background: 'rgba(0, 242, 255, 0.12)', border: '1px solid rgba(0, 242, 255, 0.3)' }}>
                <span className="text-xs font-bold text-[#00f2ff]">FREE!</span>
              </div>

              <div className="text-3xl sm:text-4xl mb-4">{b.emoji}</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 pr-20">{b.title}</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">{b.desc}</p>

              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm text-[#94a3b8]">Valued at <span className="line-through">{b.value}</span></span>
                <span className="text-sm font-bold text-[#00f2ff]">FREE with Bundle</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
