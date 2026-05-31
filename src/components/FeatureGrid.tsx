const CTA_URL = 'https://cosmofeed.com/bp/683b06f5a8498c001f839e1d';

const features = [
  { icon: '🎨', title: 'Color Grading LUTs', desc: '500+ cinematic LUTs for every mood and style — warm, cold, vintage, modern', accent: '#00f2ff' },
  { icon: '✨', title: 'Video Transitions', desc: '250+ smooth, glitch, zoom, and cinematic transitions for any editor', accent: '#7000ff' },
  { icon: '🎬', title: 'Premiere Pro Presets', desc: 'One-click color, motion & effect presets that save hours of work', accent: '#00f2ff' },
  { icon: '🔊', title: 'Sound Effects (SFX)', desc: '1000+ royalty-free whooshes, hits, ambience & cinematic sound FX', accent: '#7000ff' },
  { icon: '🎵', title: 'Background Music', desc: 'Copyright-free tracks — cinematic, upbeat, emotional & more genres', accent: '#00f2ff' },
  { icon: '💫', title: 'Overlays & Light Leaks', desc: 'Film burns, bokeh, light leaks, dust & grain overlays in 4K quality', accent: '#7000ff' },
  { icon: '📝', title: 'Title Templates', desc: 'Modern animated lower thirds, title cards & text animation templates', accent: '#00f2ff' },
  { icon: '🎭', title: 'Motion Graphics', desc: 'Animated elements, subscribe buttons, social media icons & callouts', accent: '#7000ff' },
  { icon: '📱', title: 'Social Media Templates', desc: 'Instagram Reels, YouTube Shorts & TikTok ready-to-use templates', accent: '#00f2ff' },
  { icon: '🎞️', title: 'Cinematic Bars & Frames', desc: 'Letterbox overlays, film frames & vintage borders for cinematic look', accent: '#7000ff' },
  { icon: '💡', title: 'After Effects Templates', desc: 'Intros, outros, logo reveals & motion graphic project files', accent: '#00f2ff' },
  { icon: '🖼️', title: 'Thumbnail Templates', desc: 'Click-worthy YouTube & social media thumbnail PSD templates', accent: '#7000ff' },
  { icon: '🎙️', title: 'Podcast Templates', desc: 'Audio visualizer templates & podcast cover art designs', accent: '#00f2ff' },
  { icon: '📊', title: 'Infographic Elements', desc: 'Animated charts, graphs & data visualization templates', accent: '#7000ff' },
  { icon: '🌈', title: 'Green Screen VFX', desc: 'Pre-keyed VFX elements — fire, smoke, explosions, particles', accent: '#00f2ff' },
  { icon: '🔤', title: 'Font Collection', desc: '200+ premium fonts for thumbnails, titles & design projects', accent: '#7000ff' },
  { icon: '📸', title: 'Stock Footage', desc: 'Royalty-free 4K stock video clips for B-roll and intros', accent: '#00f2ff' },
  { icon: '🎯', title: 'DaVinci Resolve Presets', desc: 'Color grading nodes, transitions & effects for DaVinci users', accent: '#7000ff' },
  { icon: '✏️', title: 'Graphic Design Templates', desc: 'Canva, Photoshop & Illustrator ready design templates', accent: '#00f2ff' },
  { icon: '🏷️', title: 'Logo Templates', desc: 'Editable logo designs for personal branding & client work', accent: '#7000ff' },
  { icon: '🌟', title: 'Particle Effects', desc: 'Animated particle systems — sparkles, confetti, magic dust', accent: '#00f2ff' },
  { icon: '🎥', title: 'Drone Footage LUTs', desc: 'Specialized LUTs for DJI, GoPro & aerial videography', accent: '#7000ff' },
  { icon: '💒', title: 'Wedding Templates', desc: 'Elegant save-the-date, invitation & wedding film templates', accent: '#00f2ff' },
  { icon: '📋', title: 'Project Files', desc: 'Complete editable project files to learn from professionals', accent: '#7000ff' },
  { icon: '🎓', title: 'Video Editing Course (A-Z)', desc: 'Complete beginner-to-pro video editing course included FREE', accent: '#00f2ff' },
  { icon: '🖥️', title: 'Screen Recording Pack', desc: 'Cursor effects, click animations & screen recording overlays', accent: '#7000ff' },
  { icon: '📐', title: 'Aspect Ratio Templates', desc: '16:9, 9:16, 1:1 — pre-built templates for every platform', accent: '#00f2ff' },
  { icon: '🚀', title: 'Speed Ramp Presets', desc: 'Smooth speed ramp presets for dynamic action sequences', accent: '#7000ff' },
];

export default function FeatureGrid() {
  return (
    <section className="py-16 sm:py-20 px-4 relative z-10" id="features">
      <div className="section-divider mb-16" />
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">What's Included</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Everything Inside The Bundle
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8]">
            <strong className="text-white">28 Categories</strong> • <strong className="text-white">70GB+</strong> • <strong className="text-white">Instant Download</strong>
          </p>
        </div>

        {/* Grid — Tilt Cards with solid opaque backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="tilt-card rounded-3xl p-6 sm:p-7 relative overflow-hidden cursor-default"
              style={{
                background: 'linear-gradient(135deg, #0f1830 0%, #0a1226 100%)',
                border: '1px solid rgba(56, 130, 200, 0.18)',
              }}
            >
              <div className="glow-line" />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${f.accent}1a`, border: `1px solid ${f.accent}33` }}
              >
                <span className="text-2xl">{f.icon}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">{f.title}</h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">{f.desc}</p>
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
            Get All 28 Categories — ₹199 →
          </a>
        </div>
      </div>
    </section>
  );
}
