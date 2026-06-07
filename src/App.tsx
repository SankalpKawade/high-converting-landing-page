import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PASSection from './components/PASSection';
import FeatureGrid from './components/FeatureGrid';
import ValuePropStack from './components/ValuePropStack';
import TransformationSection from './components/TransformationSection';
import AudienceSection from './components/AudienceSection';
import ReviewsSection from './components/ReviewsSection';
import AccessSection from './components/AccessSection';
import BonusSection from './components/BonusSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import CloserSection from './components/CloserSection';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import SocialProofToast from './components/SocialProffPopUps';

export default function App() {
  useEffect(() => {
    const handleCTAClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Find closest anchor tag
      const anchor = target.closest('a');
      
      // Check if it's a link to the checkout page
      if (anchor && anchor.href && anchor.href.includes('superprofile.bio')) {
        // Trigger Facebook Pixel InitiateCheckout event
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'InitiateCheckout');
        }
      }
    };

    // Use capturing phase to ensure we catch the event before any stopPropagation
    document.addEventListener('click', handleCTAClick, true);
    
    return () => {
      document.removeEventListener('click', handleCTAClick, true);
    };
  }, []);
  return (
    <div className="min-h-screen bg-[#030712] text-white grid-bg">
      <Header />
      <main>
        {/* ATF: Hero — Dream Outcome + Social Proof + CTA */}
        <HeroSection />
        {/* Section 2: Problem-Agitate-Solve */}
        {/* <PASSection /> */}
        {/* Feature Bento Grid — All 28 Categories */}
        <FeatureGrid />
        {/* Section 4: Value Proposition Stack — Feature+Benefit combos */}
        {/* <ValuePropStack /> */}
        {/* Before & After Transformation */}
        <TransformationSection />
        {/* Audience Section */}
        <AudienceSection />
        {/* Section 3: Social Proof — Wall of Love */}
        <ReviewsSection />
        {/* Section 5: How It Works — 3 Steps */}
        <AccessSection />
        {/* Bonus Section */}
        <BonusSection />
        {/* Pricing CTA Box */}
        <PricingSection />
        {/* FAQ */}
        <FAQSection />
        {/* Section 6: The Closer */}
        <CloserSection />
      </main>
      <Footer />
      <StickyCTA />
      <SocialProofToast />
    </div>
  );
}
