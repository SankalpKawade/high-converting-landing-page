export default function Footer() {
  return (
    <footer className="py-10 sm:py-14 px-4 border-t border-white/5 pb-28 sm:pb-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <img
            src="/images/logo2-removebg.webp"
            alt="ProDigitalFiles Logo"
            className="w-10 h-10 object-contain brightness-110 drop-shadow-[0_0_8px_rgba(0,242,255,0.65)]"
            loading="lazy"
            decoding="async"
          />
          <span className="text-lg md:text-xl font-bold tracking-tight">
            <span className="text-white">Pro</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              DigitalFiles
            </span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
          <a href="https://prodigitalfiles.com/privacy-policy/" className="text-sm text-[#94a3b8] hover:text-[#00f2ff] transition-colors">Privacy Policy</a>
          <a href="https://prodigitalfiles.com/terms-conditions/" className="text-sm text-[#94a3b8] hover:text-[#00f2ff] transition-colors">Terms & Conditions</a>
          <a href="mailto:contact.prodigitalfiles@gmail.com" className="text-sm text-[#94a3b8] hover:text-[#00f2ff] transition-colors">Contact Us</a>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-[#64748b] max-w-xl mx-auto leading-relaxed mb-4">
          This site is not affiliated with, endorsed by, or associated with Facebook™ or Facebook™ Inc. in any way. Results may vary. Earnings and income representations are aspirational statements only. All assets are for personal and commercial use as per our license terms.
        </p>

        <p className="text-xs text-[#64748b]">
          © 2026 ProDigitalFiles. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
