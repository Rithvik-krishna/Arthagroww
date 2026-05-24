"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles, ChevronRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const SCREENS = [
  {
    id: "dashboard",
    name: "Dashboard",
    tagline: "Hey Arjun! Ready to grow today?",
    desc: "Your learning command center. Get personalized daily picks, resume active courses, and check your streak multiplier at a single glance.",
    pos: "22.2%", // Cropping Home Dashboard Final V2
    color: "from-brand-blue/20 to-brand-green/20",
    glow: "shadow-glow-blue",
  },
  {
    id: "quiz",
    name: "Quiz Screen",
    tagline: "What is the primary benefit of a 'Dark Store'?",
    desc: "Interactive, bite-sized gamified quizzes. Get instant color-coded feedback, learn with explanations, and earn coins for correct streaks.",
    pos: "55.5%", // Cropping Quiz Screen Final V2
    color: "from-brand-yellow/20 to-brand-coral/20",
    glow: "shadow-glow-yellow",
  },
  {
    id: "tracks",
    name: "Learning Tracks",
    tagline: "Choose Your Path 🚀",
    desc: "Explore a catalog of structured courses ranging from Wealth Foundation, Stock Market, Crypto, Web3, to AI & Prompt Engineering.",
    pos: "66.6%", // Cropping Learning Tracks Final
    color: "from-brand-blue/20 to-indigo-500/20",
    glow: "shadow-glow-blue",
  },
  {
    id: "leaderboard",
    name: "Leaderboard",
    tagline: "Weekly Champions League",
    desc: "Compete with global learners. Climb from Bronze to Diamond league. Track rankings, XP points, and badges weekly.",
    pos: "77.7%", // Cropping Leaderboard Final
    color: "from-brand-green/20 to-brand-yellow/20",
    glow: "shadow-glow-green",
  },
  {
    id: "profile",
    name: "User Profile",
    tagline: "Arjun Rivera - Level 8",
    desc: "Show off your achievements, total lessons, and daily streak counts. Keep track of unlocked achievements and badges.",
    pos: "100%", // Cropping User Profile Final
    color: "from-brand-blue/20 to-brand-coral/20",
    glow: "shadow-glow-blue",
  },
  {
    id: "pro",
    name: "Pro Upgrade",
    tagline: "Unlock ArthaGroww Pro 👑",
    desc: "Deep portfolio analytics, advanced trading simulations, 1-on-1 AI mentor support, and access to premium investor circles.",
    pos: "88.8%", // Cropping Pro Upgrade Final
    color: "from-brand-dark-blue/40 to-zinc-950/40",
    glow: "shadow-glow-coral",
  },
];

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const activeScreen = SCREENS.find((s) => s.id === activeTab) || SCREENS[0];

  // Auto-rotating screen timer (Apple loop style)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = SCREENS.findIndex((s) => s.id === prevTab);
        const nextIndex = (currentIndex + 1) % SCREENS.length;
        return SCREENS[nextIndex].id;
      });
    }, 7000); // rotate every 7 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-brand-bg-soft/20 dark:bg-brand-dark-blue/20 border-y border-border/30 px-4 sm:px-6 lg:px-8 select-none">
      
      {/* Glow overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-brand-blue/8 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-brand-green/8 blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green uppercase tracking-wider">
            SaaS Interface
          </div>
          <h2 className="font-heading mt-4 text-4xl sm:text-5xl font-black text-brand-dark-blue dark:text-white tracking-tight">
            Immersive UI Showcase
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-medium">
            Explore the structural and gamified layers of our native companion app.
          </p>
        </div>

        {/* Tab Selectors with Scrollbar on Mobile */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-16 max-w-4xl mx-auto">
          {SCREENS.map((screen) => (
            <button
              key={screen.id}
              onClick={() => setActiveTab(screen.id)}
              className={`px-5 py-3 rounded-2xl text-xs font-black border transition-all duration-300 relative overflow-hidden ${
                activeTab === screen.id
                  ? "bg-brand-blue text-white border-transparent shadow-glow-blue scale-105"
                  : "bg-card border-border/60 hover:bg-muted text-muted-foreground"
              }`}
            >
              <span className="relative z-10">{screen.name}</span>
              {/* Dynamic countdown line inside active button */}
              {activeTab === screen.id && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 7, ease: "linear" }}
                  className="absolute bottom-0 left-0 h-[3px] bg-white"
                />
              )}
            </button>
          ))}
        </div>

        {/* Showcase Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 rounded-2xl bg-brand-green/10 text-brand-green px-3.5 py-1.5 text-xs font-black border border-brand-green/20">
                  <Sparkles className="h-3.5 w-3.5" />
                  {activeScreen.tagline}
                </div>
                
                <h3 className="font-heading text-3xl sm:text-4xl font-black text-brand-dark-blue dark:text-white leading-none">
                  {activeScreen.name}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed font-medium">
                  {activeScreen.desc}
                </p>
                
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button className="w-full sm:w-auto h-12 bg-brand-blue text-white hover:bg-brand-blue/95 hover:shadow-xl font-bold px-6 rounded-xl transition-all duration-300">
                    Get Started Free
                  </Button>
                  <Button variant="ghost" className="w-full sm:w-auto hover:text-brand-blue font-bold gap-1">
                    Download Mobile Companion
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3D Overlapping Device Frame Column (Perspective layout) */}
          <div className="lg:col-span-7 flex justify-center items-center relative min-h-[520px] px-4">
            
            {/* Spotlight behind central device */}
            <div className={`absolute w-[350px] h-[350px] bg-gradient-to-tr ${activeScreen.color} blur-[100px] rounded-full opacity-50 z-0 animate-pulse pointer-events-none`} />

            {/* Apple style 3D tilted Device Stacks */}
            <div 
              className="relative w-full max-w-[480px] h-[550px] flex items-center justify-center"
              style={{ perspective: 1200 }}
            >
              
              {/* Back Phone Left (Tilted deeper in space) */}
              <motion.div 
                className="absolute z-0 w-[180px] h-[360px] rounded-[32px] border-[5px] border-zinc-900 bg-zinc-950 shadow-xl overflow-hidden opacity-40 transition-all duration-500 hidden sm:block shadow-glow-green"
                style={{
                  transform: "rotateY(-30deg) rotateX(10deg) translate3d(-140px, -20px, -100px)"
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/app-screens.png"
                    alt="Left Phone Screen"
                    fill
                    sizes="180px"
                    className="object-cover object-top"
                    style={{ objectPosition: "0% 0%" }} // Splash Screen
                  />
                </div>
              </motion.div>

              {/* Main Active Phone (Centered, elevated, tilted) */}
              <motion.div 
                className="absolute z-20 w-[260px] h-[530px] rounded-[44px] border-[8px] border-zinc-900 bg-zinc-950 shadow-2xl overflow-hidden transition-all duration-500 shadow-glow-blue cursor-pointer"
                style={{
                  transform: "rotateY(-15deg) rotateX(10deg) translate3d(0, 0, 50px)"
                }}
                whileHover={{
                  transform: "rotateY(-5deg) rotateX(5deg) translate3d(0, -10px, 80px)"
                }}
              >
                {/* Speaker & notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5.5 w-32 bg-zinc-900 rounded-b-2xl z-40 flex items-center justify-center gap-1.5">
                  <div className="h-1 w-10 bg-zinc-700 rounded-full" />
                  <div className="h-1.5 w-1.5 bg-zinc-800 rounded-full" />
                </div>

                {/* Main Screen Content */}
                <div className="relative w-full h-full bg-slate-900 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScreen.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src="/assets/app-screens.png"
                        alt={activeScreen.name}
                        fill
                        sizes="260px"
                        className="object-cover object-top"
                        style={{ objectPosition: `${activeScreen.pos} 0%` }}
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1.5 w-24 bg-white/40 rounded-full z-45" />
              </motion.div>

              {/* Front Phone Right (Tilted forwards in space) */}
              <motion.div 
                className="absolute z-10 w-[190px] h-[390px] rounded-[34px] border-[5px] border-zinc-900 bg-zinc-950 shadow-xl overflow-hidden opacity-50 transition-all duration-500 hidden sm:block shadow-glow-yellow"
                style={{
                  transform: "rotateY(-5deg) rotateX(10deg) translate3d(140px, 40px, -50px)"
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/app-screens.png"
                    alt="Right Phone Screen"
                    fill
                    sizes="190px"
                    className="object-cover object-top"
                    style={{ objectPosition: "88.8% 0%" }} // Pro Upgrade
                  />
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
