import { useState, useEffect } from 'react';

const CTA_URL = 'https://superprofile.bio/vp/professional-video-editing-made-simple';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (~700px)
      setVisible(window.scrollY > 700);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-[#030712] border-t border-[#00f2ff]/20 px-4 py-3 ${visible ? 'sticky-cta-visible' : 'sticky-cta-hidden'
        }`}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <div className="max-w-lg mx-auto flex items-center gap-3">
        {/*<div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-bold text-white truncate">Start Creating Pro Videos Today</p>
        </div>
        */}
        <div className="text-center">
          <span
            className="text-xs line-through"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            ₹3,999
          </span>
          <p className="font-black text-xl" style={{ color: "#385ffbff" }}>
            ₹199
          </p>
        </div>
        <a
          href={CTA_URL}
          className="btn-cta text-sm sm:text-base font-bold px-5 sm:px-8 py-2 rounded-xl whitespace-nowrap text-center"
        >
          Start Creating Pro Videos Today
        </a>
      </div>
    </div >
  );
}
