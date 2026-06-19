import React, { useState, useRef, useEffect } from 'react';

export default function ImageComparisonSection() {
  const [percent, setPercent] = useState(55.59);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const newPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPercent(newPercent);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if ('touches' in e) {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    } else {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-12 sm:py-20 px-4 relative z-10" id="comparison">
      <div className="section-divider mb-16" />
      <div className="max-w-4xl mx-auto">
        {/* Title & Description */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">Cinematic LUTs</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            See The Color Transformation
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] max-w-2xl mx-auto">
            Drag the slider to see how our Hollywood-grade LUTs instantly transform flat footage into cinematic masterpieces.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div
          ref={containerRef}
          className="relative w-full aspect-[1638/2048] md:aspect-[1638/684] rounded-3xl overflow-hidden border border-[#00f2ff]/20 shadow-[0_0_50px_rgba(0,242,255,0.08)] select-none touch-none"
        >
          {/* Label Before (Left) */}
          <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider text-white/70">
            Graded (After)
          </div>

          {/* Label After (Right) */}
          <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider text-white/70">
            Raw (Before)
          </div>

          {/* Before Image (Left Layer - Full Width underneath) */}
          <div className="w-full h-full pointer-events-none select-none">
            <picture className="w-full h-full block relative">
              <source
                media="(max-width: 767px)"
                srcSet="https://cinematicfxeffects.com/cdn/shop/files/1_ef735bc8-d047-4b7c-ac4f-cece6019f8c1.png?v=1752603734&width=400 400w, https://cinematicfxeffects.com/cdn/shop/files/1_ef735bc8-d047-4b7c-ac4f-cece6019f8c1.png?v=1752603734&width=600 600w, https://cinematicfxeffects.com/cdn/shop/files/1_ef735bc8-d047-4b7c-ac4f-cece6019f8c1.png?v=1752603734&width=800 800w, https://cinematicfxeffects.com/cdn/shop/files/1_ef735bc8-d047-4b7c-ac4f-cece6019f8c1.png?v=1752603734&width=1000 1000w"
                sizes="(max-width: 767px) 100vw, 800px"
              />
              <img
                src="https://cinematicfxeffects.com/cdn/shop/files/1_e1181635-360f-4e68-adfc-4e2c53d82acd.png?v=1752603663&width=1638"
                alt="Before grading"
                srcSet="https://cinematicfxeffects.com/cdn/shop/files/1_e1181635-360f-4e68-adfc-4e2c53d82acd.png?v=1752603663&width=300 300w, https://cinematicfxeffects.com/cdn/shop/files/1_e1181635-360f-4e68-adfc-4e2c53d82acd.png?v=1752603663&width=400 400w, https://cinematicfxeffects.com/cdn/shop/files/1_e1181635-360f-4e68-adfc-4e2c53d82acd.png?v=1752603663&width=500 500w, https://cinematicfxeffects.com/cdn/shop/files/1_e1181635-360f-4e68-adfc-4e2c53d82acd.png?v=1752603663&width=600 600w, https://cinematicfxeffects.com/cdn/shop/files/1_e1181635-360f-4e68-adfc-4e2c53d82acd.png?v=1752603663&width=700 700w, https://cinematicfxeffects.com/cdn/shop/files/1_e1181635-360f-4e68-adfc-4e2c53d82acd.png?v=1752603663&width=800 800w, https://cinematicfxeffects.com/cdn/shop/files/1_e1181635-360f-4e68-adfc-4e2c53d82acd.png?v=1752603663&width=900 900w, https://cinematicfxeffects.com/cdn/shop/files/1_e1181635-360f-4e68-adfc-4e2c53d82acd.png?v=1752603663&width=1000 1000w, https://cinematicfxeffects.com/cdn/shop/files/1_e1181635-360f-4e68-adfc-4e2c53d82acd.png?v=1752603663&width=1200 1200w, https://cinematicfxeffects.com/cdn/shop/files/1_e1181635-360f-4e68-adfc-4e2c53d82acd.png?v=1752603663&width=1400 1400w, https://cinematicfxeffects.com/cdn/shop/files/1_e1181635-360f-4e68-adfc-4e2c53d82acd.png?v=1752603663&width=1600 1600w"
                sizes="min(1900px, 100vw)"
                loading="lazy"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </picture>
          </div>

          {/* After Image (Right Layer - Absolute on top, clipped from the left) */}
          <div
            className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none select-none overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${percent}%)` }}
          >
            <picture className="w-full h-full block relative">
              <source
                media="(max-width: 767px)"
                srcSet="https://cinematicfxeffects.com/cdn/shop/files/2_4334cd7f-5625-49de-a680-79cad4570785.png?v=1752603734&width=400 400w, https://cinematicfxeffects.com/cdn/shop/files/2_4334cd7f-5625-49de-a680-79cad4570785.png?v=1752603734&width=600 600w, https://cinematicfxeffects.com/cdn/shop/files/2_4334cd7f-5625-49de-a680-79cad4570785.png?v=1752603734&width=800 800w, https://cinematicfxeffects.com/cdn/shop/files/2_4334cd7f-5625-49de-a680-79cad4570785.png?v=1752603734&width=1000 1000w"
                sizes="(max-width: 767px) 100vw, 800px"
              />
              <img
                src="https://cinematicfxeffects.com/cdn/shop/files/2_feab630f-c196-4e1e-857e-5429f05e3b88.png?v=1752603703&width=1638"
                alt="After grading"
                srcSet="https://cinematicfxeffects.com/cdn/shop/files/2_feab630f-c196-4e1e-857e-5429f05e3b88.png?v=1752603703&width=300 300w, https://cinematicfxeffects.com/cdn/shop/files/2_feab630f-c196-4e1e-857e-5429f05e3b88.png?v=1752603703&width=400 400w, https://cinematicfxeffects.com/cdn/shop/files/2_feab630f-c196-4e1e-857e-5429f05e3b88.png?v=1752603703&width=500 500w, https://cinematicfxeffects.com/cdn/shop/files/2_feab630f-c196-4e1e-857e-5429f05e3b88.png?v=1752603703&width=600 600w, https://cinematicfxeffects.com/cdn/shop/files/2_feab630f-c196-4e1e-857e-5429f05e3b88.png?v=1752603703&width=700 700w, https://cinematicfxeffects.com/cdn/shop/files/2_feab630f-c196-4e1e-857e-5429f05e3b88.png?v=1752603703&width=800 800w, https://cinematicfxeffects.com/cdn/shop/files/2_feab630f-c196-4e1e-857e-5429f05e3b88.png?v=1752603703&width=900 900w, https://cinematicfxeffects.com/cdn/shop/files/2_feab630f-c196-4e1e-857e-5429f05e3b88.png?v=1752603703&width=1000 1000w, https://cinematicfxeffects.com/cdn/shop/files/2_feab630f-c196-4e1e-857e-5429f05e3b88.png?v=1752603703&width=1200 1200w, https://cinematicfxeffects.com/cdn/shop/files/2_feab630f-c196-4e1e-857e-5429f05e3b88.png?v=1752603703&width=1400 1400w, https://cinematicfxeffects.com/cdn/shop/files/2_feab630f-c196-4e1e-857e-5429f05e3b88.png?v=1752603703&width=1600 1600w"
                sizes="min(1900px, 100vw)"
                loading="lazy"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </picture>
          </div>

          {/* Vertical Slider Handle Line and Drag Button */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.5)] z-30 pointer-events-none"
            style={{ left: `${percent}%` }}
          >
            {/* Grab Capsule */}
            <div 
              onMouseDown={startDragging}
              onTouchStart={startDragging}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-black/90 rounded-full border-2 border-white flex items-center justify-center shadow-2xl cursor-ew-resize transition-transform duration-100 hover:scale-110 active:scale-95 pointer-events-auto"
            >
              <span className="flex items-center justify-center text-white select-none">
                <svg className="w-4 h-4" viewBox="0 0 12 17" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeWidth="2" d="M1 1L1 16"></path>
                  <path strokeLinecap="round" strokeWidth="2" d="M6 1L6 16"></path>
                  <path strokeLinecap="round" strokeWidth="2" d="M11 1L11 16"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
