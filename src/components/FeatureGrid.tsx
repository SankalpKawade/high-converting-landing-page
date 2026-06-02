import StarField from './StarField';

const CTA_URL = 'https://superprofile.bio/vp/professional-video-editing-made-simple';

const features = [
  {
    icon: "🎬",
    category: "EDITING ESSENTIALS",
    subtitle: "Create Cinematic Videos Fast",
    color: "#00D4FF", // Cyan
    items: [
      { highlight: "800+ Transitions", text: "Smooth cuts, glitch, zoom, whip-pan & more" },
      { highlight: "2000+ FX Presets", text: "One-click effects for Premiere Pro & After Effects" },
      { highlight: "200+ Cinematic LUTs", text: "Instantly upgrade your color grading" }
    ]
  },
  {
    icon: "🎵",
    category: "AUDIO & SOUND",
    subtitle: "Make Videos Feel Professional",
    color: "#A855F7", // Purple
    items: [
      { highlight: "1000+ Copyright-Free Music", text: "Use safely on YouTube & Reels" },
      { highlight: "3000+ Sound Effects", text: "Whooshes, impacts, UI & cinematic sounds" }
    ]
  },
  {
    icon: "🎥",
    category: "VISUAL ENHANCERS",
    subtitle: "Make Your Videos Stand Out",
    color: "#FF6B00", // Orange
    items: [
      { highlight: "Fire, Smoke, Light Leaks & Film Grain", text: "Overlays to instantly add texture and vibe" },
      { highlight: "Glitch, VHS & Trending Effects", text: "Complete effects packs for modern content style" },
      { highlight: "500+ 4K Stock Videos & Backgrounds", text: "Stunning backgrounds and footage ready to use" }
    ]
  },
  {
    icon: "✨",
    category: "MOTION & GRAPHICS",
    subtitle: "Hook Viewers Instantly",
    color: "#00D4FF", // Cyan
    items: [
      { highlight: "Animated Titles, Lower Thirds & Callouts", text: "Engage your viewers with professional text elements" },
      { highlight: "Motion Graphics (MOGRT) Templates", text: "Drag-and-drop animations for Premiere Pro" },
      { highlight: "Logo Animations & Social Media Elements", text: "Add branding and subscribe/follow buttons with ease" }
    ]
  },
  {
    icon: "🧠",
    category: "COMPLETE LEARNING SYSTEM",
    subtitle: "No Experience Needed",
    color: "#22C55E", // Green
    items: [
      { highlight: "Full A-Z Video Editing Course", text: "A structured course to master the craft from scratch" },
      { highlight: "Step-by-step workflow", text: "Optimized workflow designed specifically for beginners" }
    ]
  },
  {
    icon: "🎁",
    category: "BONUS: VIRAL GROWTH ASSETS",
    subtitle: "Creator Bonuses",
    color: "#fbbf24", // Gold
    items: [
      { highlight: "1500+ Viral Meme & Reels Content", text: "Ready-to-use content to kickstart your social media reach" },
      { highlight: "Instagram Growth Course", text: "Proven strategies to grow your audience and attract clients" },
      { highlight: "ChatGPT Prompts & Creator Resources", text: "Tools to automate your planning and scripting workflow" }
    ]
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-16 sm:py-20 px-4 relative z-10" id="features">
      <div className="section-divider mb-16" />
      <div className="max-w-5xl mx-auto">
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

        {/* Grid — 1 column on mobile, 2 on md, 3 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="tilt-card rounded-3xl p-6 sm:p-8 relative overflow-hidden cursor-default flex flex-col justify-between"
              style={{
                background: 'linear-gradient(135deg, #0f1830 0%, #0a1226 100%)',
                border: `1px solid ${f.color}22`,
                boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4)`,
              }}
            >
              <StarField speed={0.3} starsSmall={30} starsMedium={10} starsLarge={4} opacity={0.2} />

              {/* Top border glow corresponding to group color */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-70"
                style={{
                  background: `linear-gradient(90deg, transparent, ${f.color}, transparent)`
                }}
              />
              <div className="glow-line" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center relative shrink-0"
                      style={{ 
                        background: `${f.color}1a`, 
                        border: `1px solid ${f.color}33`,
                        boxShadow: `inset 0 0 12px ${f.color}1a, 0 0 15px ${f.color}22`
                      }}
                    >
                      <span className="text-2xl">{f.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-white leading-tight uppercase tracking-wide">
                        {f.category}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider mt-0.5" style={{ color: f.color }}>
                        {f.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-white/5 mb-5" />

                  {/* Items List */}
                  <ul className="space-y-4">
                    {f.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {/* Circle Bullet */}
                        <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 opacity-80" style={{ backgroundColor: f.color }} />
                        <p className="text-sm sm:text-base leading-relaxed text-[#cbd5e1]">
                          <strong className="text-white font-bold">{item.highlight}</strong> — {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href={CTA_URL}
            className="inline-block btn-cta text-base sm:text-lg font-black px-8 sm:px-12 py-4 sm:py-5 rounded-2xl uppercase tracking-wide"
          >
            Get All 28 Categories for Just ₹199
          </a>
        </div>
      </div>
    </section>
  );
}
