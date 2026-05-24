"use client";

import { motion } from "framer-motion";
import { Gamepad2, Brain, Lightbulb, Trophy, Flame, Zap, TrendingUp, Sparkles } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const FEATURES = [
  {
    icon: <Gamepad2 className="h-6 w-6 text-brand-blue" />,
    title: "Gamified Learning Loops",
    desc: "Economics and investing don't have to be dry. Earn virtual coins, unlock paths, and level up with bite-sized lessons.",
    spotlight: "rgba(28, 176, 246, 0.12)",
    border: "rgba(28, 176, 246, 0.25)",
  },
  {
    icon: <Brain className="h-6 w-6 text-brand-green" />,
    title: "AI Personalized Paths",
    desc: "Our active AI content creator studies your progress to automatically adapt roadmaps to your specific pace.",
    spotlight: "rgba(88, 204, 2, 0.12)",
    border: "rgba(88, 204, 2, 0.25)",
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-brand-yellow" />,
    title: "Daily Micro-Quizzes",
    desc: "Solidify facts and test financial concepts under 2 minutes. Instant corrective feedback makes memory recall effortless.",
    spotlight: "rgba(255, 200, 0, 0.12)",
    border: "rgba(255, 200, 0, 0.25)",
  },
  {
    icon: <Trophy className="h-6 w-6 text-brand-coral" />,
    title: "Global Leaderboards",
    desc: "Compete in weekly brackets. Climb leagues from Bronze to Diamond alongside active peer networks globally.",
    spotlight: "rgba(255, 75, 75, 0.12)",
    border: "rgba(255, 75, 75, 0.25)",
  },
  {
    icon: <Flame className="h-6 w-6 text-brand-coral fill-brand-coral" />,
    title: "Streak Reward Boosts",
    desc: "Build strong learning habits. Keep your daily streak counting to unlock up to 2.0x lesson multiplier points.",
    spotlight: "rgba(255, 75, 75, 0.12)",
    border: "rgba(255, 75, 75, 0.25)",
  },
  {
    icon: <Zap className="h-6 w-6 text-brand-yellow fill-brand-yellow" />,
    title: "XP & Level System",
    desc: "Collect XP for every successfully answered quest. Level up your profile rank to earn legendary status avatar borders.",
    spotlight: "rgba(255, 200, 0, 0.12)",
    border: "rgba(255, 200, 0, 0.25)",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-brand-green" />,
    title: "Smart Financial Sims",
    desc: "Interact with real-world compounding graphs, stock portfolio sliders, and micro trading charts risk-free.",
    spotlight: "rgba(88, 204, 2, 0.12)",
    border: "rgba(88, 204, 2, 0.25)",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-brand-blue" />,
    title: "Beginner Friendly Guides",
    desc: "Designed with zero assumption of financial literacy. Starts from general principles and builds upwards.",
    spotlight: "rgba(28, 176, 246, 0.12)",
    border: "rgba(28, 176, 246, 0.25)",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold text-brand-blue uppercase tracking-wider">
            Engine Core
          </div>
          <h2 className="font-heading mt-4 text-4xl sm:text-5xl font-black text-brand-dark-blue dark:text-white tracking-tight">
            Ecosystem features built to scale
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-medium">
            Everything required to master your capital and automate workflow.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor={feat.spotlight}
                borderColor={feat.border}
                className="p-6 h-full flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="p-3 w-fit rounded-2xl bg-background border border-border shadow-sm mb-5 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                    {feat.icon}
                  </div>
                  
                  <h3 className="font-heading text-base font-bold text-brand-dark-blue dark:text-white group-hover:text-brand-blue transition-colors duration-300">
                    {feat.title}
                  </h3>
                  
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed font-sans font-medium">
                    {feat.desc}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
