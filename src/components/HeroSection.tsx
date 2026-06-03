// import StarField from './StarField';

const CTA_URL = 'https://superprofile.bio/vp/professional-video-editing-made-simple';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col pt-[88px] sm:pt-[100px] pb-6 sm:pb-10 px-4 overflow-hidden grid-bg" id="hero">
      {/* Background glow orbs */}
      <div className="hidden sm:block absolute top-20 left-1/4 w-72 h-72 bg-[#00f2ff] rounded-full opacity-[0.06] blur-[100px]" />
      <div className="hidden sm:block absolute bottom-20 right-1/4 w-72 h-72 bg-[#7000ff] rounded-full opacity-[0.08] blur-[100px]" />

      <div className="max-w-6xl mx-auto text-center relative z-10 flex-1 flex flex-col justify-center items-center gap-5 sm:gap-7 w-full pb-[4vh] mt-16 sm:mt-24">
        {/* Top badge — SOLID background */}
        <div className="inline-flex items-center gap-2 bg-[#0f1629] border border-[#00f2ff]/30 rounded-full px-6 py-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#00f2ff] pulse-icon" />
          <span className="text-[11px] sm:text-sm font-medium text-[#cbd5e1]">Limited Time Offer</span>
        </div>

        {/* Dream Outcome Headline */}
        <h1 className="hero-heading text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] shrink-0">
          <span className="gradient-text">Create Viral Videos</span>
          <br />
          <span className="text-white">That Get Views, Followers & Clients</span>
        </h1>

        {/* Sub-headline — Effort & Sacrifice */}
        <p className="text-[15px] sm:text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-[1.6] shrink-0 px-2">
          Create <strong className="text-[#00f2ff]">scroll-stopping videos</strong> in minutes using ready-to-use presets, effects & templates.
        </p>

        {/* Social Proof - Trust elements */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 shrink-0 mt-1">
          <div className="flex items-center gap-2">
            <span className="text-[13px] sm:text-sm text-[#cbd5e1] font-medium">
              🎬 Perfect for Reels, YouTube Shorts & Freelancing
            </span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20" />
          <div className="flex items-center gap-1.5">
            <span className="text-[13px] sm:text-sm text-[#cbd5e1] font-medium">🤝 Trusted by 3,500+ Creators</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-3 sm:mt-5 shrink-0 w-full">
          <a
            href={CTA_URL}
            className="block w-full max-w-[340px] mx-auto sm:inline-block sm:w-auto sm:max-w-none btn-cta text-[16px] sm:text-lg font-black px-6 sm:px-12 py-2 sm:py-3.5 rounded-2xl tracking-wide uppercase"
          >
            Get Access @ ₹199 Only
          </a>
        </div>
      </div>
    </section>
  );
}
