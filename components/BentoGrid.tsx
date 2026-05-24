"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Flame, Sparkles, Trophy, Lightbulb, TrendingUp, CheckCircle } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  delay: number;
}

export default function BentoGrid() {
  // Simulator State
  const [amount, setAmount] = useState(100);
  const [years, setYears] = useState(5);
  const rate = 0.12; // 12% average market returns

  // Calculate compound interest: A = P * ((1 + r)^n)
  const compoundTotal = Math.round(amount * 12 * ((Math.pow(1 + rate, years) - 1) / rate) * (1 + rate));

  // Quiz state
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);

  const quizOptions = [
    { text: "A standard debt note", correct: false },
    { text: "Ownership share in a business", correct: true },
    { text: "A government-insured savings account", correct: false },
  ];

  const handleSelectAnswer = (idx: number) => {
    setSelectedAnswer(idx);
    setQuizCompleted(true);
    
    // Spawn custom high-end confettis if correct!
    if (quizOptions[idx].correct) {
      const colors = ["#1CB0F6", "#58CC02", "#FFC800", "#FF4B4B", "#a855f7"];
      const particles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: Math.random() * 260 - 130, // spread
        y: Math.random() * -120 - 60, // travel path
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.15,
      }));
      setConfetti(particles);
      
      // Clear confetti after animation
      setTimeout(() => setConfetti([]), 1500);
    }
  };

  return (
    <section id="bento" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Narrative */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold text-brand-blue uppercase tracking-wider">
            Gamification Engine
          </div>
          
          <h2 className="font-heading mt-4 text-4xl sm:text-5xl font-black text-brand-dark-blue dark:text-white tracking-tight">
            Designed to build lifelong habits
          </h2>
          
          <p className="mt-4 text-lg text-muted-foreground font-medium">
            Duolingo streaks meets fintech simulators. Visually engaging and addictive.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: AI-Powered Personalized Roadmap (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <SpotlightCard
              spotlightColor="rgba(28, 176, 246, 0.15)"
              borderColor="rgba(28, 176, 246, 0.3)"
              className="p-8 h-full flex flex-col justify-between group shadow-sm min-h-[420px]"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-2xl bg-brand-blue/10 text-brand-blue px-3.5 py-1.5 text-xs font-extrabold border border-brand-blue/20">
                  <Brain className="h-4.5 w-4.5" />
                  Adaptive Content Path
                </div>
                <h3 className="font-heading mt-6 text-2xl sm:text-3xl font-black text-brand-dark-blue dark:text-white tracking-tight">
                  AI Adaptive Study Roadmaps
                </h3>
                <p className="mt-3 text-sm text-muted-foreground font-medium leading-relaxed max-w-lg">
                  Every quiz answer teaches our dynamic mentor. Unlock specialized topics based on your career interests and score multipliers.
                </p>
              </div>

              {/* Branching Roadmaps Visualizer */}
              <div className="relative mt-8 py-6 px-4 bg-muted/40 rounded-2xl border border-border/40 overflow-hidden">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/80 -translate-x-1/2 hidden md:block" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-card border border-border relative shadow-sm">
                    <CheckCircle className="h-5 w-5 text-brand-green fill-brand-green/20 mb-2" />
                    <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200">1. Budgeting</span>
                    <span className="text-[10px] text-brand-green font-black mt-1">COMPLETED</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-3.5 rounded-xl bg-brand-blue/15 border-2 border-brand-blue/40 relative shadow-md">
                    <div className="absolute top-[-8px] right-[-8px] bg-brand-yellow text-slate-900 rounded-full p-0.5"><Sparkles className="h-3.5 w-3.5 fill-slate-900" /></div>
                    <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="h-5.5 w-5.5 rounded-full bg-brand-blue flex items-center justify-center text-white mb-2 text-xs font-black shadow-sm">2</motion.div>
                    <span className="text-xs font-black text-brand-blue">2. Stock Markets</span>
                    <span className="text-[10px] text-brand-blue font-black mt-1">IN PROGRESS</span>
                  </div>
                  
                  <div className="opacity-50 flex flex-col items-center text-center p-3 rounded-xl bg-card border border-border relative">
                    <div className="h-5 w-5 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 mb-2 text-xs font-bold">3</div>
                    <span className="text-xs font-extrabold text-slate-600 dark:text-slate-400">3. Startup Loop</span>
                    <span className="text-[10px] text-muted-foreground font-bold mt-1">LOCKED</span>
                  </div>

                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: Level progress (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <SpotlightCard
              spotlightColor="rgba(255, 200, 0, 0.12)"
              borderColor="rgba(255, 200, 0, 0.25)"
              className="p-8 h-full flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-2xl bg-brand-yellow/15 text-brand-yellow px-3.5 py-1.5 text-sm font-extrabold border border-brand-yellow/20">
                  <Trophy className="h-4.5 w-4.5" />
                  XP Tier Progress
                </div>
                <h3 className="font-heading mt-6 text-2xl font-black text-brand-dark-blue dark:text-white tracking-tight">
                  Track Your XP Progression
                </h3>
                <p className="mt-2 text-sm text-muted-foreground font-medium">
                  Unlock legendary avatars, custom profile borders, and premium status at each new level.
                </p>
              </div>

              {/* Progress Bar Widget */}
              <div className="mt-8 p-5 rounded-2xl bg-muted/40 border border-border/40">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-brand-dark-blue dark:text-white px-2 py-0.5 bg-brand-yellow/20 rounded-md border border-brand-yellow/30">Level 8</span>
                    <span className="text-xs text-muted-foreground font-semibold">Stock Apprentice</span>
                  </div>
                  <span className="text-xs font-black text-slate-800 dark:text-slate-200">850 / 1000 XP</span>
                </div>
                <div className="w-full h-3 rounded-full bg-border/80 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-brand-yellow shadow-glow-yellow"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center text-[11px] font-bold text-muted-foreground">
                  <span>Next level: Wealth Builder</span>
                  <span className="text-brand-yellow font-black">+150 XP Needed</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: Streaks (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4"
          >
            <SpotlightCard
              spotlightColor="rgba(255, 75, 75, 0.12)"
              borderColor="rgba(255, 75, 75, 0.25)"
              className="p-8 h-full flex flex-col justify-between group shadow-sm min-h-[300px]"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-2xl bg-brand-coral/10 text-brand-coral px-3.5 py-1.5 text-sm font-extrabold border border-brand-coral/20">
                  <Flame className="h-4.5 w-4.5 text-brand-coral fill-brand-coral" />
                  Habit streaks
                </div>
                <h3 className="font-heading mt-6 text-2xl font-black text-brand-dark-blue dark:text-white tracking-tight">
                  Consistency Streaks
                </h3>
                <p className="mt-2 text-sm text-muted-foreground font-medium leading-relaxed">
                  Learn daily, build habits, and protect your multiplier counts.
                </p>
              </div>

              {/* Streak Tracker UI */}
              <div className="mt-8 flex justify-between items-center bg-muted/40 p-4 rounded-2xl border border-border/40">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-bold text-muted-foreground">{day}</span>
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center border font-bold text-xs shadow-sm transition-all duration-300 ${
                        idx < 5
                          ? "bg-brand-coral/10 border-brand-coral text-brand-coral shadow-glow-coral"
                          : "bg-card border-border text-muted-foreground/60"
                      }`}
                    >
                      {idx < 5 ? (
                        <Flame className="h-4.5 w-4.5 fill-brand-coral" />
                      ) : (
                        <span className="text-[10px] font-bold">{day}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 4: Confetti Interactive Quiz (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <SpotlightCard
              spotlightColor="rgba(28, 176, 246, 0.12)"
              borderColor="rgba(28, 176, 246, 0.25)"
              className="p-8 h-full flex flex-col justify-between group shadow-sm min-h-[300px] relative overflow-hidden"
            >
              {/* Confetti Render Canvas */}
              {confetti.map((c) => (
                <motion.div
                  key={c.id}
                  className="absolute h-2.5 w-2.5 rounded-full pointer-events-none z-50"
                  style={{ backgroundColor: c.color, left: "55%", bottom: "25%" }}
                  initial={{ x: 0, y: 0, scale: 1.2, opacity: 1 }}
                  animate={{
                    x: c.x,
                    y: c.y - 250,
                    scale: [1.2, 0.6, 0],
                    opacity: [1, 1, 0],
                    rotate: Math.random() * 360,
                  }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: c.delay }}
                />
              ))}

              <div>
                <div className="inline-flex items-center gap-2 rounded-2xl bg-brand-blue/10 text-brand-blue px-3.5 py-1.5 text-sm font-extrabold border border-brand-blue/20">
                  <Lightbulb className="h-4.5 w-4.5" />
                  Gamified Quizzes
                </div>
                <h3 className="font-heading mt-6 text-2xl font-black text-brand-dark-blue dark:text-white tracking-tight">
                  Bite-Sized Daily Quiz
                </h3>
              </div>

              {/* Interactive Confetti Quiz Widget */}
              <div className="mt-6 flex flex-col gap-2 relative z-10 bg-muted/40 p-4.5 rounded-2xl border border-border/40">
                <span className="text-[10px] font-black text-brand-blue uppercase tracking-wider">DAILY CHALLENGE</span>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">What is a Stock?</span>
                
                <div className="flex flex-col gap-2 mt-2">
                  {quizOptions.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      disabled={quizCompleted}
                      onClick={() => handleSelectAnswer(oIdx)}
                      className={`w-full text-left text-xs font-bold px-3.5 py-2.5 rounded-xl border transition-all duration-200 ${
                        selectedAnswer === oIdx
                          ? opt.correct
                            ? "bg-brand-green/20 border-brand-green text-brand-green shadow-sm shadow-glow-green"
                            : "bg-brand-coral/20 border-brand-coral text-brand-coral shadow-sm shadow-glow-coral"
                          : quizCompleted && opt.correct
                          ? "bg-brand-green/10 border-brand-green/45 text-brand-green/90"
                          : "bg-card border-border/60 hover:bg-muted"
                      }`}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 5: Calculators & Simulation (lg:col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-4"
          >
            <SpotlightCard
              spotlightColor="rgba(88, 204, 2, 0.12)"
              borderColor="rgba(88, 204, 2, 0.25)"
              className="p-8 h-full flex flex-col justify-between group shadow-sm min-h-[300px]"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-2xl bg-brand-green/10 text-brand-green px-3.5 py-1.5 text-sm font-extrabold border border-brand-green/20">
                  <TrendingUp className="h-4.5 w-4.5" />
                  Wealth Simulator
                </div>
                <h3 className="font-heading mt-6 text-2xl font-black text-brand-dark-blue dark:text-white tracking-tight">
                  Compound Interest Sim
                </h3>
              </div>

              {/* Slider Calculator Widget */}
              <div className="mt-6 p-5 rounded-2xl bg-muted/40 border border-border/40 text-xs font-bold text-slate-800 dark:text-slate-200">
                <div className="flex justify-between items-center">
                  <span>Investing Monthly:</span>
                  <span className="text-brand-green font-black">${amount}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full mt-2 h-1 bg-border rounded-lg appearance-none cursor-pointer accent-brand-green"
                />
                
                <div className="flex justify-between items-center mt-3">
                  <span>Duration (Years):</span>
                  <span className="text-brand-green font-black">{years} Yrs</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full mt-2 h-1 bg-border rounded-lg appearance-none cursor-pointer accent-brand-green"
                />
                
                <div className="mt-4 pt-3.5 border-t border-border/50 flex justify-between items-center text-sm font-black">
                  <span className="text-muted-foreground text-xs">Total projected:</span>
                  <span className="text-brand-green text-base">${compoundTotal.toLocaleString()}</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
