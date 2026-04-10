import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ScrollHandler } from "@/components/layout/scroll-handler";

// Lazy Loaded Sections
const HeroSection = React.lazy(() => import("@/components/sections/hero/hero-section"));
const DashboardSection = React.lazy(() => import("@/components/sections/dashboard/dashboard-preview"));
const MediaSection = React.lazy(() => import("@/components/sections/media/media-grid"));
const ProblemSection = React.lazy(() => import("@/components/sections/problem/problem-summary"));
const CTASection = React.lazy(() => import("@/components/sections/cta/cta-banner"));
const AIChatSection = React.lazy(() => import("@/components/sections/ai-chat/chat-ui"));

// Lazy Loaded Pages
const PrivacyPolicy = React.lazy(() => import("@/pages/privacy-policy"));
const TermsAndConditions = React.lazy(() => import("@/pages/terms-and-conditions"));
const FeaturesPage = React.lazy(() => import("@/pages/features"));
const HowItWorksPage = React.lazy(() => import("@/pages/how-it-works"));
const AboutPage = React.lazy(() => import("@/pages/about"));
const ContactPage = React.lazy(() => import("@/pages/contact"));

const SectionFallback = () => (
  <div className="w-full h-[50vh] flex items-center justify-center bg-black">
    <div className="w-8 h-8 rounded-full border-2 border-green-500/20 border-t-green-500 animate-spin" />
  </div>
);

const PageFallback = () => (
  <div className="w-full min-h-screen flex items-center justify-center bg-black pt-20">
    <div className="w-8 h-8 rounded-full border-2 border-green-500/20 border-t-green-500 animate-spin" />
  </div>
);

function LandingPage() {
  return (
    <main>
      <Suspense fallback={<SectionFallback />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ProblemSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <DashboardSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <MediaSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <AIChatSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollHandler />
      <Navbar />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
