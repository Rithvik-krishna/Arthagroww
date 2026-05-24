"use client";

import { motion } from "framer-motion";
import { Trophy, Flame, Shield, ArrowUpRight, Award, Crown, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SpotlightCard from "./SpotlightCard";

const TOP_PLAYERS = [
  {
    rank: 2,
    name: "Arjun R.",
    avatar: "👨‍💻",
    xp: "1,280",
    streak: "7d",
    border: "border-slate-300 shadow-glow-blue",
    podiumColor: "bg-slate-200 dark:bg-slate-800 text-slate-500",
    avatarBg: "bg-slate-100 dark:bg-slate-800",
  },
  {
    rank: 1,
    name: "Priya S.",
    avatar: "👩‍🎓",
    xp: "1,450",
    streak: "42d",
    border: "border-brand-yellow shadow-glow-yellow animate-pulse",
    podiumColor: "bg-brand-yellow text-slate-900 font-black shadow-glow-yellow",
    avatarBg: "bg-brand-yellow/10",
    crown: true,
  },
  {
    rank: 3,
    name: "Sid K.",
    avatar: "🙋‍♂️",
    xp: "1,120",
    streak: "34d",
    border: "border-amber-600 shadow-glow-coral",
    podiumColor: "bg-amber-600/20 text-amber-700",
    avatarBg: "bg-amber-500/10",
  },
];

const BOARD_PLAYERS = [
  { rank: 4, name: "Ishaan K.", avatar: "🛹", xp: "980 XP", streak: "15d", change: "up" },
  { rank: 5, name: "Sanya M.", avatar: "🎨", xp: "850 XP", streak: "24d", change: "down" },
  { rank: 6, name: "Rahul V.", avatar: "🚀", xp: "790 XP", streak: "12d", change: "up" },
  { rank: 7, name: "Joya P.", avatar: "🎵", xp: "680 XP", streak: "8d", change: "same" },
];

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Highly Gamified Scoreboard Panel */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center">
            
            {/* Diamond League panel with spotlight card */}
            <SpotlightCard
              spotlightColor="rgba(88, 204, 2, 0.1)"
              borderColor="rgba(88, 204, 2, 0.25)"
              className="w-full max-w-[440px] p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-brand-green fill-brand-green/20 animate-bounce" />
                  <span className="font-heading text-lg font-black text-brand-dark-blue dark:text-white">Diamond League</span>
                </div>
                <span className="text-xs font-black text-brand-coral bg-brand-coral/10 px-3.5 py-1.5 rounded-full border border-brand-coral/25 animate-pulse">
                  ENDS IN: 12H 40M
                </span>
              </div>

              {/* Podium Setup */}
              <div className="grid grid-cols-3 gap-3 items-end mb-8 pt-8 pb-4 border-b border-border/40">
                {/* 2nd place */}
                <div className="flex flex-col items-center">
                  <div className={`relative text-3xl mb-2.5 p-2 rounded-full border-2 ${TOP_PLAYERS[0].border} ${TOP_PLAYERS[0].avatarBg}`}>
                    {TOP_PLAYERS[0].avatar}
                  </div>
                  <div className="w-full text-center p-2.5 rounded-2xl border bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-black text-brand-dark-blue dark:text-white truncate">{TOP_PLAYERS[0].name}</div>
                    <div className="text-[10px] font-extrabold text-brand-blue mt-1">{TOP_PLAYERS[0].xp} XP</div>
                  </div>
                  <div className={`h-11 w-full rounded-b-xl mt-1 flex items-center justify-center font-black text-sm ${TOP_PLAYERS[0].podiumColor}`}>2</div>
                </div>

                {/* 1st place */}
                <div className="flex flex-col items-center relative -top-3">
                  <div className="absolute top-[-32px] text-brand-yellow select-none animate-bounce">
                    <Crown className="h-6.5 w-6.5 fill-brand-yellow" />
                  </div>
                  <div className={`relative text-4xl mb-2.5 p-2.5 rounded-full border-2 ${TOP_PLAYERS[1].border} ${TOP_PLAYERS[1].avatarBg}`}>
                    {TOP_PLAYERS[1].avatar}
                  </div>
                  <div className="w-full text-center p-2.5 rounded-2xl border bg-brand-yellow/15 border-brand-yellow shadow-md">
                    <div className="text-xs font-black text-brand-dark-blue dark:text-white truncate">{TOP_PLAYERS[1].name}</div>
                    <div className="text-[10px] font-black text-brand-yellow mt-1">{TOP_PLAYERS[1].xp} XP</div>
                  </div>
                  <div className={`h-16 w-full rounded-b-xl mt-1 flex items-center justify-center font-black text-base ${TOP_PLAYERS[1].podiumColor}`}>1</div>
                </div>

                {/* 3rd place */}
                <div className="flex flex-col items-center">
                  <div className={`relative text-3xl mb-2.5 p-2 rounded-full border-2 ${TOP_PLAYERS[2].border} ${TOP_PLAYERS[2].avatarBg}`}>
                    {TOP_PLAYERS[2].avatar}
                  </div>
                  <div className="w-full text-center p-2.5 rounded-2xl border bg-slate-50 dark:bg-slate-900 border-amber-600/30">
                    <div className="text-xs font-black text-brand-dark-blue dark:text-white truncate">{TOP_PLAYERS[2].name}</div>
                    <div className="text-[10px] font-extrabold text-amber-600 mt-1">{TOP_PLAYERS[2].xp} XP</div>
                  </div>
                  <div className={`h-8 w-full rounded-b-xl mt-1 flex items-center justify-center font-black text-xs ${TOP_PLAYERS[2].podiumColor}`}>3</div>
                </div>
              </div>

              {/* Battle Pass Progress Module */}
              <div className="mb-6 p-4 rounded-2xl bg-muted/40 border border-border/40 text-xs font-bold text-slate-800 dark:text-slate-200">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="flex items-center gap-1"><Zap className="h-4 w-4 text-brand-yellow fill-brand-yellow" /> Ruby Quest Pass</span>
                  <span className="text-[10px] text-brand-green font-black">85% UNLOCKED</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-full h-2.5 rounded-full bg-border overflow-hidden">
                    <div className="h-full w-[85%] bg-brand-green shadow-glow-green" />
                  </div>
                  <Lock className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Scrollable list of players */}
              <div className="flex flex-col gap-3 max-h-[220px] overflow-y-auto pr-1">
                {BOARD_PLAYERS.map((player) => (
                  <div key={player.rank} className="flex justify-between items-center p-3 rounded-2xl border border-border/50 bg-background/50 hover:bg-background transition-all duration-200">
                    <div className="flex items-center gap-3.5">
                      <span className="text-xs font-black text-muted-foreground w-4">{player.rank}</span>
                      <span className="text-xl select-none">{player.avatar}</span>
                      <div>
                        <div className="text-xs font-black text-brand-dark-blue dark:text-white">{player.name}</div>
                        <div className="text-[10px] text-muted-foreground font-bold flex items-center gap-1 mt-0.5">
                          <Flame className="h-3.5 w-3.5 text-brand-coral fill-brand-coral" />
                          {player.streak} streak
                        </div>
                      </div>
                    </div>
                    
                    <span className="text-xs font-black text-brand-dark-blue dark:text-white">
                      {player.xp}
                    </span>
                  </div>
                ))}
              </div>

            </SpotlightCard>
          </div>

          {/* Right Column: Descriptions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green uppercase tracking-wider">
              Healthy Competition
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl font-black text-brand-dark-blue dark:text-white tracking-tight">
              Learn faster through addictive leagues
            </h2>
            
            <p className="text-muted-foreground font-medium text-base sm:text-lg">
              Compete weekly with thousands of global learners in structural bracket leagues. Push your scores, protect your streak multipliers, and secure reward chests.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
                <div className="flex items-center gap-2 font-black text-sm text-brand-dark-blue dark:text-white mb-2">
                  <Award className="h-4.5 w-4.5 text-brand-yellow fill-brand-yellow/10" />
                  League Multipliers
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                  Unlock profile credentials, custom avatar frames, and dynamic multipliers as you advance.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
                <div className="flex items-center gap-2 font-black text-sm text-brand-dark-blue dark:text-white mb-2">
                  <Flame className="h-4.5 w-4.5 text-brand-coral fill-brand-coral" />
                  Daily active multipliers
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                  Maintain your streaks to active double XP multipliers on daily quiz quests.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Button className="bg-brand-blue text-white shadow-glow-blue hover:bg-brand-blue/95 font-black px-6 py-5.5 rounded-2xl flex items-center gap-2 mx-auto lg:mx-0 transition-all duration-300">
                Join active League
                <ArrowUpRight className="h-4.5 w-4.5 ml-0.5" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
