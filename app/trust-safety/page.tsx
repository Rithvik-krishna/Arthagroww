"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock, ShieldCheck, HelpCircle, Mail, AlertOctagon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";
import SmoothScroll from "@/components/SmoothScroll";
import SpotlightCard from "@/components/SpotlightCard";

const PROTOCOLS = [
  {
    icon: <Lock className="h-6 w-6 text-brand-blue" />,
    title: "SSL Secure Checkouts",
    desc: "Pro subscriptions are processed strictly by certified third-party billing providers (e.g. Razorpay, Stripe) using encrypted token channels.",
    spotlight: "rgba(28, 176, 246, 0.12)",
    border: "rgba(28, 176, 246, 0.25)",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-brand-green" />,
    title: "AI Safety Standards",
    desc: "Our customized dynamic content mentor restricts advice topics strictly to educational theory, filtering out actual specific stock suggestions.",
    spotlight: "rgba(88, 204, 2, 0.12)",
    border: "rgba(88, 204, 2, 0.25)",
  },
  {
    icon: <Eye className="h-6 w-6 text-brand-yellow" />,
    title: "Anonymized League Moderation",
    desc: "Brackets and scoreboards are monitored strictly. Profile custom names and profiles are moderated to exclude foul language or slurs.",
    spotlight: "rgba(255, 200, 0, 0.12)",
    border: "rgba(255, 200, 0, 0.25)",
  },
];

export default function TrustSafety() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SmoothScroll />
      <BackgroundGrid />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            
            {/* Page Header */}
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green/5 px-4.5 py-1.5 text-xs font-bold text-brand-green shadow-sm animate-pulse"
              >
                <Shield className="h-4 w-4 text-brand-green" />
                TRUST & ACCREDITATION CENTER
              </motion.div>
              
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark-blue dark:text-white tracking-tight leading-none">
                Safety & Security
              </h1>
              
              <p className="text-muted-foreground font-medium text-base sm:text-lg max-w-xl mx-auto">
                ArthaGroww ensures absolute data protections, secure tokenized payments, and moderated classroom spaces.
              </p>
            </div>

            {/* Core Protocols list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {PROTOCOLS.map((p, idx) => (
                <SpotlightCard
                  key={idx}
                  spotlightColor={p.spotlight}
                  borderColor={p.border}
                  className="p-6 text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 w-fit rounded-xl bg-background border border-border mb-6 shadow-sm">
                      {p.icon}
                    </div>
                    
                    <h3 className="font-heading text-base font-bold text-brand-dark-blue dark:text-white">
                      {p.title}
                    </h3>
                    
                    <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed font-semibold">
                      {p.desc}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Guidelines panel */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-6 text-left">
                <h2 className="font-heading text-2xl font-black text-brand-dark-blue dark:text-white">
                  Safe learning environment
                </h2>
                
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  We verify that students under 13 register only under authorized guardian credentials, keeping our platforms 100% compliant with children's safety parameters COPPA.
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  All automated AI interactions and mentor conversations are filtered using deep neural network safety grids to block irrelevant links, prompt hacks, or security bypass queries.
                </p>
              </div>

              <div className="md:col-span-5">
                <SpotlightCard className="p-8 shadow-sm text-left border-l-4 border-l-brand-coral" spotlightColor="rgba(255, 75, 75, 0.08)">
                  <h4 className="font-heading text-sm font-bold text-brand-dark-blue dark:text-white mb-3">
                    Abuse Reporting Desk
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-semibold mb-6">
                    If you detect profile irregularities, leaderboard abuse, or suspicious credit attempts, please immediately notify our safety monitoring desk.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-muted/40 border border-border font-bold text-xs">
                    <Mail className="h-4.5 w-4.5 text-brand-blue" />
                    <a href="mailto:contact.arthagroww@gmail.com" className="text-brand-blue hover:underline">
                      contact.arthagroww@gmail.com
                    </a>
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
