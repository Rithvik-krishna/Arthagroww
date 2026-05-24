"use client";

import { motion } from "framer-motion";
import { Compass, BookOpen, Gift, ChevronRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: <Compass className="h-8 w-8 text-brand-blue" />,
    title: "Choose Your Path",
    desc: "Pick your core focus area: AI Automation, Web3, Stock Investing, or Startup Foundations. Our AI mentor sets up your baseline.",
    color: "bg-brand-blue/10 border-brand-blue/30 text-brand-blue",
    glow: "shadow-glow-blue",
  },
  {
    step: "02",
    icon: <BookOpen className="h-8 w-8 text-brand-green" />,
    title: "Bite-Sized Interactive Lessons",
    desc: "Solve gamified daily quizzes, answer multi-choice situational scenarios, and try real trading simulation challenges.",
    color: "bg-brand-green/10 border-brand-green/30 text-brand-green",
    glow: "shadow-glow-green",
  },
  {
    step: "03",
    icon: <Gift className="h-8 w-8 text-brand-yellow" />,
    title: "Earn XP, Rewards & Credentials",
    desc: "Maintain your streaks, climb the weekly champions leaderboard, earn coins, and unlock accredited skills certificates.",
    color: "bg-brand-yellow/15 border-brand-yellow/30 text-brand-yellow",
    glow: "shadow-glow-yellow",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg-soft/40 dark:bg-brand-dark-blue/40 border-y border-border/30 px-4 sm:px-6 lg:px-8">
      
      {/* Dynamic connecting line for timeline */}
      <div className="absolute top-[50%] left-[10%] right-[10%] h-1.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-yellow opacity-10 hidden lg:block z-0" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow/20 px-3 py-1 text-xs font-bold text-brand-yellow uppercase tracking-wider">
            Simple 3-Step Flow
          </div>
          <h2 className="font-heading mt-4 text-4xl sm:text-5xl font-extrabold text-brand-dark-blue dark:text-white">
            How ArthaGroww Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-medium">
            No long video courses. Build true habit consistency in less than ten minutes a day.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className={`flex flex-col items-center lg:items-start text-center lg:text-left p-8 rounded-3xl bg-card border border-border/40 hover:border-transparent transition-all duration-300 shadow-sm ${step.glow}`}
            >
              
              {/* Icon Container with Step Index */}
              <div className="relative mb-6">
                <div className={`p-5 rounded-2xl border ${step.color}`}>
                  {step.icon}
                </div>
                <span className="absolute -top-3.5 -right-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white border border-border">
                  {step.step}
                </span>
              </div>
              
              <h3 className="font-heading text-xl font-extrabold text-brand-dark-blue dark:text-white">
                {step.title}
              </h3>
              
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                {step.desc}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
