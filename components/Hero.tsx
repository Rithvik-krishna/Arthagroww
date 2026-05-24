"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Flame, Sparkles, Trophy, Coins, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const FLOATING_BADGES = [
  {
    icon: <Flame className="h-5 w-5 text-brand-coral fill-brand-coral" />,
    text: "7 Day Streak!",
    color: "border-brand-coral/30 text-brand-coral bg-brand-coral/10",
    top: "10%",
    left: "-12%",
    factor: -0.6,
  },
  {
    icon: <Trophy className="h-5 w-5 text-brand-yellow fill-brand-yellow" />,
    text: "Leaderboard #1",
    color: "border-brand-yellow/30 text-brand-yellow bg-brand-yellow/10",
    top: "40%",
    right: "-15%",
    factor: 0.8,
  },
  {
    icon: <Coins className="h-5 w-5 text-brand-yellow fill-brand-yellow" />,
    text: "+1,200 XP",
    color: "border-brand-yellow/30 text-brand-yellow bg-brand-yellow/10",
    bottom: "15%",
    left: "-8%",
    factor: 0.5,
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-brand-blue" />,
    text: "Investing: 85%",
    color: "border-brand-blue/30 text-brand-blue bg-brand-blue/10",
    bottom: "30%",
    right: "-10%",
    factor: -0.7,
  },
];

