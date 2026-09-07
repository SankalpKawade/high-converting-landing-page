import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_PROOF_NAMES } from "../lib/constants";

const TIME_AGOS = ["just now", "just now", "45s ago", "5 min ago", "20 mins ago", "30 mins ago", "1 hour ago"];

export default function SocialProofToast() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [timeAgo, setTimeAgo] = useState("just now");
    const [isDismissed, setIsDismissed] = useState(false);
    const [hasPassedFastTrack, setHasPassedFastTrack] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Track scroll position: strictly visible only after scrolling through Hero section AND Fast-Track Editing Course
    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById('hero');
            const target = document.getElementById('after-fast-track-course') || document.getElementById('fast-track-course');

            if (hero && target) {
                const heroBottom = hero.offsetTop + hero.offsetHeight;
                const isPastHero = window.scrollY >= heroBottom - 50;

                const targetRect = target.getBoundingClientRect();
                // Visible when user has scrolled through/past the Fast-Track Editing Course
                const isPastFastTrack = targetRect.top <= window.innerHeight * 0.45;

                setHasPassedFastTrack(isPastHero && isPastFastTrack);
            } else {
                setHasPassedFastTrack(window.scrollY > 1500);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // Manage popup cycling timer logic based on scroll state
    useEffect(() => {
        if (sessionStorage.getItem("social_proof_dismissed") === "true") {
            setIsDismissed(true);
            return;
        }

        if (!hasPassedFastTrack) {
            setIsVisible(false);
            if (timerRef.current) clearTimeout(timerRef.current);
            return;
        }

        // Cycle control function
        const showNextPopup = () => {
            // Pick a random index different from current one
            setCurrentIndex((prev) => {
                let next = prev;
                while (next === prev && SOCIAL_PROOF_NAMES.length > 1) {
                    next = Math.floor(Math.random() * SOCIAL_PROOF_NAMES.length);
                }
                return next;
            });

            // Pick a random time-ago text
            setTimeAgo(TIME_AGOS[Math.floor(Math.random() * TIME_AGOS.length)]);

            // Show popup
            setIsVisible(true);

            // Hide after 5.5 seconds
            timerRef.current = setTimeout(() => {
                setIsVisible(false);

                // Wait for an interval (10 to 18 seconds) before the next popup
                const nextDelay = Math.floor(Math.random() * 8000) + 10000;
                timerRef.current = setTimeout(showNextPopup, nextDelay);
            }, 5500);
        };

        // Initial delay before first popup after reaching the section
        timerRef.current = setTimeout(showNextPopup, 1500);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [hasPassedFastTrack, isDismissed]);

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true);
        sessionStorage.setItem("social_proof_dismissed", "true");
        if (timerRef.current) clearTimeout(timerRef.current);
    };

    if (isDismissed || SOCIAL_PROOF_NAMES.length === 0) return null;

    const current = SOCIAL_PROOF_NAMES[currentIndex];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 25, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 340, damping: 26 }}
                    className="fixed bottom-[74px] sm:bottom-6 left-3 sm:left-6 z-50 w-[265px] xs:w-[280px] sm:w-[330px] max-w-[calc(100vw-1.5rem)]"
                >
                    <div className="bg-white text-slate-800 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.18)] border border-slate-200/90 flex items-center gap-2 sm:gap-2.5 relative overflow-hidden">
                        {/* Product Thumbnail */}
                        <div className="w-9 h-9 sm:w-12 sm:h-12 shrink-0 bg-slate-50 rounded-lg sm:rounded-xl flex items-center justify-center border border-slate-100 overflow-hidden">
                            <img
                                src="/images/logo-removebg.webp"
                                alt="Logo"
                                className="w-full h-full object-contain p-0.5 sm:p-1"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 pr-3 sm:pr-4">
                            <p className="text-[10px] sm:text-[12px] leading-snug text-slate-700">
                                <span className="font-bold text-slate-900">{current.name}</span> from{" "}
                                <span className="font-semibold text-slate-900">{current.city}</span> bought{" "}
                                <span className="font-bold text-blue-600">ProDigitalFiles Bundle!</span>
                            </p>

                            {/* Verification Tag */}
                            <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1 text-[8px] sm:text-[9px] text-slate-400 font-medium">
                                <span className="flex items-center gap-0.5 text-emerald-600 font-semibold bg-emerald-50 px-1 sm:px-1.5 py-0.5 rounded">
                                    <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current" viewBox="0 0 20 20">
                                        <path d="M7.629 14.571L3.25 10.193l1.414-1.414 2.965 2.965 6.965-6.965 1.414 1.414z" />
                                    </svg>
                                    Verified
                                </span>
                                <span>•</span>
                                <span>{timeAgo}</span>
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={handleDismiss}
                            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600 transition-colors p-0.5 rounded-full hover:bg-slate-100 cursor-pointer"
                            aria-label="Close notification"
                        >
                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
