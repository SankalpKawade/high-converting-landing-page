import { useState } from 'react';
import StarField from './StarField';

const CTA_URL = 'https://superprofile.bio/vp/professional-video-editing-made-simple';

const struggles = [
  "I want to post faceless reels but don't know where to start",
  "I waste hours looking for B-roll clips online",
  "I don't have the time or skills to edit videos from scratch",
  "I want to start a faceless page but I don't know what to post",
  "I want to sell a digital product but don't have anything to offer",
  "I want to make money online but don't want to show my face",
  "I just need a plug-and-play system to help me grow fast",
];

export default function PASSection() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-16 sm:py-20 px-4 relative z-10">
      <div className="section-divider mb-16" />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-10 sm:mb-14 leading-tight">
          What Are You Struggling<br className="hidden sm:block" /> With Right Now?
        </h2>

        <div className="text-left max-w-3xl mx-auto mb-14 px-2 sm:px-0">
          <ul className="space-y-5 sm:space-y-6">
            {struggles.map((item, i) => (
              <li
                key={i}
                className="flex items-start sm:items-center gap-4 sm:gap-6 cursor-pointer group"
                onClick={() => toggleItem(i)}
              >
                <div className={`w-7 h-7 sm:w-8 sm:h-8 mt-0.5 sm:mt-0 shrink-0 rounded-md border shadow-inner flex items-center justify-center transition-colors ${checkedItems[i]
                  ? 'bg-[#00f2ff]/20 border-[#00f2ff]/50'
                  : 'bg-[#1e293b] border-[#334155] group-hover:border-[#475569]'
                  }`}>
                  {checkedItems[i] && (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#00f2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-[#e2e8f0] text-base sm:text-lg md:text-xl font-medium leading-snug group-hover:text-white transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solve / CTA Box */}
        <div className="card-accent p-6 sm:p-10 relative overflow-hidden max-w-2xl mx-auto">
          <StarField speed={0.5} starsSmall={80} starsMedium={30} starsLarge={10} opacity={0.35} />
          <div className="glow-line" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 leading-snug">
            If You Ticked Even 2 Of These...<br className="hidden sm:block" /> Creator Vault Was Made For You
          </h3>
          <a
            href={CTA_URL}
            className="inline-block btn-cta text-base sm:text-lg font-bold px-10 py-4 rounded-xl"
          >
            Get Creator Vault Now →
          </a>
        </div>
      </div>
    </section >
  );
}
