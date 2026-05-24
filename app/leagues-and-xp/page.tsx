"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Zap, Shield, Sparkles, ChevronRight, Award, Flame, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";
import SmoothScroll from "@/components/SmoothScroll";
import SpotlightCard from "@/components/SpotlightCard";
import { Button } from "@/components/ui/button";

const LEAGUES = [
  {
    name: "Bronze League",
    color: "text-[#CD7F32]",
    bgColor: "bg-[#CD7F32]/10",
    borderColor: "border-[#CD7F32]/30",
    shadow: "shadow-[0_0_20px_rgba(205,127,50,0.15)]",
    minXp: "0 XP",
    multiplier: "1.0x XP Boost",
    badge: "🥉",
    description: "The starting point. Welcome to the arena! Complete your first 3 quizzes to graduate.",
    users: [
      { rank: 1, name: "Aarav Sharma", xp: 450, avatar: "👨‍💻", current: false },
      { rank: 2, name: "Diya Patel", xp: 380, avatar: "👩‍🎨", current: false },
      { rank: 3, name: "Kabir Roy", xp: 320, avatar: "🎮", current: false },
      { rank: 4, name: "You", xp: 120, avatar: "🔥", current: true },
      { rank: 5, name: "Ananya Sen", xp: 90, avatar: "🌱", current: false },
    ],
  },
  {
    name: "Silver League",
    color: "text-slate-400",
    bgColor: "bg-slate-400/10",
    borderColor: "border-slate-400/30",
    shadow: "shadow-[0_0_20px_rgba(148,163,184,0.15)]",
    minXp: "500 XP",
    multiplier: "1.2x XP Boost",
    badge: "🥈",
    description: "Things are warming up. Silver division players are highly active daily quiz solvers.",
    users: [
      { rank: 1, name: "Tanya Kapoor", xp: 1250, avatar: "🦄", current: false },
      { rank: 2, name: "Rishi Verma", xp: 1100, avatar: "🚀", current: false },
      { rank: 3, name: "Sneha Nair", xp: 950, avatar: "🐱", current: false },
      { rank: 4, name: "You", xp: 820, avatar: "🔥", current: true },
      { rank: 5, name: "Dev Shah", xp: 750, avatar: "🍕", current: false },
    ],
  },
  {
    name: "Gold League",
    color: "text-brand-yellow",
    bgColor: "bg-brand-yellow/10",
    borderColor: "border-brand-yellow/30",
    shadow: "shadow-[0_0_20px_rgba(255,200,0,0.15)]",
    minXp: "1,500 XP",
    multiplier: "1.5x XP Boost",
    badge: "🥇",
    description: "The elite tier. High consistency and accurate answers are required to survive here.",
    users: [
      { rank: 1, name: "Vikram Malhotra", xp: 3200, avatar: "🦊", current: false },
      { rank: 2, name: "You", xp: 2850, avatar: "🔥", current: true },
      { rank: 3, name: "Priya Rao", xp: 2700, avatar: "👑", current: false },
      { rank: 4, name: "Amit Joshi", xp: 2400, avatar: "🦉", current: false },
      { rank: 5, name: "Nisha Gupta", xp: 2100, avatar: "🍀", current: false },
    ],
  },
  {
    name: "Ruby League",
    color: "text-brand-coral",
    bgColor: "bg-brand-coral/10",
    borderColor: "border-brand-coral/30",
    shadow: "shadow-[0_0_20px_rgba(255,75,75,0.15)]",
    minXp: "4,000 XP",
    multiplier: "1.8x XP Boost",
    badge: "💎",
    description: "A league of extreme focus. Ruby competitors are ready for seed-funding level challenges.",
    users: [
      { rank: 1, name: "Rohan Das", xp: 6200, avatar: "🦁", current: false },
      { rank: 2, name: "Ishaan Mehta", xp: 5800, avatar: "⚡", current: false },
      { rank: 3, name: "Kriti Saxena", xp: 5400, avatar: "🌺", current: false },
      { rank: 4, name: "Zoya Khan", xp: 5100, avatar: "🎸", current: false },
      { rank: 5, name: "Siddharth", xp: 4800, avatar: "🤖", current: false },
    ],
  },
  {
    name: "Diamond League",
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10",
    borderColor: "border-brand-blue/30",
    shadow: "shadow-[0_0_25px_rgba(28,176,246,0.25)]",
    minXp: "8,000 XP",
    multiplier: "2.5x XP Boost + Pro Perks",
    badge: "👑",
    description: "The ultimate peak. Diamond tier legends get listed directly in startup recruiters' sights.",
    users: [
      { rank: 1, name: "Arjun Rivera", xp: 12500, avatar: "🔥", current: true },
      { rank: 2, name: "Jessica Carter", xp: 11900, avatar: "🌟", current: false },
      { rank: 3, name: "Sanjay Singhal", xp: 11200, avatar: "📈", current: false },
      { rank: 4, name: "Elena Petrova", xp: 10400, avatar: "🎨", current: false },
      { rank: 5, name: "Marcus Aurelius", xp: 9800, avatar: "🏛️", current: false },
    ],
  },
];

