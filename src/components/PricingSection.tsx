import StarField from './StarField';

const CTA_URL = 'https://superprofile.bio/vp/professional-video-editing-made-simple';

export default function PricingSection() {
  return (
    <section className="py-16 sm:py-20 px-4 relative z-10" id="pricing">
      <div className="section-divider mb-16" />
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">Special Offer</p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            🔥 TODAY'S SPECIAL PRICE
          </h2>
        </div>

        <div className="pricing-box rounded-3xl p-6 sm:p-8 md:p-10 text-center relative">
          <StarField speed={0.5} starsSmall={100} starsMedium={35} starsLarge={12} opacity={0.3} />
          <div className="glow-line" />

          <h3 className="text-xl sm:text-2xl font-black text-white mb-6">
            Complete Video Editing Bundle
          </h3>

          {/* Value stack */}
          <div className="space-y-2.5 mb-6">
            {[
              ['70GB+ Video Editing Assets (28 Categories)', '₹3,999'],
              ['1500+ Motivational Reels', '₹999'],
              ['Premium E-Books Pack', '₹699'],
              ['ChatGPT Prompts Pack', '₹499'],
              ['Instagram Growth Course', '₹1,499'],
            ].map(([label, price], i) => (
              <div key={i} className="flex items-center justify-between card-dark rounded-xl px-4 py-3">
                <span className="text-sm text-[#cbd5e1]">{label}</span>
                <span className="text-sm text-[#94a3b8] line-through">{price}</span>
              </div>
            ))}
          </div>

          <div className="section-divider mb-6" />

          <div className="mb-2">
            <p className="text-sm text-[#94a3b8]">Total Market Value</p>
            <p className="text-2xl sm:text-3xl font-black text-white line-through opacity-50">₹7,995</p>
          </div>

          <div className="mb-4">
            <p className="text-sm text-[#94a3b8]">Regular Price</p>
            <p className="text-xl font-bold text-white line-through opacity-50">₹2,499</p>
          </div>

          <div className="mb-6 sm:mb-8">
            <p className="text-sm text-[#00f2ff] font-bold">Today Only</p>
            <p className="text-5xl sm:text-6xl font-black gradient-text">₹199</p>
            <p className="text-xs text-[#94a3b8] mt-1">One-time payment • Lifetime access</p>
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
