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

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white grid-bg">
      <Header />
      <main>
        {/* ATF: Hero — Dream Outcome + Social Proof + CTA */}
        <HeroSection />
        {/* Section 2: Problem-Agitate-Solve */}
        <PASSection />
        {/* Section 3: Social Proof — Wall of Love */}
        <ReviewsSection />
        {/* Section 4: Value Proposition Stack — Feature+Benefit combos */}
        <ValuePropStack />
        {/* Feature Bento Grid — All 28 Categories */}
        <FeatureGrid />
        {/* Before & After Transformation */}
        <TransformationSection />
        {/* Audience Section */}
        <AudienceSection />
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
    </div>
  );
}
