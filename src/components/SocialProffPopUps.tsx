import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_PROOF_NAMES } from "../lib/constants";

const TIME_AGOS = ["just now", "just now", "45s ago", "5 min ago", "20 mins ago", "30 mins ago", "1 hour ago"];

export default function SocialProofToast() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [timeAgo, setTimeAgo] = useState("just now");
    const [isDismissed, setIsDismissed] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Check if dismissed in this session
        if (sessionStorage.getItem("social_proof_dismissed") === "true") {
            setIsDismissed(true);
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

            // Hide after 6 seconds
            timerRef.current = setTimeout(() => {
                setIsVisible(false);

                // Wait for a random interval (10 to 18 seconds) before the next popup to not look robotic
                const nextDelay = Math.floor(Math.random() * 8000) + 10000;
                timerRef.current = setTimeout(showNextPopup, nextDelay);
            }, 6000);
        };

        // Initial delay before first popup
        timerRef.current = setTimeout(showNextPopup, 4000);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

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
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="fixed bottom-[76px] left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 z-50 max-w-[340px] sm:max-w-[380px] w-[calc(100%-2rem)] sm:w-auto"
                >
                    <div className="bg-white text-slate-800 p-3 sm:p-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-slate-200/80 flex items-center gap-2.5 relative overflow-hidden">
                        {/* Product Thumbnail */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 overflow-hidden">
                            <img
                                src="/images/logo-removebg.webp"
                                alt="Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 pr-5">
                            <p className="text-[12px] sm:text-[13px] leading-snug text-slate-700">
                                <span className="font-bold text-slate-900">{current.name}</span> from{" "}
                                <span className="font-semibold text-slate-900">{current.city}</span> has just purchased{" "}
                                <span className="font-bold text-blue-600 block sm:inline">ProDigitalFiles Video Editing Assets!</span>
                            </p>

                            {/* Verification Tag */}
                            <div className="flex items-center gap-1.5 mt-1.5 text-[10px] text-slate-400 font-medium">
                                <span className="flex items-center gap-0.5 text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                                    <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
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
                            className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-600 transition-colors p-0.5 rounded-full hover:bg-slate-100"
                            aria-label="Close notification"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

