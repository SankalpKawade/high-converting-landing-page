import { useState, useEffect } from 'react';

const CTA_URL = 'https://cosmofeed.com/bp/683b06f5a8498c001f839e1d';

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
      className={`fixed bottom-0 left-0 right-0 z-50 bg-[#030712] border-t border-[#00f2ff]/20 px-4 py-3 ${
        visible ? 'sticky-cta-visible' : 'sticky-cta-hidden'
      }`}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <div className="max-w-lg mx-auto flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-bold text-white truncate">Complete Bundle</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#94a3b8] line-through">₹4,999</span>
            <span className="text-base sm:text-lg font-black text-[#00f2ff]">₹199</span>
          </div>
        </div>
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta text-sm sm:text-base font-bold px-5 sm:px-8 py-3 rounded-xl whitespace-nowrap text-center"
        >
          Get Now →
        </a>
      </div>
    </div>
  );
}