const RECENT_ALERTS = [
  "Arjun completed 'Cap Table 101' 🔥",
  "Priya unlocked 'AI Mentor' 🎓",
  "Siddharth earned 150 XP on Daily Quiz ⚡",
  "Ananya reached Level 8: Wealth Builder 🏆"
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle Mouse Parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = (clientX - width / 2) / 30; // Scale down movement
    const y = (clientY - height / 2) / 30;
    setMousePos({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden pt-16 pb-28 md:pt-24 md:pb-36 px-4 sm:px-6 lg:px-8 select-none"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            
            {/* Tagline tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4.5 py-2 text-xs font-bold text-brand-blue shadow-sm"
            >
              <Sparkles className="h-4 w-4 fill-brand-blue animate-pulse" />
              THE FUTURE OF FINTECH & AI LEARNING
            </motion.div>

            {/* Main Premium Heading */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className="font-heading text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-brand-dark-blue dark:text-white leading-[0.95]"
              >
                Learn. Grow.
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="font-heading text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.95]"
              >
                <span className="text-brand-blue bg-gradient-to-r from-brand-blue via-brand-green to-brand-yellow bg-clip-text text-transparent">
                  Earn.
                </span>
              </motion.h1>
            </div>

            {/* Subheadline with rhythm spacing */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed"
            >
              Master the Stock Market, AI Automation, Entrepreneurship, and Wealth Building through bite-sized, gamified interactive lessons. Designed specifically for Gen Z.
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button className="w-full sm:w-auto h-14 bg-brand-blue text-white shadow-glow-blue hover:bg-brand-blue/95 hover:shadow-2xl font-extrabold text-base px-8 rounded-2xl group transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-1">
                  Start Learning Free
                  <ArrowRight className="h-5 w-5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
              <Button variant="outline" className="w-full sm:w-auto h-14 border-2 border-border/80 font-extrabold text-base px-8 rounded-2xl transition-all duration-300 hover:bg-muted/50 hover:border-brand-blue/30 hover:text-brand-blue">
                Download Mobile App
              </Button>
            </motion.div>

            {/* Live Ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 text-sm text-muted-foreground/80 font-semibold pt-4"
            >
              <div className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green"></span>
              </div>
              <span>Live activity:</span>
              <div className="h-6 overflow-hidden relative w-[260px] sm:w-[320px] text-center lg:text-left">
                <motion.div
                  animate={{
                    y: [0, -24, -48, -72, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col gap-1.5"
                >
                  {RECENT_ALERTS.map((alert, index) => (
                    <div key={index} className="h-6 flex items-center justify-center lg:justify-start font-bold text-brand-dark-blue dark:text-slate-200">
                      {alert}
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Layered Parallax Phone Stacks */}
          <div className="lg:col-span-6 flex justify-center items-center relative mt-16 lg:mt-0 px-6 min-h-[580px]">
            
            {/* Ambient spotlight backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-green/20 blur-[80px] rounded-full scale-75 opacity-70 z-0 animate-pulse pointer-events-none" />

            {/* Parallax Floating Badges */}
            {FLOATING_BADGES.map((badge, idx) => (
              <motion.div
                key={idx}
                className={`absolute z-35 hidden sm:flex items-center gap-2 border px-4.5 py-2.5 rounded-2xl glassmorphism shadow-xl font-black text-sm select-none ${badge.color}`}
                style={{
                  top: badge.top,
                  bottom: badge.bottom,
                  left: badge.left,
                  right: badge.right,
                }}
                animate={{
                  x: mousePos.x * badge.factor,
                  y: mousePos.y * badge.factor - 5, // constant float offset
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
              >
                {badge.icon}
                {badge.text}
              </motion.div>
            ))}

            {/* Phone 1: Back Left (Parallax) */}
            <motion.div
              className="absolute z-10 w-[200px] h-[410px] rounded-[36px] border-[6px] border-zinc-900 bg-zinc-950 shadow-xl overflow-hidden opacity-45 -rotate-12 pointer-events-none hidden sm:block shadow-glow-green"
              animate={{
                x: mousePos.x * -0.5 - 90,
                y: mousePos.y * -0.5 - 20,
              }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/assets/app-screens.png"
                  alt="Tracks screen"
                  fill
                  sizes="200px"
                  className="object-cover object-top"
                  style={{ objectPosition: "66.6% 0%" }}
                />
              </div>
            </motion.div>

            {/* Phone 3: Front Right (Parallax) */}
            <motion.div
              className="absolute z-30 w-[210px] h-[430px] rounded-[38px] border-[7px] border-zinc-900 bg-zinc-950 shadow-2xl overflow-hidden opacity-75 rotate-12 pointer-events-none hidden sm:block shadow-glow-yellow"
              animate={{
                x: mousePos.x * 1.3 + 90,
                y: mousePos.y * 1.3 + 50,
              }}
              transition={{ type: "spring", stiffness: 90, damping: 15 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/assets/app-screens.png"
                  alt="Quiz screen"
                  fill
                  sizes="210px"
                  className="object-cover object-top"
                  style={{ objectPosition: "55.5% 0%" }}
                />
              </div>
            </motion.div>

            {/* Phone 2: Main Center Elevated Device */}
            <motion.div
              className="relative z-20 w-[270px] h-[550px] rounded-[48px] border-[10px] border-zinc-900 bg-zinc-950 shadow-2xl overflow-hidden shadow-glow-blue cursor-grab active:cursor-grabbing"
              animate={{
                x: mousePos.x * 0.7,
                y: mousePos.y * 0.7,
                rotateY: mousePos.x * 0.3,
                rotateX: mousePos.y * -0.3,
              }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Speaker & notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-36 bg-zinc-900 rounded-b-2xl z-40 flex items-center justify-center gap-1.5">
                <div className="h-1.5 w-12 bg-zinc-700 rounded-full" />
                <div className="h-2 w-2 bg-zinc-800 rounded-full" />
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1.5 w-28 bg-white/40 rounded-full z-40" />

              {/* Screen */}
              <div className="relative w-full h-full bg-[#F7F7F7] overflow-hidden">
                <motion.div
                  animate={{ y: [0, -1000, 0] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-[2400px]"
                >
                  <Image
                    src="/assets/app-screens.png"
                    alt="Main App View"
                    fill
                    sizes="270px"
                    className="object-cover object-top p-1"
                    priority
                  />
                </motion.div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
