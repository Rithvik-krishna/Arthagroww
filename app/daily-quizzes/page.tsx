"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Brain, Flame, Award, ArrowRight, CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";
import SmoothScroll from "@/components/SmoothScroll";
import SpotlightCard from "@/components/SpotlightCard";
import { Button } from "@/components/ui/button";

const MOCK_QUESTION = {
  category: "QUICK COMMERCE 101",
  question: "What is the primary benefit of a 'Dark Store' in quick commerce?",
  options: [
    { id: "A", text: "Higher foot traffic from walk-in customers" },
    { id: "B", text: "Faster last-mile delivery via strategic localization", isCorrect: true },
    { id: "C", text: "Reduced electricity costs for storefront lighting" },
    { id: "D", text: "Exclusively selling luxury premium goods" },
  ],
  funFact: "Did you know? Zepto is India's fastest growing q-commerce startup! Dark stores are micro-fulfillment warehouses optimized for packing inside 3 minutes.",
};

export default function DailyQuizzes() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [streak, setStreak] = useState(7);
  const [xp, setXp] = useState(1250);
  const [xpGained, setXpGained] = useState(false);

  const handleOptionClick = (optionId: string) => {
    if (hasAnswered) return;
    setSelectedOption(optionId);
    setHasAnswered(true);

    const isCorrect = optionId === "B";
    if (isCorrect) {
      setStreak((prev) => prev + 1);
      setXp((prev) => prev + 100);
      setXpGained(true);
    }
  };

  const resetQuiz = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    setXpGained(false);
    // Keep streak updated
  };

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
                className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green/5 px-4.5 py-1.5 text-xs font-bold text-brand-green shadow-sm"
              >
                <Brain className="h-4 w-4 text-brand-green" />
                MICRO-LEARNING ENGINES
              </motion.div>

              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark-blue dark:text-white tracking-tight leading-none">
                Bite-sized Quizzes.<br />
                <span className="text-brand-green">Addictive Learning.</span>
              </h1>

              <p className="text-muted-foreground font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Why read 500-page finance textbooks when you can master stock metrics, startup mechanics, and AI tokens through interactive 2-minute daily quests?
              </p>
            </div>

            {/* Simulated Live Quiz Engine */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
              
              {/* Feature Pitch */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <h2 className="font-heading text-2xl sm:text-3xl font-black text-brand-dark-blue dark:text-white tracking-tight leading-tight">
                  Solve your daily quest. Maintain your streak.
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-brand-green/10 rounded-lg text-brand-green">
                      <Flame className="h-5 w-5 fill-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-brand-dark-blue dark:text-white">Streak Habit Loop</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Missing a day resets your streak shield. Consistently solving keeps the flame alive.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-brand-blue/10 rounded-lg text-brand-blue">
                      <Zap className="h-5 w-5 fill-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-brand-dark-blue dark:text-white">Adaptive Difficulty Scaling</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Our AI Mentor system adjusts question complexity dynamically based on your correctness vector.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-brand-yellow/10 rounded-lg text-brand-yellow">
                      <Award className="h-5 w-5 fill-brand-yellow" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-brand-dark-blue dark:text-white">Instant XP & Badges</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground font-semibold">Earn XP instantly with correct answers, moving you up in the global Weekly Leagues.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Demo UI Card */}
              <div className="lg:col-span-7 flex justify-center">
                <div className="w-full max-w-[400px] bg-[#fdfdfd] dark:bg-[#0c1224] rounded-3xl border border-border shadow-2xl overflow-hidden text-left font-sans">
                  
                  {/* Top Stats Bar */}
                  <div className="px-5 py-4 border-b border-border/40 flex justify-between items-center bg-card">
                    <span className="font-heading text-sm font-extrabold text-brand-dark-blue dark:text-white tracking-tight">
                      ArthaGroww
                    </span>

                    <div className="flex gap-3">
                      <div className="flex items-center gap-1 bg-brand-yellow/10 text-brand-yellow px-2 py-0.5 rounded-lg border border-brand-yellow/20">
                        <span className="text-xs font-black">🪙 {xp}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-brand-coral/10 text-brand-coral px-2 py-0.5 rounded-lg border border-brand-coral/20">
                        <Flame className="h-3.5 w-3.5 fill-brand-coral" />
                        <span className="text-xs font-black">{streak}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quiz Board Area */}
                  <div className="p-5 space-y-5">
                    
                    {/* Header bar progress indicator */}
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black px-2.5 py-0.5 bg-brand-blue/10 text-brand-blue rounded-full">
                        {MOCK_QUESTION.category}
                      </span>
                      <span className="text-[10px] font-bold text-muted-foreground">
                        Q 4/10
                      </span>
                    </div>

                    {/* Question text */}
                    <h3 className="font-heading text-lg font-black text-brand-dark-blue dark:text-white leading-tight">
                      {MOCK_QUESTION.question}
                    </h3>

                    {/* Interactive Options list */}
                    <div className="space-y-2.5">
                      {MOCK_QUESTION.options.map((option) => {
                        const isSelected = selectedOption === option.id;
                        const isCorrectOption = option.isCorrect;
                        
                        let optionStyle = "border-border/80 bg-card hover:border-brand-blue/40";
                        let iconElement = null;

                        if (hasAnswered) {
                          if (isSelected) {
                            if (isCorrectOption) {
                              optionStyle = "border-brand-green bg-brand-green/10 text-brand-green font-bold";
                              iconElement = <CheckCircle2 className="h-4.5 w-4.5 text-brand-green shrink-0" />;
                            } else {
                              optionStyle = "border-brand-coral bg-brand-coral/10 text-brand-coral font-bold";
                              iconElement = <XCircle className="h-4.5 w-4.5 text-brand-coral shrink-0" />;
                            }
                          } else if (isCorrectOption) {
                            // Show correct answer if user got it wrong
                            optionStyle = "border-brand-green bg-brand-green/5 text-brand-green font-bold";
                          } else {
                            optionStyle = "opacity-50 border-border/40 bg-card";
                          }
                        }

                        return (
                          <button
                            key={option.id}
                            disabled={hasAnswered}
                            onClick={() => handleOptionClick(option.id)}
                            className={`w-full p-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all duration-200 text-left flex justify-between items-center gap-3 ${optionStyle}`}
                          >
                            <span>{option.text}</span>
                            {iconElement}
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedback and Fun Fact area */}
                    <AnimatePresence>
                      {hasAnswered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4 pt-2"
                        >
                          <div className="p-4 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 space-y-1.5 text-left">
                            <h5 className="font-heading text-xs font-black text-brand-yellow-dark flex items-center gap-1.5">
                              💡 Fun fact
                            </h5>
                            <p className="text-[11px] leading-relaxed text-muted-foreground font-semibold">
                              {MOCK_QUESTION.funFact}
                            </p>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              onClick={resetQuiz}
                              className="w-full h-11 bg-muted hover:bg-muted/80 text-muted-foreground font-extrabold text-xs rounded-xl"
                            >
                              Reset Demo
                            </Button>
                            
                            <Button
                              className="w-full h-11 bg-brand-yellow text-brand-dark-blue hover:bg-brand-yellow/90 font-extrabold text-xs rounded-xl flex items-center justify-center gap-1"
                            >
                              CONTINUE
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* XP gain alert popover */}
                    <AnimatePresence>
                      {xpGained && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 10 }}
                          className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        >
                          <div className="px-6 py-3 bg-brand-green text-white font-heading font-black text-sm rounded-2xl shadow-xl flex items-center gap-2">
                            🔥 +100 XP STREAK!
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </div>
              </div>

            </div>

            {/* Daily schedule, difficulty categories */}
            <div className="border-t border-border/40 pt-20 mb-24">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                <h2 className="font-heading text-3xl font-black text-brand-dark-blue dark:text-white tracking-tight">
                  Curriculum Built for Gen Z
                </h2>
                <p className="text-muted-foreground font-medium text-xs sm:text-sm">
                  We don't do boring. Solve interactive modules covering critical wealth building strategies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <SpotlightCard className="p-6 text-left" spotlightColor="rgba(28, 176, 246, 0.08)">
                  <h3 className="font-heading text-base font-bold text-brand-dark-blue dark:text-white mb-2">
                    📈 Market Basics
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed">
                    Master P/E ratios, dividends, index funds, compound interest calculators, and general inflation safeguards.
                  </p>
                </SpotlightCard>

                <SpotlightCard className="p-6 text-left" spotlightColor="rgba(88, 204, 2, 0.08)">
                  <h3 className="font-heading text-base font-bold text-brand-dark-blue dark:text-white mb-2">
                    🤖 AI Forge & Tools
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed">
                    Learn prompt architecture, vector datasets, open-source model configurations, and automation workflows.
                  </p>
                </SpotlightCard>

                <SpotlightCard className="p-6 text-left" spotlightColor="rgba(255, 75, 75, 0.08)">
                  <h3 className="font-heading text-base font-bold text-brand-dark-blue dark:text-white mb-2">
                    💼 Venture Capital 101
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed">
                    Understand cap table splits, options pools, term sheets, seed funding criteria, and startup operations metrics.
                  </p>
                </SpotlightCard>
              </div>
            </div>

            {/* Daily Quizzes final CTA */}
            <div className="rounded-3xl border border-brand-green/20 bg-brand-green/5 p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-green/5 via-brand-yellow/5 to-transparent -z-10 animate-pulse" />
              <div className="max-w-2xl mx-auto space-y-6">
                <h2 className="font-heading text-2xl sm:text-3xl font-black text-brand-dark-blue dark:text-white">
                  Addicted to progress yet?
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground font-semibold max-w-md mx-auto">
                  Download the ArthaGroww app now, unlock daily challenges, and see why micro-learning is the fastest path to finance intelligence.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="h-12 bg-brand-blue hover:bg-brand-blue/95 text-white font-extrabold text-xs px-8 rounded-xl flex items-center justify-center gap-1.5 shadow-glow-blue">
                    Download for iOS
                  </Button>
                  <Button className="h-12 bg-brand-green hover:bg-brand-green/95 text-white font-extrabold text-xs px-8 rounded-xl flex items-center justify-center gap-1.5 shadow-glow-green">
                    Download for Android
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
