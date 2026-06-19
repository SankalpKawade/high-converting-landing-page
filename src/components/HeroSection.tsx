import { useState, useEffect } from 'react';
import StarField from './StarField';

const CTA_URL = 'https://superprofile.bio/vp/professional-video-editing-made-simple';

const BADGE_ITEMS = [
  { text: "347 Bought in the Last 24 Hours", duration: 3000 },
  { text: "Trending Among — Editors & Creators", duration: 4000 },
  { text: "Trusted by 2,243+ Creators", duration: 5000 },
  { text: "Stop Searching. Start Editing.", duration: 4000 },
];

const floatingSnippets = [
  { label: '200+ LUTs', emoji: '🎨' },
  { label: '800+ Transitions', emoji: '✨' },
  { label: '1000+ Sound FX', emoji: '🔊' },
  { label: '70GB+ Assets', emoji: '📦' },
];

const snippetPositions = [
  '-left-2 sm:-left-8 -top-4 sm:top-12',
  '-right-2 sm:-right-8 top-6 sm:top-8',
  '-left-2 sm:-left-6 -bottom-4 sm:bottom-16',
  '-right-2 sm:-right-6 bottom-4 sm:bottom-12',
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let fadeOutTimeout: NodeJS.Timeout;
    let switchTimeout: NodeJS.Timeout;

    const runTimer = (currentIndex: number) => {
      const item = BADGE_ITEMS[currentIndex];

      fadeOutTimeout = setTimeout(() => {
        setFade(false);
      }, item.duration - 300);

      switchTimeout = setTimeout(() => {
        const nextIndex = (currentIndex + 1) % BADGE_ITEMS.length;
        setIndex(nextIndex);
        setFade(true);
        runTimer(nextIndex);
      }, item.duration);
    };

    runTimer(0);

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(switchTimeout);
    };
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-start sm:justify-center pt-[136px] sm:pt-[120px] pb-6 sm:pb-10 px-4 overflow-hidden grid-bg" id="hero">
      {/* Background glow orbs */}
      <div className="hidden sm:block absolute top-20 left-1/4 w-72 h-72 bg-[#00f2ff] rounded-full opacity-[0.06] blur-[100px]" />
      <div className="hidden sm:block absolute bottom-20 right-1/4 w-72 h-72 bg-[#7000ff] rounded-full opacity-[0.08] blur-[100px]" />

      <div className="max-w-6xl mx-auto text-center relative z-10 flex-1 flex flex-col justify-start sm:justify-center items-center gap-5 sm:gap-7 w-full pb-[4vh] mt-2 sm:mt-24">
        {/* Top badge — SOLID background */}
        <div className="inline-flex items-center gap-2 bg-[#0f1629] border border-[#00f2ff]/30 rounded-full px-6 py-2 shrink-0 min-w-[280px] sm:min-w-[320px] justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00f2ff] pulse-icon inline-block" />
          <span className={`text-[11px] sm:text-sm font-semibold text-[#cbd5e1] transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            {BADGE_ITEMS[index].text}
          </span>
        </div>

        {/* Dream Outcome Headline */}
        <h1 className="hero-heading text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] shrink-0">
          <span className="gradient-text">Stop Paying ₹1,500/Month to Envato</span>
          <br />
          <span className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl">Get Studio-Quality Assets for ₹299 - Lifetime</span>
        </h1>

        {/* Sub-headline — Effort & Sacrifice */}
        <p className="text-[15px] sm:text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-[1.6] shrink-0 px-2">
          70GB of premium editing assets that pay you back for years. <strong className="text-[#00f2ff]">Transitions, LUTs, sound effects, fonts & more.</strong><br /> ⏰ Lock in ₹299 today - price increases to ₹999 when timer ends.
        </p>

        {/* Social Proof - Trust elements */}
        <div className="df-wrap">
          <div className="df-rating">
            <div className="df-rating__stars"><span>★</span></div>
            <span className="df-rating__text"><strong>4.9/5</strong> · Trusted worldwide</span>
          </div>

          <div className="df-title-row">
            <span className="df-headline">Crafted for&nbsp;</span>
            <div className="df-reel-outer">
              <div className="df-reel-wrapper">
                <div className="df-reel-track">
                  <span>filmmakers</span>
                  <span>photographers</span>
                  <span>content creators</span>
                  <span>editors</span>
                  <span>brands</span>
                  <span>storytellers</span>
                  <span>filmmakers</span>
                </div>
              </div>
              <div className="df-rocket-layer">
                <div className="df-rocket-track">
                  <div>filmmakers<img src="https://cdn.shopify.com/s/files/1/0905/9303/4564/files/Rocket.gif?v=1767181256" alt="" /></div>
                  <div>photographers<img src="https://cdn.shopify.com/s/files/1/0905/9303/4564/files/Rocket.gif?v=1767181256" alt="" /></div>
                  <div>content creators<img src="https://cdn.shopify.com/s/files/1/0905/9303/4564/files/Rocket.gif?v=1767181256" alt="" /></div>
                  <div>editors<img src="https://cdn.shopify.com/s/files/1/0905/9303/4564/files/Rocket.gif?v=1767181256" alt="" /></div>
                  <div>brands<img src="https://cdn.shopify.com/s/files/1/0905/9303/4564/files/Rocket.gif?v=1767181256" alt="" /></div>
                  <div>storytellers<img src="https://cdn.shopify.com/s/files/1/0905/9303/4564/files/Rocket.gif?v=1767181256" alt="" /></div>
                  <div>filmmakers<img src="https://cdn.shopify.com/s/files/1/0905/9303/4564/files/Rocket.gif?v=1767181256" alt="" /></div>
                </div>
              </div>
            </div>
          </div>

          <p className="df-subtitle">The #1 editing bundles everyone asks about.</p>
        </div>

        {/* CTA */}
        <div className="text-center mt-3 sm:mt-5 shrink-0 w-full">
          <a
            href={CTA_URL}
            className="block w-full max-w-[340px] mx-auto sm:inline-block sm:w-auto sm:max-w-none btn-cta text-[16px] sm:text-lg font-black px-6 sm:px-12 py-2 sm:py-3.5 rounded-2xl tracking-wide uppercase"
          >
            YES! I WANT 70GB FOR ₹299
          </a>
        </div>

        {/* Hero Visual — Dashboard mockup with floating snippets */}
        <div className="relative max-w-3xl mx-auto mt-8 sm:mt-12 w-full px-4">
          {/* Floating 3D Snippets — Responsive (absolute positioned, floating) */}
          {floatingSnippets.map((s, i) => (
            <div
              key={`float-${i}`}
              className={`absolute ${snippetPositions[i]} bg-[#0f1629] border border-white/15 rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 z-20 flex items-center gap-1.5 sm:gap-2 shadow-2xl ${i % 2 === 0 ? 'animate-float' : 'animate-float-delay'
                }`}
            >
              <span className="text-sm sm:text-lg">{s.emoji}</span>
              <span className="text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">{s.label}</span>
            </div>
          ))}

          {/* Dashboard container */}
          <div className="bg-[#0a0f1a] border border-white/10 rounded-2xl sm:rounded-3xl p-2 sm:p-3 relative overflow-hidden">
            <div className="glow-line" />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
