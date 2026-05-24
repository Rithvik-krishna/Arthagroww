"use client";

import { motion } from "framer-motion";
import { Shield, BookOpen, AlertTriangle, Scale, Calendar, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";
import SmoothScroll from "@/components/SmoothScroll";
import SpotlightCard from "@/components/SpotlightCard";

const SECTIONS = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "accounts", label: "Account Setup & Safety" },
  { id: "billing", label: "Subscription & Refund Rules" },
  { id: "simulations", label: "Financial Simulations Disclaimer" },
  { id: "intellectual", label: "Intellectual Property rights" },
  { id: "ai-limitations", label: "AI Content Limitations" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "jurisdiction", label: "Governing Law" },
];

export default function TermsOfService() {
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
                className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green/5 px-4.5 py-1.5 text-xs font-bold text-brand-green shadow-sm"
              >
                <Scale className="h-4 w-4 text-brand-green" />
                TERMS & PLATFORM CHARTER
              </motion.div>
              
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark-blue dark:text-white tracking-tight leading-none">
                Platform Rules & Terms
              </h1>
              
              <p className="text-muted-foreground font-medium text-base max-w-xl mx-auto">
                Review the user charter and terms of service that govern your active accounts on ArthaGroww.
              </p>

              <div className="flex items-center justify-center gap-2 text-xs font-bold text-muted-foreground/80 pt-2">
                <Calendar className="h-4 w-4" />
                <span>Last Updated: May 24, 2026</span>
              </div>
            </div>

            {/* Asymmetric Sidebar and content */}
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
                
                {/* Warning Callout */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-3xl border border-brand-coral/20 bg-brand-coral/5 flex items-start gap-4"
                >
                  <AlertTriangle className="h-6 w-6 text-brand-coral shrink-0 mt-0.5" />
                  <div className="space-y-1.5 text-left">
                    <span className="text-xs font-black text-brand-coral uppercase tracking-wider">Critical Notice</span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                      ArthaGroww is strictly an educational platform. All stock simulations, prompt guides, and crypto paths are prepared for training loops only. We do not support real cash investing or live brokerage actions.
                    </p>
                  </div>
                </motion.div>

                {/* Section 1: Acceptance */}
                <SpotlightCard id="acceptance" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    1. Acceptance of Terms
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    By configuring a profile and accessing the ArthaGroww website or companion mobile systems, you agree to comply with our Terms of Service. If you disagree, access to league brackets and courses will be locked automatically.
                  </p>
                </SpotlightCard>

                {/* Section 2: Accounts */}
                <SpotlightCard id="accounts" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    2. Account Setup & Safety
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    <p>
                      You agree to supply accurate registration configurations. You are solely responsible for protecting password safety and protecting profile multipliers from unauthorized login loops.
                    </p>
                  </div>
                </SpotlightCard>

                {/* Section 3: Billing & Refund Rules */}
                <SpotlightCard id="billing" className="p-8 shadow-sm text-left" spotlightColor="rgba(88, 204, 2, 0.1)">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    3. Subscription & Refund Rules
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    <p>
                      Access to our premium AI tutor circles and live simulator tracking requires ArthaGroww Pro membership:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Subscriptions are billed in advance on a recurring monthly or yearly cycle.</li>
                      <li>We provide a <strong className="text-slate-800 dark:text-slate-200">7-day money-back guarantee</strong>. Refund requests initiated within 7 days of initial signup are processed securely.</li>
                    </ul>
                  </div>
                </SpotlightCard>

                {/* Section 4: Financial Simulations */}
                <SpotlightCard id="simulations" className="p-8 shadow-sm text-left" spotlightColor="rgba(255, 75, 75, 0.1)">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    4. Financial Simulations Disclaimer
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    Our compound calculators and portfolio tools use historical variables and statistical math to model growth scenarios. Past performance loops do not guarantee future actual market results.
                  </p>
                </SpotlightCard>

                {/* Section 5: Intellectual Property */}
                <SpotlightCard id="intellectual" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    5. Intellectual Property Rights
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    All graphics, custom codes, character designs, streak vectors, and structural lesson matrices belong strictly to ArthaGroww EdTech Inc. and are protected by copyright rules.
                  </p>
                </SpotlightCard>

                {/* Section 6: AI Content */}
                <SpotlightCard id="ai-limitations" className="p-8 shadow-sm text-left" spotlightColor="rgba(255, 200, 0, 0.1)">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    6. AI Content Limitations
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    AI tutor recommendations and study timeline suggestions are dynamically compiled. While we optimize prompt datasets for accuracy, ArthaGroww is not liable for errors, advice deviations, or algorithmic hallucinations.
                  </p>
                </SpotlightCard>

                {/* Section 7: Liability */}
                <SpotlightCard id="liability" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    7. Limitation of Liability
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    Under no circumstances shall ArthaGroww, its founders, or affiliates be liable for financial losses, actual money decisions, or platform offline cycles resulting from terms compliance or system failures.
                  </p>
                </SpotlightCard>

                {/* Section 8: Contact */}
                <SpotlightCard id="jurisdiction" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    8. Governing Law
                  </h3>
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    <p>
                      These Terms are governed and compiled in compliance with local corporation laws and jurisdiction frameworks. If you need to contact our compliance desks:
                    </p>
                    <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-muted/50 border border-border">
                      <Mail className="h-5 w-5 text-brand-blue shrink-0" />
                      <div>
                        <div className="text-xs font-black text-brand-dark-blue dark:text-white">Compliance & Governance Desk</div>
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
