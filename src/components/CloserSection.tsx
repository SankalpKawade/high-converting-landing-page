import StarField from './StarField';

const CTA_URL = 'CTA_URL';

export default function CloserSection() {
  return (
    <section className="py-16 sm:py-24 px-4 relative z-10 overflow-hidden">
      <div className="section-divider mb-16" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
          One Decision Can Change Your<br className="hidden sm:block" />
          <span className="gradient-text"> Editing Career Forever</span>
        </h2>

        <p className="text-base sm:text-lg text-[#94a3b8] mb-8 max-w-xl mx-auto leading-relaxed">
          5,000+ creators already upgraded their workflow.
          <strong className="text-white"> Don't let another day pass</strong> making amateur videos when pro-quality is just ₹199 away.
        </p>

        {/* Visual testimonial */}
        {/*
        <div className="card-accent p-5 sm:p-6 mb-8 max-w-md mx-auto text-left relative overflow-hidden">
          <StarField speed={0.4} starsSmall={50} starsMedium={18} starsLarge={6} opacity={0.3} />
          <div className="glow-line" />
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #ff6b00, #ff9500)' }}
            >
              V
            </div>
           
            <div>
              <p className="text-sm font-bold text-white">Vikram R.</p>
              <p className="text-xs text-[#94a3b8]">Freelance Video Editor, Mumbai</p>
            </div>
            
          </div>
          
          <p className="text-yellow-400 text-xs mb-2">★★★★★</p>
          <p className="text-sm text-[#cbd5e1] leading-relaxed italic">
            "I was charging ₹1,500 per wedding video. After using these LUTs and transitions, my work looks so cinematic that I now charge ₹12,000. This bundle literally 8x'd my income."
          </p>
         
      </div>
       */}

        <a
          href="https://superprofile.bio/vp/professional-video-editing-made-simple"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block btn-cta text-base sm:text-lg font-black px-10 sm:px-14 py-4 sm:py-5 rounded-2xl tracking-wide uppercase"
        >
          Get Everything for ₹199 →
        </a>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-4 text-xs text-[#94a3b8]">
          <span>🔒 Secure Payment</span>
          <span>📥 Instant Download</span>
          <span>💯 100% Satisfaction</span>
          <span>🎁 4 Free Bonuses</span>
        </div>
      </div>
    </section >
  );
}
