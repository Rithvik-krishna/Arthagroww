"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Cpu, Award, Milestone } from "lucide-react";

const REASONS = [
  {
    icon: <TrendingUp className="h-6 w-6 text-brand-blue" />,
    title: "Practical Financial Literacy",
    desc: "Ditch the complex formulas. Learn how budgeting, index funds, inflation, and compound interest work in your everyday life.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-brand-green" />,
    title: "AI & Finance Combined",
    desc: "Don't just learn traditional finance. Understand how AI automation and crypto tech intersect with the future of wealth building.",
  },
  {
    icon: <Award className="h-6 w-6 text-brand-yellow" />,
    title: "Gamification That Works",
    desc: "Keep your daily habits strong with streak counts, multipliers, global leagues, daily quizzes, and levels that feel like a game.",
  },
  {
    icon: <Milestone className="h-6 w-6 text-brand-coral" />,
    title: "Personalized Study Paths",
    desc: "Our active AI mentor evaluates your progress and adapts your lessons dynamically to focus on what matters to you.",
  },
];

export default function WhyArthaGroww() {
  return (
    <section className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading & Graphic */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold text-brand-blue uppercase tracking-wider">
              Educational Revolution
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-brand-dark-blue dark:text-white leading-tight">
              Built for the next generation of builders
            </h2>
            
            <p className="text-muted-foreground font-medium text-base sm:text-lg">
              ArthaGroww combines standard economic theory with modern tech tools. Master wealth concepts before entering college or starting your career.
            </p>

            <div className="pt-4 flex flex-col items-stretch max-w-sm mx-auto lg:mx-0 gap-3 text-left">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-brand-green/5 border border-brand-green/20">
                <CheckCircle2 className="h-5 w-5 text-brand-green shrink-0" />
                <span className="text-xs font-extrabold text-brand-green">100% student-focused curriculum</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-brand-blue/5 border border-brand-blue/20">
                <CheckCircle2 className="h-5 w-5 text-brand-blue shrink-0" />
                <span className="text-xs font-extrabold text-brand-blue">No financial background required</span>
              </div>
            </div>
          </div>

          {/* Right Column: Reasons Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REASONS.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl border border-border/40 bg-card/60 backdrop-blur-xl shadow-sm hover:border-transparent hover:shadow-glow-blue transition-all duration-300"
              >
                <div className="p-3 w-fit rounded-xl bg-background border border-border shadow-sm mb-4">
                  {reason.icon}
                </div>
                
                <h3 className="font-heading text-lg font-extrabold text-brand-dark-blue dark:text-white">
                  {reason.title}
                </h3>
                
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
