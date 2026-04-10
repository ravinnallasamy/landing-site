import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "@/components/sections/hero/hero-section";
import FeaturesSection from "@/components/sections/features/features-grid";
import WhyUsSection from "@/components/sections/why-us/comparison-grid";
import DashboardSection from "@/components/sections/dashboard/dashboard-preview";
import MediaSection from "@/components/sections/media/media-grid";
import ProblemSection from "@/components/sections/problem/problem-summary";
import CTASection from "@/components/sections/cta/cta-banner";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import FeaturesPage from "@/pages/Features";
import HowItWorksPage from "@/pages/HowItWorks";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import { ScrollHandler } from "@/components/layout/scroll-handler";

import AIChatSection from "@/components/sections/ai-chat/chat-ui";

function LandingPage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <DashboardSection />
      <MediaSection />
      <AIChatSection />
      <CTASection />
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollHandler />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
