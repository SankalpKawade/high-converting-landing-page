import { useState, useEffect } from 'react';

const CTA_URL = 'https://superprofile.bio/vp/professional-video-editing-made-simple';

export default function Header() {
  const [time, setTime] = useState({ hours: 8, minutes: 59, seconds: 11 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 0; minutes = 0; seconds = 0; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#091024] transition-transform duration-300 ease-in-out ${scrolled ? '-translate-y-[50px]' : 'translate-y-0'}`}>
      {/* Countdown Timer */}
      <div
        className="w-full h-[50px] flex  items-center justify-center px-4 text-center"
        style={{
          background: 'linear-gradient(90deg, #00effbb4, #379effff, #5689ffff)',
          backgroundSize: '200% 100%',
          // animation: 'shimmer 3s linear infinite',
        }}
      >
        <p className="text-xs sm:text-sm font-bold text-[#ebf7fc] tracking-wide">
          ⚡ FLASH DEAL: FREE ₹3,696 Bonus expires in →{' '}
          <span className="font-mono inline-block min-w-[65px]">
            {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
          </span>{' '}
          ⚡
        </p>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2 bg-[#091024]/90 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-2">
          <img
            src="/images/logo2-removebg.webp"
            alt="ProDigitalFiles Logo"
            className="w-14 h-14 object-contain brightness-110 drop-shadow-[0_0_8px_rgba(0,242,255,0.65)]"
            decoding="async"
          />
          <span className="text-lg lg:text-2xl font-bold tracking-tight">
            <span className="text-white">Pro</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              DigitalFiles
            </span>
          </span>
        </div>
        {/*
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-[#cbd5e1] hover:text-[#00f2ff] transition-colors">Features</a>
          <a href="#reviews" className="text-sm text-[#cbd5e1] hover:text-[#00f2ff] transition-colors">Reviews</a>
          <a href="#pricing" className="text-sm text-[#cbd5e1] hover:text-[#00f2ff] transition-colors">Pricing</a>
          <a href="#faq" className="text-sm text-[#cbd5e1] hover:text-[#00f2ff] transition-colors">FAQ</a>
        </nav>

        <a
          href={CTA_URL}
          className="text-white text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 rounded-full transition-all transform hover:-translate-y-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)]"
        >
          Get Bundle — ₹299
        </a>
        */}
      </div>
    </header >
  );
}
