const audiences = [
  { emoji: '🎥', title: 'Video Editors', desc: 'Deliver pro-quality work faster & charge premium rates' },
  { emoji: '📱', title: 'Content Creators', desc: 'Make viral reels, shorts & YouTube videos effortlessly' },
  { emoji: '💒', title: 'Wedding & Event Videographers', desc: 'Stunning cinematic wedding films with elegant templates' },
  { emoji: '🎓', title: 'Complete Beginners', desc: 'Learn editing from scratch with the included A-Z course' },
  { emoji: '💼', title: 'Social Media Marketing', desc: 'Professional business videos with motion graphics' },
  { emoji: '🚀', title: 'Graphic Design', desc: 'Scale your designs with ready-to-use asset library' },
];

export default function AudienceSection() {
  return (
    <section className="py-16 sm:py-20 px-4 relative z-10">
      <div className="section-divider mb-16" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">Who Is This For</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Designed Especially For
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {audiences.map((a, i) => (
            <div
              key={i}
              className="tilt-card card-dark p-6 sm:p-8 text-center relative overflow-hidden cursor-default"
            >
              <div className="glow-line" />
              <div className="text-4xl sm:text-5xl mb-4">{a.emoji}</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{a.title}</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
