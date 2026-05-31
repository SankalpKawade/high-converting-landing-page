import { useState } from 'react';

const faqs = [
  {
    q: 'What exactly do I get in this bundle?',
    a: 'You get 70GB+ of professional video editing assets across 28 categories — including LUTs, transitions, overlays, sound effects, music, motion graphics, templates, fonts, stock footage, and much more. Plus 4 exclusive bonuses worth ₹6,499!',
  },
  {
    q: 'Which video editing software is this compatible with?',
    a: 'Our assets work with ALL major video editing software — Adobe Premiere Pro, After Effects, DaVinci Resolve, Final Cut Pro, CapCut, Filmora, and more. Most assets are universal formats (MP4, PNG, WAV, etc.) that work everywhere.',
  },
  {
    q: 'How do I access the files after purchase?',
    a: 'Immediately after payment, you\'ll receive an Access PDF with a direct Google Drive link. Simply download the files to your computer and start using them right away. It\'s instant — no waiting!',
  },
  {
    q: 'Is this really just ₹199? No hidden charges?',
    a: 'Yes! ₹199 is the complete price. One-time payment. No subscriptions, no hidden fees, no upsells. You get lifetime access to everything in the bundle plus all 4 bonuses.',
  },
  {
    q: 'Can I use these assets for client work and commercial projects?',
    a: 'Absolutely! All assets come with a commercial license. Use them for your personal projects, client work, YouTube videos, Instagram content, wedding films — anything you want.',
  },
  {
    q: 'I\'m a complete beginner. Is this for me?',
    a: 'Yes! The bundle includes a complete A-Z video editing course that teaches you from scratch. Plus, the assets are drag-and-drop — no technical skills needed. If you can open a video editor, you can use these.',
  },
  {
    q: 'What if the files don\'t work or I\'m not satisfied?',
    a: 'We have a 100% satisfaction guarantee. If you face any issues, our support team will help you immediately. We\'ve served 5,000+ happy creators with a 9.4/10 rating.',
  },
  {
    q: 'How long will this ₹199 price last?',
    a: 'This is a limited-time flash deal. The regular price is ₹3,999 and we will be increasing the price back soon. We strongly recommend you grab it now before the price goes up.',
  },
  {
    q: 'Is the payment secure?',
    a: 'Yes, 100%. We use Cosmofeed\'s secure payment gateway which supports UPI, PhonePe, Google Pay, Paytm, and all credit/debit cards. Your payment information is encrypted and safe.',
  },
  {
    q: 'Do I get updates or new assets in the future?',
    a: 'The current bundle is a one-time download with lifetime access to everything included. Any major future updates will be communicated via email.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 px-4 relative z-10" id="faq">
      <div className="section-divider mb-16" />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#00f2ff] text-sm font-bold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item rounded-xl overflow-hidden ${openIndex === i ? 'open' : ''}`}
            >
              <button
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-sm sm:text-base font-bold text-white pr-4">{faq.q}</span>
                <span
                  className="text-[#00f2ff] text-xl shrink-0 transition-transform duration-300"
                  style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)' }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? '300px' : '0px',
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
