import StarField from './StarField';

const CTA_URL = 'https://superprofile.bio/vp/professional-video-editing-made-simple';

const floatingSnippets = [
  { label: '200+ LUTs', emoji: '🎨' },
  { label: '800+ Transitions', emoji: '✨' },
  { label: '1000+ Sound FX', emoji: '🔊' },
  { label: '70GB+ Assets', emoji: '📦' },
];

const snippetPositions = [
  '-left-2 sm:-left-8 -top-4 sm:top-12',
  '-right-2 sm:-right-8 top-6 sm:top-8',
  '-left-2 sm:-left-6 -bottom-4 sm:-bottom-4 sm:bottom-16', // wait, sm:bottom-16
  '-right-2 sm:-right-6 bottom-4 sm:bottom-12',
];

export default function HeroSection() {
  return (
    <section className="relative pt-36 sm:pt-40 pb-12 sm:pb-20 px-4 overflow-hidden grid-bg" id="hero">
      {/* Background glow orbs */}
      <div className="hidden sm:block absolute top-20 left-1/4 w-72 h-72 bg-[#00f2ff] rounded-full opacity-[0.06] blur-[100px]" />
      <div className="hidden sm:block absolute bottom-20 right-1/4 w-72 h-72 bg-[#7000ff] rounded-full opacity-[0.08] blur-[100px]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Top badge — SOLID background */}
        <div className="inline-flex items-center gap-2 bg-[#0f1629] border border-[#00f2ff]/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#00f2ff] pulse-icon" />
          <span className="text-xs sm:text-sm font-medium text-[#cbd5e1]">Limited Time Offer</span>
        </div>

        {/* Dream Outcome Headline */}
        <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-4 sm:mb-6">
          <span className="gradient-text">Create Viral Videos</span>
          <br />
          <span className="text-white">That Get Views, Followers & Clients</span>
          {/* <span className="shimmer-text">Earn More</span> */}
          {/* <br /> */}
          {/* <span className="text-white">in Less Time</span> */}
        </h1>

        {/* Sub-headline — Effort & Sacrifice */}
        <p className="text-sm sm:text-base md:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          {/*<strong className="text-white">Stop</strong> wasting hours searching for tools, assets, and tutorials.{' '}*/}
          Create <strong className="text-[#00f2ff]">scroll-stopping videos</strong> in minutes using ready-to-use presets, effects & templates.
        </p>

        {/* Social Proof - Trust elements */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            {/* <span className="text-yellow-400 text-sm">★★★★★</span> */}
            <span className="text-sm text-[#cbd5e1] font-medium">
              🎬 Perfect for Reels, YouTube Shorts & Freelancing</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-1.5">
            {/*<div className="flex items-center">
              <img
                src="/images/creators.webp"
                alt="Trusted Creators"
                className="h-10 sm:h-8 w-auto object-contain"
                fetchPriority="high"
                decoding="async"
            </div>
              />*/}
            <span className="text-sm text-[#cbd5e1] font-medium">🤝Trusted by 3,500+ Creators</span>
          </div>
        </div>
        {/* CTA */}
        <div className="mt-10 sm:mt-14 mb-12 sm:mb-16">
          <a
            href={CTA_URL}
            className="inline-block btn-cta text-sm sm:text-lg font-black px-6 sm:px-12 py-3 sm:py-3 rounded-xl sm:rounded-2xl tracking-wide uppercase"
          >
            Get Instant Access @ ₹199 Only
          </a>
        </div>
        {/* Hero Visual — Dashboard mockup with floating snippets 
        <div className="relative max-w-3xl mx-auto mt-8 sm:mt-12">
          {/* Floating 3D Snippets — Responsive (absolute positioned, floating) */}
        {/* {floatingSnippets.map((s, i) => (
            <div
              key={`float-${i}`}
              className={`absolute ${[
                '-left-2 sm:-left-8 -top-5 sm:top-12',
                '-right-2 sm:-right-8 top-10 sm:top-8',
                '-left-2 sm:-left-6 -bottom-5 sm:-bottom-8 sm:bottom-16',
                '-right-2 sm:-right-6 bottom-10 sm:bottom-12'
              ][i]} bg-[#0f1629] border border-white/15 rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 z-20 flex items-center gap-1.5 sm:gap-2 shadow-2xl ${i % 2 === 0 ? 'animate-float' : 'animate-float-delay'
                }`}
            >
              <span className="text-sm sm:text-lg">{s.emoji}</span>
              <span className="text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">{s.label}</span>
            </div>
          ))}*/}

        {/* Dashboard container */}
        {/* <div className="bg-[#0a0f1a] border border-white/10 rounded-2xl sm:rounded-3xl p-2 sm:p-3 relative overflow-hidden">*/}
        {/* <StarField speed={0.5} starsSmall={80} starsMedium={30} starsLarge={10} opacity={0.3} />*/}
        {/*<div className="glow-line" />
            <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden relative bg-[#0a0f1a]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover opacity-80"
                src="https://videoeditorstudio.com/cdn/shop/videos/c/vp/8380e9171de14f19a62ffd3c4af126e7/8380e9171de14f19a62ffd3c4af126e7.SD-480p-1.5Mbps-31690304.mp4?v=0"
                aria-label="Professional video editing dashboard"
                title="Professional video editing dashboard"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/60 via-transparent to-transparent" />
              {/*
              <div className="absolute bottom-2 sm:bottom-4 left-2 right-2 sm:left-4 sm:right-4 flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <div className="bg-[#0f1629]/80 backdrop-blur-sm border border-white/15 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5">
                  <span className="text-[9px] sm:text-xs font-bold text-[#00f2ff]">28 Categories</span>
                </div>
                <div className="bg-[#0f1629]/80 backdrop-blur-sm border border-white/15 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 hidden sm:block">
                  <span className="text-[9px] sm:text-xs font-bold text-[#00f2ff]">70GB+</span>
                </div>
                <div className="bg-[#0f1629]/80 backdrop-blur-sm border border-white/15 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5">
                  <span className="text-[9px] sm:text-xs font-bold text-[#00f2ff]">Instant Access</span>
                </div>
              </div>
               */}
        {/*</div>
          </div>
        </div>
        */}
      </div>
    </section >
  );
}
