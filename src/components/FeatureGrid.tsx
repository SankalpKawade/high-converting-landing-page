import StarField from './StarField';

const CTA_URL = 'https://superprofile.bio/vp/professional-video-editing-made-simple';

const features = [
  {
    icon: "🎬",
    name: "800+ Transitions Pack",
    desc: "Cinematic cuts, glitch, smooth, whip-pan & more",
    tag: "MOST POPULAR",
    tagColor: "#00D4FF",
    count: "800+",
    color: "#00D4FF",
  },
  {
    icon: "⚡",
    name: "2000+ FX Presets",
    desc: "One-click effects for Premiere Pro & After Effects",
    tag: "FX",
    tagColor: "#A855F7",
    count: "2000+",
    color: "#A855F7",
  },
  {
    icon: "🎨",
    name: "200+ Cinematic LUTs",
    desc: "Hollywood-grade color grading presets",
    tag: "COLOR",
    tagColor: "#FF6B00",
    count: "200+",
    color: "#FF6B00",
  },
  {
    icon: "🔤",
    name: "10,000+ Fonts Collection",
    desc: "Premium typography for titles & lower thirds",
    tag: "MEGA PACK",
    tagColor: "#00D4FF",
    count: "10K+",
    color: "#00D4FF",
  },
  {
    icon: "🎵",
    name: "1000+ Free Music",
    desc: "No copyright strikes. Use freely on YouTube & Reels",
    tag: "NO COPYRIGHT",
    tagColor: "#22C55E",
    count: "1000+",
    color: "#22C55E",
  },
  {
    icon: "🔊",
    name: "3000+ Sound Effects",
    desc: "Whoosh, impacts, UI sounds & cinematic SFX",
    tag: "SFX",
    tagColor: "#FF6B00",
    count: "3000+",
    color: "#FF6B00",
  },
  {
    icon: "🎥",
    name: "500+ Stock Videos",
    desc: "4K footage for any project",
    tag: "4K",
    tagColor: "#A855F7",
    count: "500+",
    color: "#A855F7",
  },
  {
    icon: "✨",
    name: "Motion Graphics Pack",
    desc: "Professional MOGRT templates for Premiere Pro",
    tag: "MOGRT",
    tagColor: "#00D4FF",
    count: "100+",
    color: "#00D4FF",
  },
  {
    icon: "🌟",
    name: "Fire & Spark Overlays",
    desc: "Dramatic fire, ember & spark video overlays",
    tag: "OVERLAY",
    tagColor: "#FF6B00",
    count: "50+",
    color: "#FF6B00",
  },
  {
    icon: "💥",
    name: "Glitch Effects Pack",
    desc: "Digital glitch, VHS & cyberpunk effects",
    tag: "TRENDING",
    tagColor: "#A855F7",
    count: "80+",
    color: "#A855F7",
  },
  {
    icon: "🌫️",
    name: "Smoke & Haze Overlays",
    desc: "Cinematic fog, smoke & atmospheric overlays",
    tag: "OVERLAY",
    tagColor: "#00D4FF",
    count: "60+",
    color: "#00D4FF",
  },
  {
    icon: "💡",
    name: "Light Leak & Lens Flare",
    desc: "Vintage film light effects & bokeh overlays",
    tag: "VISUAL",
    tagColor: "#FFAA00",
    count: "100+",
    color: "#FFAA00",
  },
  {
    icon: "📊",
    name: "1500+ Lower Thirds Pack",
    desc: "Animated name cards, titles & captions",
    tag: "ANIMATION",
    tagColor: "#00D4FF",
    count: "1500+",
    color: "#00D4FF",
  },
  {
    icon: "🎞️",
    name: "4K Cinematic Film Grain",
    desc: "Authentic film grain & texture overlays",
    tag: "4K",
    tagColor: "#A855F7",
    count: "4K",
    color: "#A855F7",
  },
  {
    icon: "🎭",
    name: "Animated Title Pack",
    desc: "Kinetic typography & title animations",
    tag: "TITLES",
    tagColor: "#FF6B00",
    count: "200+",
    color: "#FF6B00",
  },
  {
    icon: "📱",
    name: "YouTube Essentials Pack",
    desc: "Thumbnails, end screens, subscribe buttons",
    tag: "YOUTUBE",
    tagColor: "#FF0000",
    count: "50+",
    color: "#FF4444",
  },
  {
    icon: "💒",
    name: "Wedding Invitation Pack",
    desc: "Elegant templates for wedding cinematographers",
    tag: "WEDDING",
    tagColor: "#FFD700",
    count: "30+",
    color: "#FFD700",
  },
  {
    icon: "🎬",
    name: "100+ AE Plugins",
    desc: "Powerful After Effects plugins & scripts",
    tag: "PLUGINS",
    tagColor: "#A855F7",
    count: "100+",
    color: "#A855F7",
  },
  {
    icon: "🤖",
    name: "200+ Animated Emojis",
    desc: "Expressive animated emoji for reels & stories",
    tag: "SOCIAL",
    tagColor: "#FF6B00",
    count: "200+",
    color: "#FF6B00",
  },
  {
    icon: "📷",
    name: "Camera Rig Overlays",
    desc: "Professional camera frame & rig overlays",
    tag: "OVERLAY",
    tagColor: "#00D4FF",
    count: "40+",
    color: "#00D4FF",
  },
  {
    icon: "☁️",
    name: "Rain & Snow Overlays",
    desc: "Weather & seasonal atmospheric effects",
    tag: "WEATHER",
    tagColor: "#00D4FF",
    count: "30+",
    color: "#00D4FF",
  },
  {
    icon: "🎯",
    name: "100+ Callout Graphics",
    desc: "Arrow pointers, speech bubbles & callouts",
    tag: "GRAPHICS",
    tagColor: "#22C55E",
    count: "100+",
    color: "#22C55E",
  },
  {
    icon: "🖼️",
    name: "100+ Video Backgrounds",
    desc: "Abstract, cinematic & looping backgrounds",
    tag: "BG",
    tagColor: "#A855F7",
    count: "100+",
    color: "#A855F7",
  },
  {
    icon: "🏆",
    name: "Logo Animation Pack",
    desc: "Reveal animations for your brand logo",
    tag: "BRANDING",
    tagColor: "#FFAA00",
    count: "20+",
    color: "#FFAA00",
  },
  {
    icon: "📹",
    name: "Full Video Editing Course",
    desc: "Structured A-Z course from beginner to pro",
    tag: "🎓 BONUS",
    tagColor: "#22C55E",
    count: "A-Z",
    color: "#22C55E",
  },
  {
    icon: "💬",
    name: "Wedding Title Pack",
    desc: "Romantic cinematic text & title animations",
    tag: "WEDDING",
    tagColor: "#FFD700",
    count: "40+",
    color: "#FFD700",
  },
  {
    icon: "🌈",
    name: "Dust Particle Overlays",
    desc: "Floating dust, bokeh & particle effects",
    tag: "PARTICLES",
    tagColor: "#FF6B00",
    count: "25+",
    color: "#FF6B00",
  },
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

const compatible = [
  { name: "Premiere Pro", icon: "Pr", color: "#9999FF" },
  { name: "After Effects", icon: "Ae", color: "#D4B4FF" },
  { name: "DaVinci Resolve", icon: "Da", color: "#FF7B72" },
  { name: "Filmora", icon: "Fi", color: "#40C4FF" },
  { name: "Final Cut Pro", icon: "Fc", color: "#FF4081" },
  { name: "CapCut", icon: "Cc", color: "#FFFFFF" },
];

export default function FeatureGrid() {
  return (
    <section className="py-12 sm:py-20 px-4 relative z-10" id="features">
      <div className="section-divider mb-16" />
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">What's Included</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 max-w-3xl mx-auto leading-tight">
            Your Complete Editing Arsenal — In One Download
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] max-w-2xl mx-auto">
            No more searching, no more subscriptions. Just import, apply, and export.
          </p>
        </div>

        {/* Grid — 2 columns on mobile, 3 on md, 4 on lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="tilt-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 relative overflow-hidden cursor-default flex flex-col justify-start"
              style={{
                background: 'linear-gradient(135deg, #0f1830 0%, #0a1226 100%)',
                border: `1px solid ${f.color}22`,
                boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4)`,
              }}
            >
              <StarField speed={0.3} starsSmall={15} starsMedium={5} starsLarge={2} opacity={0.2} />

              {/* Top border glow corresponding to group color */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-70"
                style={{
                  background: `linear-gradient(90deg, transparent, ${f.color}, transparent)`
                }}
              />
              <div className="glow-line" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center relative shrink-0"
                    style={{
                      background: `${f.color}1a`,
                      border: `1px solid ${f.color}33`,
                      boxShadow: `inset 0 0 12px ${f.color}1a, 0 0 15px ${f.color}22`
                    }}
                  >
                    <span className="text-xl sm:text-2xl">{f.icon}</span>
                  </div>
                  {/* Tag pill */}
                  {f.tag && (
                    <span className="text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider text-right" style={{ backgroundColor: `${f.tagColor}1a`, color: f.tagColor, border: `1px solid ${f.tagColor}33` }}>
                      {f.tag}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-sm sm:text-lg font-black text-white leading-tight mb-1.5 sm:mb-2">
                    {f.name}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-[#cbd5e1] leading-snug sm:leading-relaxed">
                    {f.desc}
                  </p>
                </div>
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
            All 28 Packs — Just ₹299
          </a>
        </div>
      </div>
    </section>
  );
}
