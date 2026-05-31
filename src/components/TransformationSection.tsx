const beforeItems = [
  { icon: '😩', text: 'Spending 8+ hours per video edit' },
  { icon: '💸', text: '₹5,000/month on asset subscriptions' },
  { icon: '😑', text: 'Flat, boring, amateur-looking videos' },
  { icon: '🔍', text: 'Hours wasted hunting editing assets' },
  { icon: '😰', text: 'Constant fear of copyright strikes' },
  { icon: '🤷', text: 'No idea where to learn editing properly' },
];

const afterItems = [
  { icon: '🚀', text: 'Edit like a pro in 1-2 hours flat' },
  { icon: '💰', text: 'Zero monthly subscriptions forever' },
  { icon: '🎬', text: 'Cinematic, jaw-dropping video quality' },
  { icon: '⚡', text: 'Everything in one place, one download' },
  { icon: '✅', text: 'Use for commercial purpose' },
  { icon: '🎓', text: 'Full A-Z course included in the bundle' },
];

export default function TransformationSection() {
  return (
    <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
      <div className="section-divider mb-16" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">Transformation</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            The Before & After Transformation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* BEFORE Box — Red */}
          <div
            className="rounded-3xl p-6 sm:p-8 border border-red-500/30 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #2a0a14 0%, #1a0a12 50%, #0f0610 100%)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #ff3b5c, transparent)' }} />
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(255, 59, 92, 0.15)', border: '1px solid rgba(255, 59, 92, 0.3)' }}
              >
                <span className="text-xl font-black text-red-400">✕</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-red-400">BEFORE The Bundle</h3>
            </div>

            <ul className="space-y-3.5">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(255, 59, 92, 0.15)', border: '1px solid rgba(255, 59, 92, 0.25)' }}>
                    <span className="text-[11px] font-black text-red-400">✕</span>
                  </div>
                  <div className="flex items-start gap-2.5 flex-1">
                    <span className="text-base">{item.icon}</span>
                    <span className="text-sm text-[#e5e7eb] leading-relaxed">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* AFTER Box — Green */}
          <div
            className="rounded-3xl p-6 sm:p-8 border border-green-500/30 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0a1f14 0%, #0a1a18 50%, #061010 100%)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #00f27c, transparent)' }} />
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(0, 242, 124, 0.15)', border: '1px solid rgba(0, 242, 124, 0.3)' }}
              >
                <span className="text-xl font-black text-green-400">✓</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-green-400">AFTER The Bundle</h3>
            </div>

            <ul className="space-y-3.5">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(0, 242, 124, 0.15)', border: '1px solid rgba(0, 242, 124, 0.25)' }}>
                    <span className="text-[11px] font-black text-green-400">✓</span>
                  </div>
                  <div className="flex items-start gap-2.5 flex-1">
                    <span className="text-base">{item.icon}</span>
                    <span className="text-sm text-[#e5e7eb] leading-relaxed">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
