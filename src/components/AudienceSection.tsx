const audiences = [
  'Content Creators',
  'Instagram Reel Makers',
  'Wedding Filmmakers',
  'Youtubers',
  'College Students',
  'Complete Beginners',
];

export default function AudienceSection() {
  return (
    <section className="py-16 sm:py-20 px-4 relative z-10">
      <div className="section-divider mb-16" />
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Especially designed for:
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {audiences.map((title, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-[#d10917] to-[#c6a1e6] rounded-xl py-3.5 sm:py-4 px-6 text-center text-white font-extrabold tracking-wider text-sm sm:text-base md:text-lg shadow-lg hover:scale-[1.02] hover:brightness-110 transition-all duration-300 uppercase cursor-default"
            >
              {title}
            </div>
          ))}
        </div>

        {/* Bottom Centered Row */}
        {/*
        <div className="mt-4 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-[#d10917] to-[#c6a1e6] rounded-xl py-3.5 sm:py-4 px-6 text-center text-white font-extrabold tracking-wider text-sm sm:text-base md:text-lg shadow-lg hover:scale-[1.02] hover:brightness-110 transition-all duration-300 uppercase cursor-default">
            And everyone who's interested
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
