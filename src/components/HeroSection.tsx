import { useState, useEffect, useRef, useCallback } from 'react';
import { Mail, Share, Globe } from 'lucide-react';

const CTA_URL = 'https://superprofile.bio/vp/professional-video-editing-made-simple';

const BADGE_ITEMS = [
  { text: "347 Bought in the Last 24 Hours", duration: 3000 },
  { text: "Trending — Editors & Creators", duration: 4000 },
  { text: "Trusted by 2,243+ Creators", duration: 5000 },
  { text: "Stop Searching. Start Editing.", duration: 4000 },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [time, setTime] = useState({ hours: 8, minutes: 59, seconds: 11 });

  const videoRef = useRef<HTMLVideoElement>(null);
  const animFrameRef = useRef<number>(0);
  const fadingOutRef = useRef(false);

  const pad = (n: number) => n.toString().padStart(2, '0');

  // Badge rotation timer (preserved from original)
  useEffect(() => {
    let fadeOutTimeout: NodeJS.Timeout;
    let switchTimeout: NodeJS.Timeout;

    const runTimer = (currentIndex: number) => {
      const item = BADGE_ITEMS[currentIndex];

      fadeOutTimeout = setTimeout(() => {
        setFade(false);
      }, item.duration - 300);

      switchTimeout = setTimeout(() => {
        const nextIndex = (currentIndex + 1) % BADGE_ITEMS.length;
        setIndex(nextIndex);
        setFade(true);
        runTimer(nextIndex);
      }, item.duration);
    };

    runTimer(0);

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(switchTimeout);
    };
  }, []);

  // Countdown timer (preserved from Header)
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

  // Custom JS video fade system
  const animateFade = useCallback((
    video: HTMLVideoElement,
    from: number,
    to: number,
    duration: number,
    onComplete?: () => void
  ) => {
    // Cancel any running animation
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }

    const startTime = performance.now();
    const startOpacity = from;
    const deltaOpacity = to - from;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      video.style.opacity = String(startOpacity + deltaOpacity * progress);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        animFrameRef.current = 0;
        onComplete?.();
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start with opacity 0
    video.style.opacity = '0';

    const handleCanPlay = () => {
      // Fade in from current opacity
      const currentOpacity = parseFloat(video.style.opacity) || 0;
      animateFade(video, currentOpacity, 1, 500);
    };

    const handleTimeUpdate = () => {
      if (!video.duration || isNaN(video.duration)) return;
      const timeRemaining = video.duration - video.currentTime;

      if (timeRemaining <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        const currentOpacity = parseFloat(video.style.opacity) || 1;
        animateFade(video, currentOpacity, 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      fadingOutRef.current = false;

      setTimeout(() => {
        video.currentTime = 0;
        video.play().then(() => {
          const currentOpacity = parseFloat(video.style.opacity) || 0;
          animateFade(video, currentOpacity, 1, 500);
        }).catch(() => {
          // Autoplay may be blocked
        });
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [animateFade]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col" id="hero">
      {/* Full-screen background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%]"
        style={{ opacity: 0 }}
        aria-label="Cinematic background video"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Navigation bar */}
      <nav className="relative z-20 pl-4 pr-4 sm:pl-6 sm:pr-6 py-4 sm:py-6">
        {/* Timer bar — preserved logic, updated design */}
        <div className="liquid-glass rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-center max-w-5xl mx-auto mb-3 sm:mb-4">
          <p className="text-[10px] sm:text-xs md:text-sm font-bold text-white/90 tracking-wide text-center">
            <span className={`transition-opacity duration-300 inline ${fade ? 'opacity-100' : 'opacity-0'}`}>
              {BADGE_ITEMS[index].text}
            </span>
            <span className="mx-2 sm:mx-3 text-white/40">|</span>
            ⚡ FLASH DEAL expires in{' '}
            <span className="font-mono inline-block min-w-[56px] sm:min-w-[65px] text-white">
              {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
            </span>
          </p>
        </div>

        {/* Main nav bar */}
        <div className="liquid-glass rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between max-w-5xl mx-auto">
          {/* Left side — Logo (preserved from original) */}
          <div className="flex items-center gap-2">
            <img
              src="/images/logo2-removebg.webp"
              alt="ProDigitalFiles Logo"
              className="w-9 h-9 sm:w-12 sm:h-12 object-contain brightness-110"
              decoding="async"
            />
            <span className="text-sm sm:text-lg font-bold tracking-tight">
              <span className="text-white">Pro</span>
              <span className="text-white/70">DigitalFiles</span>
            </span>
          </div>

          {/* Right side — CTA */}
          <a
            href={CTA_URL}
            className="liquid-glass rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-white text-xs sm:text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Get Bundle
          </a>
        </div>
      </nav>

      {/* Hero content area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 text-center -translate-y-[10%] sm:-translate-y-[20%]">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8 tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          <span className="block sm:whitespace-nowrap">Built for the curious</span>
        </h1>

        <div className="max-w-xl w-full space-y-4">
          <p className="text-white text-sm leading-relaxed px-4">
            Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.
          </p>

          <div className="flex justify-center">
            <a
              href={CTA_URL}
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>


    </section>
  );
}
