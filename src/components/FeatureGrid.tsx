import React, { useRef, useState, useEffect } from 'react';

const CTA_URL = 'https://superprofile.bio/vp/professional-video-editing-made-simple';

const mainSections = [
  {
    title: "TRANSITIONS & FX",
    image: "/images/transitions_fx_pack.png",
    features: ["800+ Transitions Pack", "2000+ FX Presets", "VHS & Glitch Pack", "100+ AE Plugins"]
  },
  {
    title: "CINEMATIC LUTS",
    image: "/images/cinematic_luts_pack.png",
    features: ["200+ Cinematic LUTs", "4K Cinematic Film Grain", "Light Leaks & Flares", "Smoke & Fog Overlays"]
  },
  {
    title: "GRAPHICS & FONTS",
    image: "/images/graphics_assets_pack.png",
    features: ["10,000+ Fonts Collection", "1500+ Lower Thirds", "Kinetic Title Pack", "100+ Callout Graphics"]
  },
  {
    title: "SOUND FX & MUSIC",
    image: "/images/sound_music_pack.png",
    features: ["1000+ Premium Music Tracks", "3000+ Cinematic SFX", "Whooshes, Hits & Risers", "Commercial License"]
  },
  {
    title: "EBOOK BUNDLE",
    textOnImage: "EDITING ACADEMY",
    image: "/images/editing_academy_pack.png",
    features: ["Full A-Z Editing Course", "Viral Meme Videos Pack", "500+ 4K Stock Footage", "Wedding Title Pack"]
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

export default function FeatureGrid() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      // Scroll by 85% of visible width to align nicely with peeking mobile cards
      const scrollAmount = clientWidth * 0.85;
      carouselRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  useEffect(() => {
    if (isHovered) return;
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // If we are close to the end, wrap back to start
        const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 10;

        if (isAtEnd) {
          carouselRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          const firstChild = carouselRef.current.firstElementChild as HTMLElement;
          if (firstChild) {
            const cardWidth = firstChild.getBoundingClientRect().width;
            const gap = window.innerWidth >= 640 ? 24 : 16;
            carouselRef.current.scrollTo({
              left: scrollLeft + cardWidth + gap,
              behavior: 'smooth'
            });
          }
        }
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <section className="py-12 sm:py-20 px-4 relative z-10" id="features">
      <div className="section-divider mb-16" />

      <div className="max-w-6xl mx-auto">
        {/* Header Title & Nav arrows */}
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">What's Included</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2 leading-tight">
              All Assets
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] max-w-xl">
              No more searching, no more subscriptions. Just download, apply, and export.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-2 shrink-0">
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
          </div>
        </div>

        {/* Carousel container */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory flex-nowrap gap-4 sm:gap-6 pb-6 px-4 -mx-4 md:px-0 md:-mx-0 scroll-smooth"
        >
          {mainSections.map((item, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[80vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] max-w-[300px] flex flex-col group"
            >
              {/* Image Box */}
              <div
                className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#070c18] cursor-default shadow-lg transition-all duration-300 hover:border-[#00f2ff]/30"
              >
                {/* cover image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                />
                {/* subtle dark backing overlay that transitions on hover to ensure absolute image clarity */}
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none select-none" />
              </div>

              {/* Text labels below the box */}
              <div className="mt-4 pl-1.5">
                <h3 className="text-base font-black text-white tracking-tight group-hover:text-[#00f2ff] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Features List */}
                <ul className="mt-3.5 space-y-2 text-xs text-[#94a3b8]">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-tight">
                      <svg className="w-3.5 h-3.5 text-[#00f2ff] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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
            className="inline-block btn-cta text-base sm:text-lg font-black px-8 sm:px-12 py-3 sm:py-4 rounded-2xl uppercase tracking-wide"
          >
            All 5 Packs — Just ₹299
          </a>
        </div>
      </div>
    </section>
  );
}