const REWARDS = [
  {
    icon: <Flame className="h-6 w-6 text-brand-coral" />,
    title: "Streak Multipliers",
    desc: "Maintain your daily streak to receive daily XP rewards that stack up to 2x global boosts.",
  },
  {
    icon: <Star className="h-6 w-6 text-brand-yellow" />,
    title: "Perfect Score Bonuses",
    desc: "Solve a daily quiz with 100% accuracy to trigger instant double-XP payouts.",
  },
  {
    icon: <Award className="h-6 w-6 text-brand-green" />,
    title: "Recruiting Priority",
    desc: "Diamond League players get premium talent profiles highlighted directly to VC-funded startups.",
  },
];

export default function LeaguesAndXp() {
  const [activeLeagueIdx, setActiveLeagueIdx] = useState(4); // Default to Diamond
  const activeLeague = LEAGUES[activeLeagueIdx];

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SmoothScroll />
      <BackgroundGrid />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            
            {/* Page Hero */}
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/20 bg-brand-yellow/5 px-4.5 py-1.5 text-xs font-bold text-brand-yellow shadow-sm"
              >
                <Trophy className="h-4 w-4 text-brand-yellow" />
                GAMIFIED LEARNING ARENA
              </motion.div>

              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark-blue dark:text-white tracking-tight leading-none">
                Climb the Leagues.<br />
                <span className="text-brand-blue">Own your Growth.</span>
              </h1>

              <p className="text-muted-foreground font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Earn XP, secure streaks, climb weekly global leaderboards, and turn boring financial lessons into an interactive battle pass.
              </p>
            </div>

            {/* Interactive Leaderboard Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
              
              {/* League Selectors & Description */}
              <div className="lg:col-span-5 space-y-6">
                <h2 className="font-heading text-2xl sm:text-3xl font-black text-brand-dark-blue dark:text-white tracking-tight">
                  Choose Your Division
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed">
                  Compete against real students and professionals globally. Top 3 spots at the end of each week promote to the next tier, while the bottom spots risk relegation.
                </p>

                {/* League Selector Tabs */}
                <div className="flex flex-col gap-3">
                  {LEAGUES.map((league, idx) => (
                    <button
                      key={league.name}
                      onClick={() => setActiveLeagueIdx(idx)}
                      className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 ${
                        activeLeagueIdx === idx
                          ? `${league.bgColor} ${league.borderColor} ${league.shadow} border-l-4 border-l-brand-blue`
                          : "border-border bg-card/60 hover:bg-card hover:border-border/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{league.badge}</span>
                        <div>
                          <h4 className={`font-heading text-sm sm:text-base font-extrabold ${league.color}`}>
                            {league.name}
                          </h4>
                          <span className="text-xs font-semibold text-muted-foreground">
                            Required: {league.minXp}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-muted text-muted-foreground">
                          {league.multiplier}
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Weekly Leaderboard View */}
              <div className="lg:col-span-7">
                <SpotlightCard
                  spotlightColor="rgba(28, 176, 246, 0.08)"
                  className="p-6 md:p-8 rounded-3xl border border-border bg-card shadow-lg text-left relative overflow-hidden"
                >
                  {/* Decorative Glowing Sphere */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl -z-10" />

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border/40 pb-6 mb-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{activeLeague.badge}</span>
                        <h3 className={`font-heading text-lg sm:text-xl font-black ${activeLeague.color}`}>
                          {activeLeague.name} Leaderboard
                        </h3>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground font-semibold">
                        Weekly ending in: <span className="text-brand-coral font-bold">2 days, 4 hours</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-brand-green/10 border border-brand-green/20 text-brand-green font-bold text-xs">
                      <Zap className="h-3.5 w-3.5 fill-brand-green" />
                      Active Division
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-6 leading-relaxed bg-muted/40 p-4 rounded-xl border border-border/60">
                    {activeLeague.description}
                  </p>

                  {/* Leaderboard Table */}
                  <div className="space-y-3">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeLeague.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2.5"
                      >
                        {activeLeague.users.map((user) => (
                          <div
                            key={user.name}
                            className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                              user.current
                                ? "border-brand-blue/40 bg-brand-blue/5 shadow-[0_0_15px_rgba(28,176,246,0.06)]"
                                : "border-border/60 bg-muted/10"
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <span
                                className={`w-6 h-6 flex items-center justify-center font-heading text-sm font-black rounded-lg ${
                                  user.rank === 1
                                    ? "bg-brand-yellow/20 text-brand-yellow-dark font-extrabold"
                                    : user.rank === 2
                                    ? "bg-slate-300/30 text-slate-500"
                                    : user.rank === 3
                                    ? "bg-amber-700/10 text-amber-800"
                                    : "text-muted-foreground"
                                }`}
                              >
                                #{user.rank}
                              </span>

                              <span className="text-xl w-8 h-8 flex items-center justify-center bg-card rounded-lg border border-border/40 shadow-sm">
                                {user.avatar}
                              </span>

                              <div>
                                <h5 className={`font-sans text-sm font-bold ${user.current ? "text-brand-blue" : "text-foreground"}`}>
                                  {user.name} {user.current && " (You)"}
                                </h5>
                                {user.rank <= 3 && (
                                  <span className="text-[10px] font-bold text-brand-green uppercase tracking-wider">
                                    Promoting Area
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-1">
                              <span className="font-heading text-sm font-black text-brand-dark-blue dark:text-white">
                                {user.xp.toLocaleString()}
                              </span>
                              <span className="text-xs font-bold text-muted-foreground">XP</span>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </SpotlightCard>
              </div>

            </div>

            {/* Achievement Rewards system section */}
            <div className="border-t border-border/40 pt-20 mb-24">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                <h2 className="font-heading text-3xl font-black text-brand-dark-blue dark:text-white tracking-tight">
                  Multiply XP. Claim Rewards.
                </h2>
                <p className="text-muted-foreground font-medium text-xs sm:text-sm">
                  Leverage streak multipliers, badges, and milestones to unlock permanent platform accelerators.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {REWARDS.map((reward, idx) => (
                  <SpotlightCard key={idx} className="p-6 text-left" spotlightColor="rgba(88, 204, 2, 0.08)">
                    <div className="p-3 w-fit rounded-xl bg-background border border-border mb-4 shadow-sm">
                      {reward.icon}
                    </div>
                    <h3 className="font-heading text-base font-bold text-brand-dark-blue dark:text-white">
                      {reward.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed">
                      {reward.desc}
                    </p>
                  </SpotlightCard>
                ))}
              </div>
            </div>

            {/* Join the Arena CTA */}
            <div className="rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-brand-green/5 to-transparent -z-10 animate-pulse" />
              <div className="max-w-2xl mx-auto space-y-6">
                <h2 className="font-heading text-2xl sm:text-3xl font-black text-brand-dark-blue dark:text-white">
                  Ready to test your limits?
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground font-semibold max-w-md mx-auto">
                  Download the ArthaGroww app now, claim your level-1 bronze starter badge, and join over 150,000+ competitors.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="h-12 bg-brand-blue hover:bg-brand-blue/95 text-white font-extrabold text-xs px-8 rounded-xl flex items-center justify-center gap-1.5 shadow-glow-blue">
                    Get Started (App Store)
                  </Button>
                  <Button className="h-12 bg-brand-green hover:bg-brand-green/95 text-white font-extrabold text-xs px-8 rounded-xl flex items-center justify-center gap-1.5 shadow-glow-green">
                    Get Started (Play Store)
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
