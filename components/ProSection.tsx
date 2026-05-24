"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Trophy, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SpotlightCard from "./SpotlightCard";

const PRO_FEATURES = [
  "Advanced Investment Portfolio trackers",
  "1-on-1 Personalized AI Financial Mentor",
  "Exclusive Live Stock & Crypto trading sims",
  "Accredited Financial Skills Certificates",
  "Ad-Free Focused Micro-learning Loops",
  "Access to Premium Active Investor Circle Channels",
];

export default function ProSection() {
  return (
    <section id="pro" className="py-28 relative overflow-hidden bg-brand-dark-blue text-white px-4 sm:px-6 lg:px-8">
      
      {/* Dynamic background grid overlay for fintech aesthetic */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none z-0" 
      />

      {/* Luxury ambient spot spotlights */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-blue/10 blur-[130px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-green/8 blur-[130px] rounded-full z-0 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Narrative Pitch */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 px-4 py-1.5 text-xs font-black text-brand-yellow uppercase tracking-wider"
            >
              <Sparkles className="h-3.5 w-3.5 fill-brand-yellow animate-pulse" />
              UPGRADE TO EXCLUSIVE
            </motion.div>
            
            <h2 className="font-heading text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Unlock the complete ArthaGroww Pro experience
            </h2>
            
            <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed">
              Gain professional financial skills, advanced portfolio trackers with live feeds, ad-free focus slots, and network with active startup builders.
            </p>

            <div className="flex flex-col gap-4 text-left max-w-lg mx-auto lg:mx-0 pt-4">
              {PRO_FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3.5">
                  <div className="h-5.5 w-5.5 rounded-full bg-brand-green/20 border border-brand-green/45 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-brand-green font-black" />
                  </div>
                  <span className="text-sm font-semibold text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Luxury Yellow Spotlight Subscription Card */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[430px]"
            >
              <SpotlightCard
                spotlightColor="rgba(255, 200, 0, 0.14)"
                borderColor="rgba(255, 200, 0, 0.35)"
                className="p-8 shadow-2xl relative overflow-hidden bg-slate-950/60 border-white/10"
              >
                {/* Best Value corner tag */}
                <div className="absolute top-0 right-0 bg-brand-yellow text-slate-950 font-black text-[10px] px-5 py-2.5 rounded-bl-3xl tracking-wider uppercase flex items-center gap-1">
                  <Trophy className="h-3.5 w-3.5 fill-slate-950" />
                  Best Value
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <Zap className="h-6 w-6 text-brand-yellow fill-brand-yellow" />
                  <span className="font-heading text-xl font-black text-white">ArthaGroww Pro</span>
                </div>

                {/* Plan selections */}
                <div className="space-y-4 mb-8">
                  {/* Monthly */}
                  <div className="p-4.5 rounded-2xl border border-white/5 bg-white/3 flex justify-between items-center opacity-65 hover:opacity-90 transition-opacity duration-200 cursor-pointer">
                    <div>
                      <div className="text-xs font-bold text-slate-400">Monthly Plan</div>
                      <div className="text-lg font-black text-white mt-0.5">₹99 <span className="text-xs text-slate-400 font-medium">/ month</span></div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">Cancel anytime</span>
                  </div>

                  {/* Yearly */}
                  <div className="p-5.5 rounded-2xl border-2 border-brand-yellow bg-brand-yellow/5 flex justify-between items-center cursor-pointer shadow-glow-yellow">
                    <div>
                      <div className="text-xs font-black text-brand-yellow">Yearly Membership</div>
                      <div className="text-2xl font-black text-white mt-1">₹699 <span className="text-xs text-slate-300 font-semibold">/ year</span></div>
                    </div>
                    <span className="text-[10px] font-black text-brand-yellow bg-brand-yellow/15 border border-brand-yellow/30 px-3.5 py-1.5 rounded-xl uppercase tracking-wider">
                      Save 40%
                    </span>
                  </div>
                </div>

                {/* Secure button */}
                <div className="space-y-4">
                  <Button className="w-full h-14 bg-brand-yellow text-slate-950 hover:bg-brand-yellow/95 font-black text-base rounded-2xl shadow-glow-yellow transition-all duration-300 uppercase tracking-wider">
                    Unlock Pro Features
                  </Button>
                  
                  <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 mt-2">
                    <ShieldCheck className="h-4.5 w-4.5 text-brand-green" />
                    <span>Secure Checkout • 7-Day Refund Guarantee</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
