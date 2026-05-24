"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Flame, MessageCircle, Sparkles, TrendingUp } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function TrustStats() {
  return (
    <section className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        
        {/* Asymmetric grid break layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Narrative statement (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10 rounded-[32px] border border-border/40 bg-card/60 backdrop-blur-xl shadow-xl relative overflow-hidden"
          >
            {/* Spotlight bg */}
            <div className="absolute top-[-30px] left-[-30px] w-64 h-64 bg-brand-blue/10 blur-[80px] rounded-full" />
            
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-brand-blue/10 text-brand-blue px-3.5 py-1.5 text-xs font-bold border border-brand-blue/20">
                <Sparkles className="h-3.5 w-3.5 fill-brand-blue" />
                RAPIDLY EXPANDING NETWORK
              </div>
              
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-brand-dark-blue dark:text-white leading-tight">
                Empowering the next generation of capital allocators
              </h2>
              
              <p className="text-muted-foreground font-medium text-sm md:text-base leading-relaxed">
                Traditional education skips money intelligence. ArthaGroww closes the wealth literacy gap, gamifying stock markets, AI compounding, and corporate scaling in under ten minutes a day.
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-border/50 flex items-center gap-4 relative z-10">
              <div className="h-10 w-10 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-brand-green" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">12% Average simulator yields</div>
                <div className="text-[10px] text-muted-foreground font-semibold">Beating standard checking yields by 10x</div>
              </div>
            </div>
          </motion.div>

          {/* Right panel: Asymmetric stats blocks (lg:col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Stat 1: Students learning (span 2) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="sm:col-span-2"
            >
              <SpotlightCard 
                spotlightColor="rgba(28, 176, 246, 0.15)"
                borderColor="rgba(28, 176, 246, 0.3)"
                className="p-8 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
                  <div className="space-y-4 text-center sm:text-left">
                    <div className="inline-flex p-3 rounded-2xl bg-brand-blue/10 border border-brand-blue/20">
                      <Users className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <div className="font-heading text-4xl sm:text-5xl font-black text-brand-dark-blue dark:text-white leading-none">
                        150,000+
                      </div>
                      <div className="mt-2 font-heading text-base font-extrabold text-slate-800 dark:text-slate-200">
                        Active Student Builders
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground font-medium">
                        Building long-term wealth, investing habits, and tech literacy.
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative chart inside the card */}
                  <div className="w-full sm:w-[180px] bg-muted/30 border border-border/40 p-4 rounded-2xl flex flex-col justify-end h-28 relative">
                    <div className="flex items-end justify-between h-full gap-2 relative z-10">
                      <motion.div initial={{ height: 0 }} whileInView={{ height: "40%" }} viewport={{ once: true }} className="w-full bg-brand-blue/40 rounded-t-md" />
                      <motion.div initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }} className="w-full bg-brand-blue/60 rounded-t-md" />
                      <motion.div initial={{ height: 0 }} whileInView={{ height: "75%" }} viewport={{ once: true }} className="w-full bg-brand-blue/80 rounded-t-md" />
                      <motion.div initial={{ height: 0 }} whileInView={{ height: "95%" }} viewport={{ once: true }} className="w-full bg-brand-blue rounded-t-md shadow-glow-blue" />
                    </div>
                    <span className="text-[9px] font-extrabold text-brand-blue text-center mt-2">Active Growth +34% MoM</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Stat 2: Lessons Completed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <SpotlightCard 
                spotlightColor="rgba(88, 204, 2, 0.12)"
                borderColor="rgba(88, 204, 2, 0.25)"
                className="p-6 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-2xl bg-brand-green/10 border border-brand-green/20 mb-6">
                    <BookOpen className="h-6 w-6 text-brand-green" />
                  </div>
                  <div className="font-heading text-3xl font-extrabold text-brand-dark-blue dark:text-white leading-none">
                    3.2 Million+
                  </div>
                  <h3 className="mt-3 font-heading text-sm font-bold text-slate-800 dark:text-slate-200">
                    Bite-Sized Quizzes Done
                  </h3>
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-medium">
                  Proven memory retention metrics through interactive loop modules.
                </p>
              </SpotlightCard>
            </motion.div>

            {/* Stat 3: Daily Streaks */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SpotlightCard 
                spotlightColor="rgba(255, 75, 75, 0.12)"
                borderColor="rgba(255, 75, 75, 0.25)"
                className="p-6 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-2xl bg-brand-coral/10 border border-brand-coral/20 mb-6">
                    <Flame className="h-6 w-6 text-brand-coral fill-brand-coral" />
                  </div>
                  <div className="font-heading text-3xl font-extrabold text-brand-dark-blue dark:text-white leading-none">
                    94%
                  </div>
                  <h3 className="mt-3 font-heading text-sm font-bold text-slate-800 dark:text-slate-200">
                    Habit Streak Success
                  </h3>
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-medium">
                  Dynamic multiplier locks driving consistency metrics.
                </p>
              </SpotlightCard>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
