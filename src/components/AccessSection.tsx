import StarField from './StarField';

const steps = [
  {
    emoji: '🖱️',
    step: 'STEP 01',
    title: 'Click "Get Everything for ₹199"',
    desc: 'Tap the button below and you\'ll be taken to our secure checkout page',
  },
  {
    emoji: '🔒',
    step: 'STEP 02',
    title: 'Complete Secure Payment',
    desc: 'Pay via UPI, PhonePe, Google Pay, Paytm, credit/debit card — all 100% secure',
  },
  {
    emoji: '📥',
    step: 'STEP 03',
    title: 'Instant Access PDF',
    desc: 'Download your Access PDF from the order page with direct Google Drive link',
  },
];

export default function AccessSection() {
  return (
    <section className="py-16 sm:py-20 px-4 relative z-10">
      <div className="section-divider mb-16" />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Access Everything In<br className="hidden sm:block" /> 3 Simple Steps
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-4 sm:h-5 bg-gradient-to-b from-[#00f2ff] to-[#7000ff] z-0" />
              )}
              <div className="card-accent p-5 sm:p-6 relative overflow-hidden">
                <StarField speed={0.4} starsSmall={60} starsMedium={20} starsLarge={8} opacity={0.3} />
                <div className="glow-line" />
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(0,242,255,0.15), #0a1226)', border: '1px solid rgba(0,242,255,0.3)' }}>
                    <span className="text-2xl sm:text-3xl">{s.emoji}</span>
                  </div>
                  <div>
                    <span className="text-[#00f2ff] text-xs font-bold tracking-widest">{s.step}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-1 mb-1">{s.title}</h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
