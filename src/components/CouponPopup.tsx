import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CouponPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const copyCoupon = async () => {
    const code = 'MASTER80';
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = code;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3500);
    } catch (err) {
      console.error('Failed to copy coupon code', err);
    }
  };

  const closePopup = (e?: React.MouseEvent | Event) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('coupon_popup_dismissed', 'true');
  };

  useEffect(() => {
    // Expose globals for external/inline onclick compatibility
    (window as any).copyHello2026Coupon = copyCoupon;
    (window as any).closeHello2026Popup = (event: any) => closePopup(event);

    // If explicitly dismissed in this session, do not show
    if (sessionStorage.getItem('coupon_popup_dismissed') === 'true') {
      setIsDismissed(true);
      return;
    }

    // Check if user is currently inside the Hero section
    const checkHeroSection = () => {
      if (sessionStorage.getItem('coupon_popup_dismissed') === 'true') return;

      const hero = document.getElementById('hero');
      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        // Visible strictly when user is within the Hero section
        const onHero = window.scrollY < (heroBottom - 100);
        setIsVisible(onHero);
      } else {
        setIsVisible(window.scrollY < 650);
      }
    };

    window.addEventListener('scroll', checkHeroSection, { passive: true });
    window.addEventListener('resize', checkHeroSection, { passive: true });

    // Initial check with brief smooth mount delay
    const timer = setTimeout(checkHeroSection, 400);

    return () => {
      window.removeEventListener('scroll', checkHeroSection);
      window.removeEventListener('resize', checkHeroSection);
      clearTimeout(timer);
    };
  }, []);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 380, damping: 26 }}
          className="fixed bottom-4 sm:bottom-6 left-3 sm:left-6 z-50 w-[275px] xs:w-[290px] sm:w-[330px] max-w-[calc(100vw-1.5rem)]"
        >
          <div
            className="hello2026-popup-wrapper relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-[#0e1834] via-[#091124] to-[#040814] p-3 sm:p-4 text-white shadow-[0_12px_40px_rgba(0,0,0,0.75),0_0_25px_rgba(0,242,255,0.18)] border border-[#00f2ff]/35 backdrop-blur-xl transition-all duration-300 hover:border-[#00f2ff]/70 hover:shadow-[0_16px_45px_rgba(0,0,0,0.85),0_0_35px_rgba(0,242,255,0.3)] select-none group"
            onClick={copyCoupon}
            role="button"
            tabIndex={0}
            aria-label="Click to copy coupon code MASTER80 for 20% discount"
          >
            {/* Top scanning neon line */}
            <div className="glow-line" />

            {/* Ambient background glows */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#00f2ff]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#7000ff]/15 rounded-full blur-2xl pointer-events-none" />

            {/* Close button */}
            <div
              className="hello2026-close-button absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-150 z-20 cursor-pointer"
              onClick={closePopup}
              role="button"
              tabIndex={0}
              aria-label="Close coupon offer"
            >
              <i className="material-icons flex items-center justify-center not-italic">
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </i>
            </div>

            {/* Top Row: Discount Badge & Copy Status */}
            <div className="flex items-center justify-between pr-6 mb-1.5 sm:mb-2">
              <div className="discount-badge inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full bg-gradient-to-r from-[#00f2ff] via-[#3b82f6] to-[#7000ff] text-white shadow-[0_0_12px_rgba(0,242,255,0.35)]">
                <span className="discount-text text-[10px] sm:text-xs font-black tracking-wider uppercase drop-shadow-sm">
                  🔥 20% OFF
                </span>
              </div>

              {/* Dynamic copy feedback */}
              <div className="text-right">
                <p
                  id="copy-text"
                  className={`copy-text text-[9px] sm:text-[10px] font-semibold text-[#00f2ff] group-hover:text-cyan-300 items-center gap-1 transition-colors ${
                    copied ? 'hidden' : 'flex'
                  }`}
                >
                  <span>Tap to copy</span>
                  <svg
                    className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </p>

                <p
                  id="copied-text"
                  className={`copied-text text-[9px] sm:text-[10px] font-bold text-emerald-400 items-center gap-1 bg-emerald-950/70 border border-emerald-500/40 px-1.5 sm:px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)] animate-pulse ${
                    copied ? 'flex' : 'hidden'
                  }`}
                >
                  ✓ Copied!
                </p>
              </div>
            </div>

            {/* Coupon Code Box */}
            <div
              id="coupon-code-box"
              className={`coupon-box rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 flex items-center justify-between border-2 border-dashed transition-all duration-200 ${
                copied
                  ? 'border-emerald-400 bg-emerald-950/30 shadow-[0_0_18px_rgba(16,185,129,0.25)]'
                  : 'border-[#00f2ff]/40 bg-[#040814]/90 group-hover:border-[#00f2ff]/75 group-hover:bg-[#060d22]'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="label text-[9px] sm:text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  Use code:
                </span>
                <span className="code font-mono text-sm sm:text-base font-black tracking-wider sm:tracking-widest text-white drop-shadow-[0_2px_8px_rgba(0,242,255,0.4)]">
                  MASTER80
                </span>
              </div>

              {/* Copy icon indicator */}
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                  copied
                    ? 'bg-emerald-500 text-black font-bold scale-105'
                    : 'bg-[#00f2ff]/15 text-[#00f2ff] group-hover:bg-[#00f2ff] group-hover:text-black'
                }`}
              >
                {copied ? (
                  <svg
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Bottom Row: Message & Terms */}
            <div className="flex items-center justify-between mt-1.5 sm:mt-2 pt-0.5 text-slate-300">
              <p className="message text-[10px] sm:text-[11px] font-semibold text-slate-200">
                Extra 20% off on offer price
              </p>
              <p className="terms text-[8px] sm:text-[9px] text-slate-400 font-medium">
                *T&amp;C Applied
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
