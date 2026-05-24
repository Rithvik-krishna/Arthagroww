"use client";

import { motion } from "framer-motion";
import { AlertOctagon, HelpCircle, TrendingDown, RefreshCcw, ShieldCheck, Mail, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";
import SmoothScroll from "@/components/SmoothScroll";
import SpotlightCard from "@/components/SpotlightCard";

const SECTIONS = [
  { id: "edu-only", label: "Educational Purposes Only" },
  { id: "no-advice", label: "Not Financial Advice" },
  { id: "no-guarantees", label: "No Investment Guarantees" },
  { id: "simulated-trading", label: "Simulated Trading Disclosures" },
  { id: "crypto-volatility", label: "Crypto Volatility Notice" },
  { id: "ai-limitations", label: "AI Mentor Limitations" },
  { id: "liability", label: "Limitation of Liability" },
];

export default function Disclaimer() {
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
                className="inline-flex items-center gap-2 rounded-full border border-brand-coral/20 bg-brand-coral/5 px-4.5 py-1.5 text-xs font-bold text-brand-coral shadow-sm animate-pulse"
              >
                <AlertOctagon className="h-4 w-4 text-brand-coral" />
                CRITICAL DISCLOSURES & RULES
              </motion.div>
              
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark-blue dark:text-white tracking-tight leading-none">
                Disclaimer
              </h1>
              
              <p className="text-muted-foreground font-medium text-base max-w-xl mx-auto">
                Please read our standard educational disclaimers regarding simulated assets, AI mentorship, and market fluctuations carefully.
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
                
                {/* Red/Yellow highlighted Warning Block */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-3xl border border-brand-yellow/30 bg-brand-yellow/5 flex items-start gap-4 shadow-glow-yellow"
                >
                  <AlertOctagon className="h-6 w-6 text-brand-yellow shrink-0 mt-0.5" />
                  <div className="space-y-1.5 text-left">
                    <span className="text-xs font-black text-brand-yellow uppercase tracking-wider">Educational Platform Declaration</span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                      All calculations, quiz details, and trading projections on ArthaGroww are compiled strictly for academic learning purposes. We are not a registered broker-dealer, financial advisor, or asset fund administrator.
                    </p>
                  </div>
                </motion.div>

                {/* Section 1: Educational Only */}
                <SpotlightCard id="edu-only" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    1. Educational Purposes Only
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    The content on the ArthaGroww website, mobile app companion, AI tutorials, and active blogs is structured strictly to explain general economic systems. Nothing compiled serves as an offering or solicitation to trade actual bonds, stocks, real estate deeds, or digital coins.
                  </p>
                </SpotlightCard>

                {/* Section 2: No Advice */}
                <SpotlightCard id="no-advice" className="p-8 shadow-sm text-left border-l-4 border-l-brand-coral" spotlightColor="rgba(255, 75, 75, 0.08)">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4 flex items-center gap-2">
                    <AlertOctagon className="h-5 w-5 text-brand-coral" />
                    2. No Professional Financial Advice
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    We do not offer custom investment consultations, portfolio planning services, or asset advice. You should consult with an accredited independent financial advisor or certified public accountant before placing real capital into actual stock markets.
                  </p>
                </SpotlightCard>

                {/* Section 3: No Guarantees */}
                <SpotlightCard id="no-guarantees" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    3. No Investment Guarantees
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    Actual financial markets are exposed to massive fluctuations. Historical return averages simulated in budgeting calculators do not assure matching real results. Capital values can depreciate heavily depending on macroeconomic trends.
                  </p>
                </SpotlightCard>

                {/* Section 4: Simulated Trading */}
                <SpotlightCard id="simulated-trading" className="p-8 shadow-sm text-left border-l-4 border-l-brand-blue" spotlightColor="rgba(28, 176, 246, 0.08)">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-brand-blue" />
                    4. Simulated Trading & Games
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    ArthaGroww interactive simulators use mock balances (virtual coins, fake dollars) and locked parameters strictly. There is no real-money exposure, no actual bank connectivity, and zero linkage to stock exchanges.
                  </p>
                </SpotlightCard>

                {/* Section 5: Crypto Volatility */}
                <SpotlightCard id="crypto-volatility" className="p-8 shadow-sm text-left border-l-4 border-l-brand-yellow" spotlightColor="rgba(255, 200, 0, 0.08)">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4 flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-brand-yellow" />
                    5. Crypto Volatility & Risk Notice
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    Cryptocurrency and Web3 modules outline highly speculative technologies. Blockchain assets and DeFi pools are exposed to extreme pricing swings, potential security hacks, and complex regulatory variations. Extreme caution is recommended.
                  </p>
                </SpotlightCard>

                {/* Section 6: AI Limitations */}
                <SpotlightCard id="ai-limitations" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    6. AI Mentor Limitations
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    AI tutor feedback is dynamically rendered by algorithms. Although we optimize prompt parameters to maintain educational accuracy, ArthaGroww assumes no responsibility for logical contradictions or inaccuracies produced by AI entities.
                  </p>
                </SpotlightCard>

                {/* Section 7: Liability */}
                <SpotlightCard id="liability" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    7. Limitation of Liability
                  </h3>
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    <p>
                      ArthaGroww, its development teams, and affiliates will assume no liability for losses or real cash damages resulting from mock simulator actions or general informational guides. For legal inquiries, please contact:
                    </p>
                    <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-muted/50 border border-border">
                      <Mail className="h-5 w-5 text-brand-blue shrink-0" />
                      <div>
                        <div className="text-xs font-black text-brand-dark-blue dark:text-white">Legal & Compliance Support</div>
                        <a href="mailto:contact.arthagroww@gmail.com" className="text-xs font-extrabold text-brand-blue hover:underline">
                          contact.arthagroww@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
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
