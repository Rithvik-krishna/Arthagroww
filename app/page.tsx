import SmoothScroll from "@/components/SmoothScroll";
import BackgroundGrid from "@/components/BackgroundGrid";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import BentoGrid from "@/components/BentoGrid";
import AppShowcase from "@/components/AppShowcase";
import WhyArthaGroww from "@/components/WhyArthaGroww";
import HowItWorks from "@/components/HowItWorks";
import Leaderboard from "@/components/Leaderboard";
import Testimonials from "@/components/Testimonials";
import ProSection from "@/components/ProSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Premium scroll smoothing script */}
      <SmoothScroll />

      {/* Trailing cursor light trail */}
      <CustomCursor />
      
      {/* Animated mesh gradient and particle background system */}
      <BackgroundGrid />

      {/* Main Core Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <TrustStats />
          <Categories />
          <Features />
          <BentoGrid />
          <AppShowcase />
          <WhyArthaGroww />
          <HowItWorks />
          <Leaderboard />
          <Testimonials />
          <ProSection />
          <FAQ />
          <FinalCTA />
        </main>
        
        <Footer />
        
        {/* Floating conversion widget for mobile visitors */}
        <MobileStickyCTA />
      </div>
    </div>
  );
}
