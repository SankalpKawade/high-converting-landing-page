const CTA_URL = 'https://cosmofeed.com/bp/683b06f5a8498c001f839e1d';

const floatingSnippets = [
  { label: '500+ LUTs', emoji: '🎨' },
  { label: '250+ Transitions', emoji: '✨' },
  { label: '1000+ Sound FX', emoji: '🔊' },
  { label: '70GB+ Assets', emoji: '📦' },
];

// Desktop positions for absolute floating cards
const desktopPositions = [
  '-left-8 top-12',
  '-right-8 top-8',
  '-left-6 bottom-16',
  '-right-6 bottom-12',
];

export default function HeroSection() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-20 px-4 overflow-hidden grid-bg" id="hero">
      {/* Background glow orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#00f2ff] rounded-full opacity-[0.06] blur-[100px]" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[#7000ff] rounded-full opacity-[0.08] blur-[100px]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Top badge — SOLID background */}
        <div className="inline-flex items-center gap-2 bg-[#0f1629] border border-[#00f2ff]/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#00f2ff] pulse-icon" />
          <span className="text-xs sm:text-sm font-medium text-[#cbd5e1]">Limited Time Offer — 28 Categories Inside</span>
        </div>

        {/* Dream Outcome Headline */}
        <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-4 sm:mb-6">
          <span className="gradient-text">Create Stunning Videos</span>
          <br />
          <span className="text-white">So You Can </span>
          <span className="shimmer-text">Earn More</span>
          <br />
          <span className="text-white">in Less Time</span>
        </h1>

        {/* Sub-headline — Effort & Sacrifice */}
        <p className="text-base sm:text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          <strong className="text-white">Without</strong> spending lakhs on courses, assets, or software.{' '}
          <strong className="text-white">Without</strong> hours of searching for free resources.{' '}
          Get <strong className="text-[#00f2ff]">70GB+ of pro-grade editing assets</strong> — instantly.
        </p>

        {/* Social Proof - Trust elements */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-sm text-[#cbd5e1] font-medium">9.4/10 Rating</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/20" />
          <div className="flex items-center gap-2.5">
            {/* Creator avatar stack — 3 overlapping people icons */}
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-[#050a18]"
                style={{ background: 'linear-gradient(135deg, #00f2ff, #7000ff)' }}>
                A
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-[#050a18]"
                style={{ background: 'linear-gradient(135deg, #ff6b00, #ff9500)' }}>
                V
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-[#050a18]"
                style={{ background: 'linear-gradient(135deg, #7000ff, #00f2ff)' }}>
                P
              </div>
            </div>
            <span className="text-sm text-[#cbd5e1] font-medium">Trusted by 5,000+ Creators</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-8 sm:mb-10">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-cta text-base sm:text-lg font-black px-8 sm:px-12 py-4 sm:py-5 rounded-2xl tracking-wide uppercase"
          >
            Get Everything for Just ₹199 →
          </a>
          {/* FUD reducers */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-4 text-xs sm:text-sm text-[#94a3b8]">
            <span>🔒 Secure Payment</span>
            <span>📥 Instant Download</span>
            <span>💯 100% Satisfaction</span>
          </div>
        </div>

        {/* Hero Visual — Dashboard mockup with floating snippets */}
        <div className="relative max-w-3xl mx-auto">
          {/* Floating 3D Snippets — DESKTOP (absolute positioned, floating) */}
          {floatingSnippets.map((s, i) => (
            <div
              key={`desk-${i}`}
              className={`absolute ${desktopPositions[i]} bg-[#0f1629] border border-white/15 rounded-xl px-3 py-2 z-20 hidden sm:flex items-center gap-2 ${
                i % 2 === 0 ? 'animate-float' : 'animate-float-delay'
              }`}
            >
              <span className="text-lg">{s.emoji}</span>
              <span className="text-xs font-bold text-white whitespace-nowrap">{s.label}</span>
            </div>
          ))}

          {/* Dashboard container */}
          <div className="bg-[#0a0f1a] border border-white/10 rounded-2xl sm:rounded-3xl p-2 sm:p-3 relative overflow-hidden">
            <div className="glow-line" />
            <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden relative bg-[#0a0f1a]">
              <img
                src="https://images.pexels.com/photos/29505140/pexels-photo-29505140.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Professional video editing dashboard"
                className="w-full h-full object-cover opacity-80"
                loading="eager"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 hidden sm:flex items-center gap-3">
                <div className="bg-[#0f1629] border border-white/15 rounded-lg px-3 py-1.5">
                  <span className="text-xs font-bold text-[#00f2ff]">28 Categories</span>
                </div>
                <div className="bg-[#0f1629] border border-white/15 rounded-lg px-3 py-1.5">
                  <span className="text-xs font-bold text-[#00f2ff]">70GB+</span>
                </div>
                <div className="bg-[#0f1629] border border-white/15 rounded-lg px-3 py-1.5">
                  <span className="text-xs font-bold text-[#00f2ff]">Instant Access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Snippets — MOBILE (grid below dashboard, always visible) */}
          <div className="grid grid-cols-2 gap-2.5 mt-4 sm:hidden">
            {floatingSnippets.map((s, i) => (
              <div
                key={`mob-${i}`}
                className="bg-[#0f1629] border border-[#00f2ff]/20 rounded-xl px-3 py-2.5 flex items-center gap-2.5"
              >
                <span className="text-lg">{s.emoji}</span>
                <span className="text-xs font-bold text-white">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
