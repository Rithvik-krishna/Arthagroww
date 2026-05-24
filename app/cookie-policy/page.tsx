"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Settings, ShieldCheck, HelpCircle, Calendar, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";
import SmoothScroll from "@/components/SmoothScroll";
import SpotlightCard from "@/components/SpotlightCard";

const SECTIONS = [
  { id: "intro", label: "About Cookies" },
  { id: "essential", label: "Essential Cookies" },
  { id: "analytics", label: "Analytics Cookies" },
  { id: "personalization", label: "Personalization Cookies" },
  { id: "marketing", label: "Marketing Cookies" },
  { id: "interactive-panel", label: "Preference Center" },
  { id: "controls", label: "Browser Controls" },
];

export default function CookiePolicy() {
  const [prefs, setPrefs] = useState({
    essential: true,
    analytics: true,
    personalization: true,
    marketing: false,
  });

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("arthagroww-cookie-consent");
    if (saved) {
      setPrefs(JSON.parse(saved));
    }
  }, []);

  const handleSavePreferences = () => {
    localStorage.setItem("arthagroww-cookie-consent", JSON.stringify(prefs));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SmoothScroll />
      <BackgroundGrid />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            
            {/* Header Hero */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4.5 py-1.5 text-xs font-bold text-brand-blue shadow-sm"
              >
                <Cookie className="h-4 w-4 text-brand-blue" />
                COOKIE USAGE CHARTER
              </motion.div>
              
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark-blue dark:text-white tracking-tight leading-none">
                Cookie Preferences
              </h1>
              
              <p className="text-muted-foreground font-medium text-base max-w-xl mx-auto">
                Customize how ArthaGroww utilizes tracking technologies to optimize your daily active multiplier habits.
              </p>

              <div className="flex items-center justify-center gap-2 text-xs font-bold text-muted-foreground/80 pt-2">
                <Calendar className="h-4 w-4" />
                <span>Last Updated: May 24, 2026</span>
              </div>
            </div>

            {/* Sidebar content layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
              
              {/* Sidebar */}
              <aside className="hidden lg:block lg:col-span-3 sticky top-24 space-y-4 max-h-[80vh] overflow-y-auto pr-4">
                <h4 className="font-heading text-xs font-black text-brand-dark-blue dark:text-white uppercase tracking-wider pl-3 mb-4">
                  Sitemap Navigation
                </h4>
                <nav className="flex flex-col gap-1.5">
                  {SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="text-xs font-bold text-muted-foreground/80 hover:text-brand-blue pl-3 py-2 border-l border-border/60 hover:border-brand-blue transition-all duration-200 block truncate"
                    >
                      {sec.label}
                    </a>
                  ))}
                </nav>
              </aside>

              {/* Main Content Body */}
              <div className="lg:col-span-9 space-y-12">
                
                {/* Intro */}
                <SpotlightCard id="intro" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    What are Cookies?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    Cookies are micro data keys stored securely in your local browser directory when loading pages. They enable the ArthaGroww servers to confirm login sessions, cache course status locally, protect active streak logs, and speed up page load speeds.
                  </p>
                </SpotlightCard>

                {/* Categories */}
                <div className="space-y-6">
                  
                  {/* Essential */}
                  <SpotlightCard id="essential" className="p-6 text-left border-l-4 border-l-brand-blue">
                    <h4 className="font-heading text-lg font-black text-brand-dark-blue dark:text-white">Essential Cookies</h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                      Absolutely required for standard login systems, secure token checkouts, database session queries, and tracking multiplier bonuses. These cannot be disabled.
                    </p>
                  </SpotlightCard>

                  {/* Analytics */}
                  <SpotlightCard id="analytics" className="p-6 text-left border-l-4 border-l-brand-green" spotlightColor="rgba(88, 204, 2, 0.08)">
                    <h4 className="font-heading text-lg font-black text-brand-dark-blue dark:text-white">Analytics Cookies</h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                      Allow us to evaluate which syllabus tracks are popular and monitor page speed indices. We gather this data in anonymized segments.
                    </p>
                  </SpotlightCard>

                  {/* Personalization */}
                  <SpotlightCard id="personalization" className="p-6 text-left border-l-4 border-l-brand-yellow" spotlightColor="rgba(255, 200, 0, 0.08)">
                    <h4 className="font-heading text-lg font-black text-brand-dark-blue dark:text-white">Personalization Cookies</h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                      Needed to adapt quiz content, prompt guidelines, and wealth graphs dynamically according to your learning habits.
                    </p>
                  </SpotlightCard>

                  {/* Marketing */}
                  <SpotlightCard id="marketing" className="p-6 text-left border-l-4 border-l-brand-coral" spotlightColor="rgba(255, 75, 75, 0.08)">
                    <h4 className="font-heading text-lg font-black text-brand-dark-blue dark:text-white">Marketing Cookies</h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                      Integrates tracking tags to evaluate marketing loops (e.g. tracking signup actions driven by social networks).
                    </p>
                  </SpotlightCard>

                </div>

                {/* Section 6: Interactive Preferences Panel */}
                <SpotlightCard id="interactive-panel" className="p-8 shadow-md text-left" spotlightColor="rgba(28, 176, 246, 0.15)">
                  <div className="flex items-center gap-2 mb-6">
                    <Settings className="h-6 w-6 text-brand-blue" />
                    <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white">
                      Interactive Preference Center
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium mb-8">
                    Customize your active cookies preference settings directly on this page. Preferences are saved immediately in your browser cache.
                  </p>

                  <div className="flex flex-col gap-4 max-w-2xl">
                    {/* Essential (Static) */}
                    <div className="flex justify-between items-center p-4.5 rounded-2xl border border-border bg-muted/20">
                      <div className="space-y-1 pr-6">
                        <div className="text-xs font-black text-brand-dark-blue dark:text-white">Essential System Cookies</div>
                        <p className="text-[10px] text-muted-foreground font-semibold">Login tokens, active multipliers, session logs. (Non-deactivatable)</p>
                      </div>
                      <span className="text-[10px] font-black text-brand-green bg-brand-green/10 border border-brand-green/20 px-2.5 py-1.5 rounded-xl">REQUIRED</span>
                    </div>

                    {/* Analytics */}
                    <div className="flex justify-between items-center p-4.5 rounded-2xl border border-border bg-card">
                      <div className="space-y-1 pr-6">
                        <div className="text-xs font-black text-brand-dark-blue dark:text-white">Analytics Cookies</div>
                        <p className="text-[10px] text-muted-foreground font-semibold">Course completion charts and system loading index speeds.</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={prefs.analytics}
                        onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                        className="h-5 w-5 rounded border-border text-brand-blue focus:ring-brand-blue accent-brand-blue cursor-pointer"
                      />
                    </div>

                    {/* Personalization */}
                    <div className="flex justify-between items-center p-4.5 rounded-2xl border border-border bg-card">
                      <div className="space-y-1 pr-6">
                        <div className="text-xs font-black text-brand-dark-blue dark:text-white">Personalization Cookies</div>
                        <p className="text-[10px] text-muted-foreground font-semibold">AI roadmap adjustments, math level adapting parameters.</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={prefs.personalization}
                        onChange={(e) => setPrefs({ ...prefs, personalization: e.target.checked })}
                        className="h-5 w-5 rounded border-border text-brand-blue focus:ring-brand-blue accent-brand-blue cursor-pointer"
                      />
                    </div>

                    {/* Marketing */}
                    <div className="flex justify-between items-center p-4.5 rounded-2xl border border-border bg-card">
                      <div className="space-y-1 pr-6">
                        <div className="text-xs font-black text-brand-dark-blue dark:text-white">Marketing Cookies</div>
                        <p className="text-[10px] text-muted-foreground font-semibold">Monitors conversion actions driven by external promotional tags.</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={prefs.marketing}
                        onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
                        className="h-5 w-5 rounded border-border text-brand-blue focus:ring-brand-blue accent-brand-blue cursor-pointer"
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-end gap-3.5">
                      <Button
                        onClick={handleSavePreferences}
                        className="bg-brand-blue text-white hover:bg-brand-blue/95 font-extrabold text-xs h-11 px-6 rounded-xl shadow-glow-blue flex items-center gap-2 transition-all duration-300"
                      >
                        <Save className="h-4.5 w-4.5" />
                        Save Preferences
                      </Button>
                      
                      <AnimatePresence>
                        {isSaved && (
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-xs font-black text-brand-green flex items-center gap-1"
                          >
                            <ShieldCheck className="h-4 w-4" />
                            Preferences Saved!
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </SpotlightCard>

                {/* Browser Controls */}
                <SpotlightCard id="controls" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    Browser Controls & Management
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    At any time, you can modify browser configurations (e.g. Chrome, Safari, Edge) to reject cookies entirely. However, doing so will clear current active streak data, force re-login actions, and lock advanced custom math modules.
                  </p>
                </SpotlightCard>

              </div>

            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
