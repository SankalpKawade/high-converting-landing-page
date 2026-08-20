import React, { useState, useRef, useEffect } from 'react';
import StarField from './StarField';

const CTA_URL = 'https://superprofile.bio/vp/level-up-your-edits';

const mainSections = [
  {
    title: "TRANSITIONS & FX",
    cardTitle: "Transitions, Glitches & Presets",
    subtitle: "Hook Viewers in the First 3 Seconds",
    image: "/images/transitions_fx_pack.webp",
    video: "/images/transition-glitch.webm",
    features: ["800+ Transitions Pack", "2000+ FX Presets", "VHS & Glitch Pack", "100+ AE Plugins"]
  },
  {
    title: "CINEMATIC LUTS",
    cardTitle: "Cinematics Assets",
    subtitle: "Turn Flat Raw Footage into Film Magic",
    video: "/images/luts.webm",
    videoScale: true,
    features: ["200+ Cinematic LUTs", "4K Cinematic Film Grain", "Light Leaks & Flares", "Smoke, Fog, Dust, Fire, Snow & Camera Rig Overlays"]
  },
  {
    title: "GRAPHICS & FONTS",
    cardTitle: "Motion Graphics & Fonts",
    subtitle: "Ready-to-Use Callouts and Custom Animations",
    video: "/images/mogrt.webm",
    features: ["10,000+ Fonts Collection", "1500+ Lower Thirds", "Kinetic Title Pack", "100+ Callout Graphics"]
  },
  {
    title: "Audio & SFX",
    cardTitle: "Audio & SFX",
    subtitle: "Make Your Edits Feel 10x More Immersive",
    video: "/images/sounddesign.webm",
    features: ["1000+ Premium Music Tracks", "3000+ Cinematic SFX", "Whooshes, Hits & Risers", "Commercial License"]
  },
  {
    title: "ANIMATION PACKS",
    cardTitle: "Animation Packs",
    subtitle: "Bring Your Edits to Life with Dynamic Animations",
    video: "/images/animation.webm",
    features: ["Logo Animation", "100+ Backgrounds", "100+ Callout Graphics", "Animated Title Pack"]
  },
  {
    title: "EBOOK BUNDLE",
    textOnImage: "EDITING ACADEMY",
    cardTitle: "Fast-Track Editing Course",
    subtitle: "Learn Fast Pacing, Storytelling & Client Workflow with quality Add-Ons",
    image: "/images/editing_academy_pack.webp",
    features: ["Full A-Z Editing Course", "Viral Meme Videos Pack", "500+ 4K Stock Footage", "Wedding Title Pack", "Youtube Essential Pack"]
  }
];

const compatible = [
  { name: "Premiere Pro", icon: "Pr", color: "#9999FF" },
  { name: "After Effects", icon: "Ae", color: "#D4B4FF" },
  { name: "DaVinci Resolve", icon: "Da", color: "#FF7B72" },
  { name: "Filmora", icon: "Fi", color: "#40C4FF" },
  { name: "Final Cut Pro", icon: "Fc", color: "#FF4081" },
  { name: "CapCut", icon: "Cc", color: "#FFFFFF" },
];

const VideoPlayer = ({ src, className }: { src: string; className: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 10) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.error("Video play failed:", e));
    }
  };

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      onTimeUpdate={handleTimeUpdate}
      className={className}
      style={{ WebkitUserSelect: 'none' }}
    />
  );
};

