import StarField from './StarField';

const bonuses = [
  {
    title: '1500+ Motivational Reels',
    value: '₹1,999',
  },
  {
    title: 'Premium E-Books Pack',
    value: '₹1,499',
  },
  {
    title: 'ChatGPT Prompts Pack',
    value: '₹999',
  },
  {
    title: 'Instagram Growth Course',
    value: '₹1,999',
  },
];

export default function BonusSection() {
  return (
    <section className="py-16 sm:py-10 px-4 relative z-10">
      <div className="section-divider mb-16" />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">Free Bonuses</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            4 Exclusive Bonuses — Absolutely FREE
          </h2>
        </div>

        <div className="bg-[#0b101e] border border-white/5 rounded-3xl p-4 sm:p-10 shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)] max-w-2xl mx-auto relative overflow-hidden">
          {/* subtle glow inside - optimized for mobile performance without css blur */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 pointer-events-none" 
            style={{ background: 'radial-gradient(ellipse at top, rgba(0,242,255,0.08) 0%, transparent 70%)' }} 
          />
          <StarField speed={0.2} starsSmall={40} starsMedium={15} starsLarge={5} opacity={0.35} />

          <div className="flex items-center gap-4 mb-8 sm:mb-10 relative z-10">
            <span className="text-4xl sm:text-5xl">🎁</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
              Exclusive Bonuses
            </h3>
          </div>

          <div className="flex flex-col relative z-10">
            {bonuses.map((b, i) => (
              <div key={i} className="flex items-center justify-between py-5 sm:py-6 border-b border-white/5 last:border-0">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#fbbf24] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 sm:w-4 sm:h-4 text-[#0b101e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-bold text-base sm:text-lg lg:text-xl">
                    {b.title}
                  </span>
                </div>
                <div className="bg-[#fbbf24]/10 border border-[#fbbf24]/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg ml-4">
                  <span className="text-[#fbbf24] font-bold text-xs sm:text-sm whitespace-nowrap">
                    {b.value} Value
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <p className="text-[#94a3b8] text-base sm:text-lg font-medium">
              Total Value: <span className="line-through decoration-white/30">₹6,496</span>
            </p>
            <p className="text-[#00f2ff] text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              FREE Today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
