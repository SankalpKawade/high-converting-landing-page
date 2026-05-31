const CTA_URL = 'https://cosmofeed.com/bp/683b06f5a8498c001f839e1d';

export default function PASSection() {
  return (
    <section className="py-16 sm:py-20 px-4 relative z-10">
      <div className="section-divider mb-16" />
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">The Problem</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-6 leading-tight">
          You're Spending <span className="text-red-400">Hours Searching</span> for Assets<br className="hidden sm:block" /> That Should Take Minutes
        </h2>

        {/* Problem / Agitate */}
        <div className="card-dark p-6 sm:p-8 mb-8 text-left relative overflow-hidden">
          <div className="glow-line" />
          <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed mb-4">
            Every day you <strong className="text-white">waste 2–3 hours</strong> digging through free LUTs that look terrible, transitions that don't match, and sound effects from sketchy websites.
          </p>
          <ul className="space-y-3 text-sm sm:text-base text-[#94a3b8]">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-0.5 font-bold">✕</span>
              <span>Free assets are <strong className="text-white">scattered, low-quality</strong>, and unreliable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-0.5 font-bold">✕</span>
              <span>Buying individually costs <strong className="text-white">₹50,000+</strong> for decent packs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-0.5 font-bold">✕</span>
              <span>Your videos look <strong className="text-white">amateur</strong> compared to competitors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-0.5 font-bold">✕</span>
              <span>Clients notice. <strong className="text-white">You lose projects.</strong> Revenue drops.</span>
            </li>
          </ul>
        </div>

        {/* Solve */}
        <div className="card-accent p-6 sm:p-8 relative overflow-hidden">
          <div className="glow-line" />
          <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">The Solution</p>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-4">
            One Bundle. Every Asset You'll Ever Need.
          </h3>
          <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed mb-6">
            The <strong className="text-white">Video Editor's Dream Bundle</strong> gives you <strong className="text-[#00f2ff]">70GB+ of curated, professional-grade assets</strong> across 28 categories — for less than the price of a single coffee ☕
          </p>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-cta text-sm sm:text-base font-bold px-8 py-3.5 rounded-xl"
          >
            Solve It Now — Just ₹199 →
          </a>
        </div>
      </div>
    </section>
  );
}
