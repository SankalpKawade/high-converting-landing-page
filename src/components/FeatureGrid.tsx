import StarField from './StarField';

const CTA_URL = 'https://superprofile.bio/vp/professional-video-editing-made-simple';

const features = [
  { icon: "🎬", name: "800+ Transitions Pack", desc: "Cinematic cuts, glitch, smooth, whip-pan & more", tag: "MOST POPULAR", tagColor: "#00D4FF", count: "800+", color: "#00D4FF" },
  { icon: "⚡", name: "2000+ FX Presets", desc: "One-click effects for Premiere Pro & After Effects", tag: "FX", tagColor: "#A855F7", count: "2000+", color: "#A855F7" },
  { icon: "🎨", name: "200+ Cinematic LUTs", desc: "Hollywood-grade color grading presets", tag: "COLOR", tagColor: "#FF6B00", count: "200+", color: "#FF6B00" },
  { icon: "🔤", name: "10,000+ Fonts Collection", desc: "Premium typography for titles & lower thirds", tag: "MEGA PACK", tagColor: "#00D4FF", count: "10K+", color: "#00D4FF" },
  { icon: "🎵", name: "1000+ Free Music", desc: "No copyright strikes. Use freely on YouTube & Reels", tag: "NO COPYRIGHT", tagColor: "#22C55E", count: "1000+", color: "#22C55E" },
  { icon: "🔊", name: "3000+ Sound Effects", desc: "Whoosh, impacts, UI sounds & cinematic SFX", tag: "SFX", tagColor: "#FF6B00", count: "3000+", color: "#FF6B00" },
  { icon: "🎥", name: "500+ Stock Videos", desc: "4K footage for any project", tag: "4K", tagColor: "#A855F7", count: "500+", color: "#A855F7" },
  { icon: "✨", name: "Motion Graphics Pack", desc: "Professional MOGRT templates for Premiere Pro", tag: "MOGRT", tagColor: "#00D4FF", count: "100+", color: "#00D4FF" },
  { icon: "🌟", name: "Fire & Spark Overlays", desc: "Dramatic fire, ember & spark video overlays", tag: "OVERLAY", tagColor: "#FF6B00", count: "50+", color: "#FF6B00" },
  { icon: "💥", name: "Glitch Effects Pack", desc: "Digital glitch, VHS & cyberpunk effects", tag: "TRENDING", tagColor: "#A855F7", count: "80+", color: "#A855F7" },
  { icon: "🌫️", name: "Smoke & Haze Overlays", desc: "Cinematic fog, smoke & atmospheric overlays", tag: "OVERLAY", tagColor: "#00D4FF", count: "60+", color: "#00D4FF" },
  { icon: "💡", name: "Light Leak & Lens Flare", desc: "Vintage film light effects & bokeh overlays", tag: "VISUAL", tagColor: "#FFAA00", count: "100+", color: "#FFAA00" },
  { icon: "📊", name: "1500+ Lower Thirds Pack", desc: "Animated name cards, titles & captions", tag: "ANIMATION", tagColor: "#00D4FF", count: "1500+", color: "#00D4FF" },
  { icon: "🎞️", name: "4K Cinematic Film Grain", desc: "Authentic film grain & texture overlays", tag: "4K", tagColor: "#A855F7", count: "4K", color: "#A855F7" },
  { icon: "🎭", name: "Animated Title Pack", desc: "Kinetic typography & title animations", tag: "TITLES", tagColor: "#FF6B00", count: "200+", color: "#FF6B00" },
  { icon: "📱", name: "YouTube Essentials Pack", desc: "Thumbnails, end screens, subscribe buttons", tag: "YOUTUBE", tagColor: "#FF0000", count: "50+", color: "#FF4444" },
  { icon: "💒", name: "Wedding Invitation Pack", desc: "Elegant templates for wedding cinematographers", tag: "WEDDING", tagColor: "#FFD700", count: "30+", color: "#FFD700" },
  { icon: "🎬", name: "100+ AE Plugins", desc: "Powerful After Effects plugins & scripts", tag: "PLUGINS", tagColor: "#A855F7", count: "100+", color: "#A855F7" },
  { icon: "🤖", name: "200+ Animated Emojis", desc: "Expressive animated emoji for reels & stories", tag: "SOCIAL", tagColor: "#FF6B00", count: "200+", color: "#FF6B00" },
  { icon: "📷", name: "Camera Rig Overlays", desc: "Professional camera frame & rig overlays", tag: "OVERLAY", tagColor: "#00D4FF", count: "40+", color: "#00D4FF" },
  { icon: "☁️", name: "Rain & Snow Overlays", desc: "Weather & seasonal atmospheric effects", tag: "WEATHER", tagColor: "#00D4FF", count: "30+", color: "#00D4FF" },
  { icon: "🎯", name: "100+ Callout Graphics", desc: "Arrow pointers, speech bubbles & callouts", tag: "GRAPHICS", tagColor: "#22C55E", count: "100+", color: "#22C55E" },
  { icon: "🖼️", name: "100+ Video Backgrounds", desc: "Abstract, cinematic & looping backgrounds", tag: "BG", tagColor: "#A855F7", count: "100+", color: "#A855F7" },
  { icon: "🏆", name: "Logo Animation Pack", desc: "Reveal animations for your brand logo", tag: "BRANDING", tagColor: "#FFAA00", count: "20+", color: "#FFAA00" },
  { icon: "📹", name: "Full Video Editing Course", desc: "Structured A-Z course from beginner to pro", tag: "🎓 BONUS", tagColor: "#22C55E", count: "A-Z", color: "#22C55E" },
  { icon: "💬", name: "Wedding Title Pack", desc: "Romantic cinematic text & title animations", tag: "WEDDING", tagColor: "#FFD700", count: "40+", color: "#FFD700" },
  { icon: "🌈", name: "Dust Particle Overlays", desc: "Floating dust, bokeh & particle effects", tag: "PARTICLES", tagColor: "#FF6B00", count: "25+", color: "#FF6B00" },
  {
    icon: "🎪",
    name: "Viral Meme Videos",
    desc: "Meme Videos for Video Editing",
    tag: "REELS",
    tagColor: "#A855F7",
    count: "50+",
    color: "#A855F7",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-16 sm:py-20 px-4 relative z-10" id="features">
      <div className="section-divider mb-16" />
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">What's Included</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Everything Inside The Bundle
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8]">
            <strong className="text-white">28 Premium Categories</strong> • <strong className="text-white">70GB+</strong> • <strong className="text-white">Instant Download</strong>
          </p>
        </div>

        {/* Grid — Tilt Cards with solid opaque backgrounds and responsive tag badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="tilt-card rounded-2xl sm:rounded-3xl p-3 sm:p-5 relative overflow-hidden cursor-default flex flex-col justify-between"
              style={{
                background: 'linear-gradient(135deg, #0f1830 0%, #0a1226 100%)',
                border: '1px solid rgba(56, 130, 200, 0.18)',
                minHeight: '190px'
              }}
            >
              <div className="hidden sm:block">
                <StarField speed={0.3} starsSmall={40} starsMedium={12} starsLarge={5} opacity={0.25} />
              </div>
              <div className="glow-line" />

              {/* Card Header & Content */}
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center relative"
                    style={{ background: `${f.color}1a`, border: `1px solid ${f.color}33` }}
                  >
                    <span className="text-xl sm:text-2xl">{f.icon}</span>
                    <div className="absolute inset-0 rounded-lg sm:rounded-xl opacity-15 blur-md" style={{ background: f.color }} />
                  </div>

                  {f.tag && (
                    <span
                      className="text-[8px] sm:text-[9px] font-black tracking-wider px-2 py-0.5 rounded-full border uppercase"
                      style={{
                        color: f.tagColor || f.color,
                        borderColor: `${f.tagColor || f.color}40`,
                        background: `${f.tagColor || f.color}15`
                      }}
                    >
                      {f.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5 leading-tight">
                  {f.name}
                </h3>
              </div>

              {/* Card Footer (Description & Count if needed) */}
              <div>
                <p className="text-[10px] sm:text-xs text-[#cbd5e1] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-14">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-cta text-sm sm:text-base font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl uppercase tracking-wide"
          >
            Get All 28 Categories — ₹199
          </a>
        </div>
      </div>
    </section>
  );
}
