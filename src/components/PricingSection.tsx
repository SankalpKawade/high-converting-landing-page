import { useState } from 'react';
import StarField from './StarField';

const CTA_URL = 'https://superprofile.bio/vp/level-up-your-edits';
const COUPON_CODE = 'MASTER80';

export default function PricingSection() {
  const [copied, setCopied] = useState(false);

  const copyCoupon = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(COUPON_CODE);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = COUPON_CODE;
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
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy coupon code', err);
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 relative z-10" id="pricing">
      <div className="section-divider mb-16" />
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          {/* <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">Special Offer</p>*/}
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            🔥 TODAY'S SPECIAL PRICE
          </h2>
        </div>

        <div className="pricing-box rounded-3xl p-6 sm:p-8 md:p-10 text-center relative">
          <StarField speed={0.5} starsSmall={100} starsMedium={35} starsLarge={12} opacity={0.3} />
          <div className="glow-line" />

          <h3 className="text-xl sm:text-2xl font-black text-white mb-6">
            Lock In the Master Bundle Deal
          </h3>

          {/* Value stack */}
          <div className="space-y-2.5 mb-6">
            {[
              ['ProDigitalFiles Master Bundle (28+ Packs)', '₹3,999'],
              ['Exclusive Bonuses', '₹3,197'],
            ].map(([label, price], i) => (
              <div key={i} className="flex items-center justify-between card-dark rounded-xl px-4 py-3">
                <span className="text-sm text-[#cbd5e1]">{label}</span>
                <span className="text-sm text-[#94a3b8] line-through">{price}</span>
              </div>
            ))}
          </div>

          <div className="section-divider mb-6" />
          {/*
          <div className="mb-2">
            <p className="text-sm text-[#94a3b8]">Total Market Value</p>
            <p className="text-2xl sm:text-3xl font-black text-white line-through opacity-50">₹7,695</p>
          </div>*/}

          <div className="mb-4">
            <p className="text-md text-[#94a3b8]">Regular Price</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-white/50 line-through">₹3,999</p>
          </div>

          <div className="mb-6 sm:mb-8">
            <p className="text-sm text-[#00f2ff] font-bold">Today Only</p>
            <p className="text-5xl sm:text-6xl font-black gradient-text">₹399</p>
            <p className="text-xs text-[#94a3b8] mt-1">One-time payment • Lifetime access</p>
          </div>

          {/* Coupon Code Section */}
          <div className="mb-6 rounded-2xl bg-white/[0.04] border border-dashed border-white/20 p-3 sm:p-4 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-xs text-[#94a3b8] font-medium">Coupon Code:</span>
                  <span className="font-mono text-sm font-bold text-white tracking-wider bg-white/10 px-2 py-0.5 rounded border border-white/10 select-all">
                    {COUPON_CODE}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#94a3b8] mt-1">
                  Apply this code at checkout to get extra ₹80 off
                </p>
              </div>

              <button
                type="button"
                onClick={copyCoupon}
                className="w-full sm:w-auto shrink-0 px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 border border-white/20 bg-white/10 hover:bg-white/15 text-white cursor-pointer active:scale-95"
                aria-label={`Copy coupon code ${COUPON_CODE}`}
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 text-[#cbd5e1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <a
            href={CTA_URL}
            className="block w-full btn-cta text-base sm:text-lg font-black py-2  sm:py-3 rounded-2xl tracking-wide uppercase text-center"
          >
            Claim It Before It’s Gone
          </a>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-4 text-xs text-[#94a3b8]">
            <span>🔒 Secure Payment</span>
            <span>📥 Instant Download</span>
            <span>💯 100% Satisfaction</span>
          </div>

          <p className="text-xs text-[#64748b] mt-4">
            Pay with UPI • PhonePe • Google Pay • Paytm • Credit/Debit Card
          </p>
        </div>
      </div>
    </section >
  );
}
