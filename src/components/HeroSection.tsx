import { useState, useEffect } from 'react';
import StarField from './StarField';

const CTA_URL = 'https://superprofile.bio/vp/level-up-your-edits';

const BADGE_ITEMS = [
  { text: "347 Bought in the Last 24 Hours", duration: 3000 },
  { text: "Trending — Editors & Creators", duration: 4000 },
  { text: "Trusted by 5,243+ Creators", duration: 5000 },
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
    <section className="relative min-h-[100dvh] flex flex-col justify-start sm:justify-center pt-[132px] sm:pt-[180px] pb-6 sm:pb-10 px-4 sm:px-6 lg:px-8 text-center overflow-hidden grid-bg" id="hero">
      {/* Background glow orbs */}
      <div className="hidden sm:block absolute top-20 left-1/4 w-72 h-72 bg-[#00f2ff] rounded-full opacity-[0.06] blur-[100px]" style={{ willChange: 'transform', transform: 'translateZ(0)' }} />
      <div className="hidden sm:block absolute bottom-20 right-1/4 w-72 h-72 bg-[#7000ff] rounded-full opacity-[0.08] blur-[100px]" style={{ willChange: 'transform', transform: 'translateZ(0)' }} />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex-1 flex flex-col justify-start sm:justify-center items-center w-full mt-2 sm:mt-3">
        {/* Top badge — SOLID background */}
        <div className="inline-flex items-center gap-2 bg-[#0f1629] border border-[#00f2ff]/30 rounded-full px-4 py-1.5 mb-5 sm:mb-10 shrink-0 min-w-[280px] sm:min-w-[320px] justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00f2ff] pulse-icon inline-block" />
          <span className={`text-[11px] sm:text-sm font-semibold text-[#cbd5e1] transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            {BADGE_ITEMS[index].text}
          </span>
        </div>

        {/* Dream Outcome Headline */}
        <h1 className="hero-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 sm:mb-7 text-white leading-snug sm:leading-tight shrink-0">
          Level Up Your Edits with <br /> <span className="text-gradient">ProDigitalFiles</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-3 sm:mt-4 text-base sm:text-xl text-gray-400 max-w-2xl mx-auto mb-4 sm:mb-4 px-2">
          Instantly unlock 28+ editing packs with drag-and-drop LUTs, transitions, SFX, and an complete editing course to slash edit times by 80% to Level Up your videos quality immediately.
        </p>

        {/* Social Proof - Trust elements */}
        <div className="df-wrap mt-6 mb-7 sm:mt-14 sm:mb-13">
          <div className="df-rating__stars"><span>★</span>  <span className="df-rating__text"><strong>4.9/5</strong> · Creators' Choice</span></div>

          <div className="df-title-row">
            <span className="df-headline">Crafted for&nbsp;</span>
            <div className="df-reel-outer">
              <div className="df-reel-wrapper">
                <div className="df-reel-track" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
                  <span>content creators 🎬</span>
                  <span>editors ✂️</span>
                  <span>photographers 📸</span>
                  <span>beginners 👨🏼‍💻</span>
                  <span>brands 🏢</span>
                  <span>storytellers 📖</span>
                  <span>filmmakers 🎥</span>
                </div>
              </div>
            </div>
          </div>

          <p className="df-subtitle">The #1 editing bundle everyone asks about.</p>
        </div>

        {/* Price & CTA Section */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 shrink-0 w-full">
          <div className="flex items-end gap-3 bg-[#0f1629] border border-[#00f2ff]/30 px-6 py-3 rounded-2xl">
            <span className="text-2xl sm:text-3xl text-gray-500 line-through font-medium">₹3,999</span>
            <span className="text-5xl sm:text-6xl font-black text-white">₹399</span>
          </div>

          <a
            href={CTA_URL}
            className="btn-cta inline-block w-auto sm:w-auto px-10 py-5 text-lg sm:text-xl font-bold text-white rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Access All Assets Instantly
          </a>

          <p className="text-sm text-gray-400 mt-2 flex items-center gap-2 justify-center">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Secure 1-Click Checkout
          </p>
        </div>

        {/* Hero Visual — Dashboard mockup with floating snippets
        <div className="relative max-w-3xl mx-auto mt-8 sm:mt-12 w-full px-4">
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
        */}
      </div>
    </section>
  );
}
