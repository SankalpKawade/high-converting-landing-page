import StarField from './StarField';

const props = [
  {
    headline: '200+ Cinematic LUTs for Hollywood-Level Color Grading',
    body: 'Transform flat, boring footage into cinematic masterpieces with one click. Warm tones, cold tones, vintage film looks, modern styles — every mood covered.',
    bullets: ['Works with ANY camera footage', 'Compatible with Premiere, Resolve, FCPX', 'Instant drag-and-drop application'],
    emoji: '🎨',
    accent: '#00f2ff',
  },
  {
    headline: '800+ Seamless Transitions to Keep Viewers Watching',
    body: 'Smooth zooms, glitch cuts, light leak wipes, cinematic punches — transitions that make your audience forget to scroll away.',
    bullets: ['Smooth, glitch, zoom, warp styles', 'No plugins required', 'Works at any resolution & frame rate'],
    emoji: '✨',
    accent: '#7000ff',
  },
  {
    headline: '1000+ Sound Effects for Professional Audio Design',
    body: 'Whooshes, hits, risers, ambience, transitions — every sound you need to make your videos feel immersive and professional.',
    bullets: ['Royalty-free for commercial use', 'High-quality WAV format', 'Organized by category for quick access'],
    emoji: '🔊',
    accent: '#00f2ff',
  },
  {
    headline: 'Complete A-Z Course to Master Editing from Scratch',
    body: "Whether you're a total beginner or want to level up, this included course takes you from zero to professional editor — step by step.",
    bullets: ['Beginner-friendly, no experience needed', 'Covers Premiere Pro & mobile editors', 'Real project-based learning'],
    emoji: '🎓',
    accent: '#7000ff',
  },
  {
    headline: 'Motion Graphics & Templates for Viral Social Content',
    body: 'Subscribe buttons, animated titles, social media templates — everything you need to create scroll-stopping content that gets engagement.',
    bullets: ['Instagram, YouTube, TikTok ready', 'Animated lower thirds & callouts', 'Editable in any major editor'],
    emoji: '📱',
    accent: '#00f2ff',
  },
  {
    headline: '4K Overlays & Film Grains for Cinematic Production Value',
    body: 'Film burns, light leaks, bokeh, particles, green screen VFX — add that premium cinematic polish that separates amateurs from professionals.',
    bullets: ['Pre-keyed for instant use', '4K resolution quality', 'Film grain, dust & vintage textures'],
    emoji: '🎬',
    accent: '#7000ff',
  },
];

export default function ValuePropStack() {
  return (
    <section className="py-16 sm:py-20 px-4 relative z-10">
      <div className="section-divider mb-16" />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">Why This Bundle</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            What Makes This Different
          </h2>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {props.map((p, i) => (
            <div
              key={i}
              className={`card-accent p-5 sm:p-7 relative overflow-hidden`}
            >
              <StarField speed={0.4} starsSmall={60} starsMedium={20} starsLarge={8} opacity={0.3} />
              <div className="glow-line" />
              <div className={`flex flex-col ${i % 2 === 1 ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-5 items-center`}>
                {/* Icon */}
                <div className="sm:w-1/3 flex items-center justify-center">
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${p.accent}1a, #0a1226)`,
                      border: `1px solid ${p.accent}40`,
                    }}
                  >
                    <span className="text-4xl sm:text-5xl">{p.emoji}</span>
                  </div>
                </div>

                {/* Text */}
                <div className="sm:w-2/3 w-full text-left sm:text-left">
                  <h3 className="text-lg sm:text-xl font-black text-white mb-2 leading-tight">
                    {p.headline}
                  </h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed mb-3">
                    {p.body}
                  </p>
                  <ul className="space-y-1.5">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <span style={{ color: p.accent }} className="font-bold text-sm">✓</span>
                        <span className="text-[#cbd5e1]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
