"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Lock, Eye, Calendar, Sparkles, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";
import SmoothScroll from "@/components/SmoothScroll";
import SpotlightCard from "@/components/SpotlightCard";

const SECTIONS = [
  { id: "info-collected", label: "Information We Collect" },
  { id: "learning-progress", label: "Learning & Progress Data" },
  { id: "ai-personalization", label: "AI & Custom Roadmaps" },
  { id: "payments", label: "Payment & Security" },
  { id: "data-sharing", label: "Third-Party Sharing" },
  { id: "student-privacy", label: "Children & Student Privacy" },
  { id: "user-rights", label: "Your Rights & Controls" },
  { id: "contact", label: "Contact & Legal Team" },
];

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SmoothScroll />
      <BackgroundGrid />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            
            {/* Header Hero Section */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4.5 py-1.5 text-xs font-bold text-brand-blue shadow-sm"
              >
                <Shield className="h-4 w-4 text-brand-blue" />
                PRIVACY & DATA PROTECTION
              </motion.div>
              
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark-blue dark:text-white tracking-tight leading-none">
                Your trust matters to us.
              </h1>
              
              <p className="text-muted-foreground font-medium text-base max-w-xl mx-auto">
                Learn how ArthaGroww collects, secures, and applies your data to personalize your financial literacy journey.
              </p>

              <div className="flex items-center justify-center gap-2 text-xs font-bold text-muted-foreground/80 pt-2">
                <Calendar className="h-4 w-4" />
                <span>Last Updated: May 24, 2026</span>
              </div>
            </div>

            {/* Content layout with Desktop Sidebar navigation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
              
              {/* Sidebar: Desktop Sticky anchor list */}
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
                
                {/* Intro Callout */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-3xl border border-brand-blue/20 bg-brand-blue/5 flex items-start gap-4"
                >
                  <Eye className="h-6 w-6 text-brand-blue shrink-0 mt-0.5" />
                  <div className="space-y-1.5 text-left">
                    <span className="text-xs font-black text-brand-blue uppercase tracking-wider">Transparent Promise</span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                      We believe data privacy should be as simple as our micro-lessons. ArthaGroww never sells your metrics to credit agencies or external market brokers. All logged parameters are utilized strictly to enhance your gamified personal roadmap.
                    </p>
                  </div>
                </motion.div>

                {/* Section 1: Information Collected */}
                <SpotlightCard id="info-collected" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    1. Information We Collect
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    <p>
                      To deliver high-fidelity financial courses, we process standard indicators during your profile configuration:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong className="text-slate-800 dark:text-slate-200">Account Credentials:</strong> Full name, profile handle, email address, password matrices, and profile avatars selected during sign up.</li>
                      <li><strong className="text-slate-800 dark:text-slate-200">Device Configurations:</strong> Browser dimensions, mobile device models, operating systems, and dynamic viewport tags.</li>
                    </ul>
                  </div>
                </SpotlightCard>

                {/* Section 2: Learning & Progress Data */}
                <SpotlightCard id="learning-progress" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    2. Learning & Progress Data
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    <p>
                      To calculate active multiplier bonuses, we collect learning activity variables:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Completed syllabus chapters, answered daily multi-choice records, and trading simulator balances.</li>
                      <li>Daily habit streak logs, leaderboard brackets, and accumulated XP points.</li>
                    </ul>
                  </div>
                </SpotlightCard>

                {/* Section 3: AI & Custom Roadmaps */}
                <SpotlightCard id="ai-personalization" className="p-8 shadow-sm text-left" spotlightColor="rgba(255, 200, 0, 0.1)">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-brand-yellow fill-brand-yellow/15" />
                    3. AI & Custom Personalization
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    <p>
                      Our active AI mentor studies your quiz answers to adapt syllabus depth automatically. This personalization loop uses metadata:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Average speed in answering investing math challenges.</li>
                      <li>Selected career milestones (e.g. launching start-ups vs buying stocks).</li>
                    </ul>
                  </div>
                </SpotlightCard>

                {/* Section 4: Payment & Security */}
                <SpotlightCard id="payments" className="p-8 shadow-sm text-left" spotlightColor="rgba(88, 204, 2, 0.1)">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-brand-green" />
                    4. Payment & Security Protection
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    <p>
                      ArthaGroww Pro subscription billing is handled exclusively via encrypted external partners (e.g. Razorpay, Stripe).
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>ArthaGroww servers never read or save raw credit card numbers or banking PIN numbers.</li>
                      <li>All transmissions utilize Secure Sockets Layer (SSL) channels.</li>
                    </ul>
                  </div>
                </SpotlightCard>

                {/* Section 5: Third-Party Sharing */}
                <SpotlightCard id="data-sharing" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    5. Third-Party Sharing
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    <p>
                      We share details strictly with trusted infrastructure partners required to compile our systems (e.g. Vercel analytics hosts, dynamic database matrices, and notifications providers). We never trade metrics to marketing vendors.
                    </p>
                  </div>
                </SpotlightCard>

                {/* Section 6: Children & Student Privacy */}
                <SpotlightCard id="student-privacy" className="p-8 shadow-sm text-left" spotlightColor="rgba(255, 75, 75, 0.1)">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    6. Children & Student Privacy
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    <p>
                      ArthaGroww complies with children's safety regulations COPPA. For students under 13, parent or classroom supervisor authorization is recommended before configuring custom account logins.
                    </p>
                  </div>
                </SpotlightCard>

                {/* Section 7: Your Rights & Controls */}
                <SpotlightCard id="user-rights" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    7. Your Rights & Controls
                  </h3>
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    <p>
                      You retain absolute ownership of your profile. At any time, you may:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Download a complete export of your course completed metrics.</li>
                      <li>Initiate a full account wipe, clearing streaks and databases permanently via your profile panel.</li>
                    </ul>
                  </div>
                </SpotlightCard>

                {/* Section 8: Contact & Legal Team */}
                <SpotlightCard id="contact" className="p-8 shadow-sm text-left">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-brand-dark-blue dark:text-white mb-4">
                    8. Contact & Legal Team
                  </h3>
                  <div className="space-y-6 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    <p>
                      If you have questions regarding data storage channels or data deletion, reach out to our team:
                    </p>
                    <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-muted/50 border border-border">
                      <Mail className="h-5 w-5 text-brand-blue shrink-0" />
                      <div>
                        <div className="text-xs font-black text-brand-dark-blue dark:text-white">Legal & Compliance Officer</div>
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