export default function FeatureGrid() {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(undefined);

  // Duplicate items to allow for seamless infinite scrolling
  const extendedSections = [...mainSections, ...mainSections, ...mainSections, ...mainSections];

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    // Slower pace
    const scrollSpeed = 0.4;

    const scrollLoop = () => {
      if (!isHovered && el) {
        el.scrollLeft += scrollSpeed;

        // Seamless reset when reaching the midpoint (since we duplicated 4 times, midpoint is exact)
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        } else if (el.scrollLeft <= 0) {
          // If user scrolls backwards manually
          el.scrollLeft += el.scrollWidth / 2;
        }
      }
      animationRef.current = requestAnimationFrame(scrollLoop);
    };

    animationRef.current = requestAnimationFrame(scrollLoop);
    return () => {
      if (animationRef.current !== undefined) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  return (
    <section className="py-12 sm:py-20 px-4 relative z-10" id="features">
      <div className="section-divider mb-16" />

      <div className="max-w-6xl mx-auto">
        {/* Header Title & Nav arrows */}
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">What's In Master Bundle</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2 leading-tight">
              500,000+ Assets
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] max-w-xl">
              No more searching, no more subscriptions. Just download, apply, and export.
            </p>
          </div>

          {/* Slider controls (Omitted/Commented out per User edits) */}
          {/*<div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleScroll('left')}
              disabled={!showLeftArrow}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${showLeftArrow
                ? 'border-white/20 text-white hover:border-[#00f2ff] hover:text-[#00f2ff] hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] bg-[#0a1226]/80 cursor-pointer'
                : 'border-white/5 text-white/20 bg-transparent cursor-not-allowed'
                }`}
              aria-label="Previous Section"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!showRightArrow}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${showRightArrow
                ? 'border-white/20 text-white hover:border-[#00f2ff] hover:text-[#00f2ff] hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] bg-[#0a1226]/80 cursor-pointer'
                : 'border-white/5 text-white/20 bg-transparent cursor-not-allowed'
                }`}
              aria-label="Next Section"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>*/}
        </div>

        {/* Carousel container - Native Scroll + JS Auto-pan */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="relative group w-full pb-6"
        >
          {/* Edge gradients for smooth fade-out */}
          <div className="absolute top-0 bottom-0 left-0 w-4 sm:w-24 bg-gradient-to-r from-[#040810] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-4 sm:w-24 bg-gradient-to-l from-[#040810] to-transparent z-20 pointer-events-none"></div>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto no-scrollbar w-full cursor-grab active:cursor-grabbing"
            style={{ scrollBehavior: 'auto' }}
          >
            {extendedSections.map((item, i) => (
              <div
                key={i}
                className="shrink-0 w-[85vw] sm:w-[45vw] md:w-[32vw] lg:w-[24vw] max-w-[340px] flex flex-col group px-2 sm:px-3"
              >
                {/* Feature Card Box */}
                <div
                  className="relative flex-1 flex flex-col justify-between p-4 sm:p-5 bg-[#0c0c0e] border border-white/10 rounded-[28px] sm:rounded-[32px] cursor-default shadow-lg transition-all duration-300 hover:border-[#00f2ff]/30 overflow-hidden"
                >
                  <StarField speed={0.05} starsSmall={40} starsMedium={10} starsLarge={2} opacity={0.1} />

                  {/* Top Section */}
                  <div className="text-left flex flex-col z-10">
                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight group-hover:text-[#00f2ff] transition-colors duration-200 mb-1.5">
                      {item.cardTitle}
                    </h3>
                    {/* Subtitle */}
                    <p className="text-[11px] sm:text-xs text-[#94a3b8] font-medium leading-normal mb-4">
                      {item.subtitle}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 text-[11px] sm:text-xs text-[#cbd5e1] mb-6">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-snug">
                          <svg className="w-3.5 h-3.5 text-[#00f2ff] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-white/90 font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mockup image at the bottom */}
                  <div className={`w-full mt-auto z-10 ${item.video ? 'h-[200px] sm:h-[240px]' : 'h-[200px] sm:h-[220px]'} pt-4`}>
                    {item.video ? (
                      <div className="overflow-hidden rounded-xl w-full h-full relative bg-black">
                        <VideoPlayer
                          src={item.video}
                          className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-700 pointer-events-none ${item.videoScale ? 'scale-[1.35] group-hover:scale-[1.45]' : 'group-hover:scale-110'
                            }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-xl"></div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.cardTitle}
                          loading="lazy"
                          className="w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compatible Apps */}
        <div className="mt-16 sm:mt-24 text-center">
          <p className="text-[#94a3b8] text-sm font-bold uppercase tracking-widest mb-6">Compatible With All Major Software</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {compatible.map((app, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-black text-xl sm:text-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: app.color,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                  }}>
                  {app.icon}
                </div>
                <span className="text-xs sm:text-sm text-[#94a3b8] font-semibold">{app.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href={CTA_URL}
            className="inline-block btn-cta text-base sm:text-lg font-black px-8 sm:px-12 py-4 sm:py-4 rounded-2xl uppercase tracking-wide"
          >
            All 28+ Packs — Just ₹399
          </a>
        </div>
      </div>
    </section>
  );
}
