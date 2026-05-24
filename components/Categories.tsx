"use client";

import { motion } from "framer-motion";
import { Landmark, BrainCircuit, Rocket, BarChart3, Database, ShieldAlert } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const CATEGORIES = [
  {
    icon: <Landmark className="h-7 w-7 text-brand-blue" />,
    title: "Finance & Budgeting",
    description: "Learn compound interest, inflation, debt rules, and high-yielding savings methods early.",
    tags: ["Compounding", "Debt Rules", "Tax Hacks"],
    spotlight: "rgba(28, 176, 246, 0.12)",
    border: "rgba(28, 176, 246, 0.3)",
    color: "bg-brand-blue/5 text-brand-blue border-brand-blue/20",
  },
  {
    icon: <BrainCircuit className="h-7 w-7 text-brand-green" />,
    title: "AI & Automation",
    description: "Master prompt engineering, workflow automation, and how to use modern generative tools to scale productivity.",
    tags: ["LLM Prompting", "Workflows", "No-Code Build"],
    spotlight: "rgba(88, 204, 2, 0.12)",
    border: "rgba(88, 204, 2, 0.3)",
    color: "bg-brand-green/5 text-brand-green border-brand-green/20",
  },
  {
    icon: <Rocket className="h-7 w-7 text-brand-yellow" />,
    title: "Entrepreneurship",
    description: "How to launch your first micro-startup, design validation experiments, pitch to customers, and bootstrap.",
    tags: ["MVP Building", "Pitch Decks", "Sales 101"],
    spotlight: "rgba(255, 200, 0, 0.12)",
    border: "rgba(255, 200, 0, 0.3)",
    color: "bg-brand-yellow/5 text-brand-yellow border-brand-yellow/20",
  },
  {
    icon: <BarChart3 className="h-7 w-7 text-brand-coral" />,
    title: "Stock Market Basics",
    description: "Demystify standard stocks, index funds, mutual funds, market order types, and basic fundamental analysis.",
    tags: ["Stock Analysis", "ETFs", "Index Funds"],
    spotlight: "rgba(255, 75, 75, 0.12)",
    border: "rgba(255, 75, 75, 0.3)",
    color: "bg-brand-coral/5 text-brand-coral border-brand-coral/20",
  },
  {
    icon: <Database className="h-7 w-7 text-indigo-500" />,
    title: "Crypto & Web3",
    description: "Understand smart contracts, wallets, public ledger keys, gas costs, DeFi lending pools, and safe security practices.",
    tags: ["Blockchain", "Wallets", "Smart Contracts"],
    spotlight: "rgba(99, 102, 241, 0.12)",
    border: "rgba(99, 102, 241, 0.3)",
    color: "bg-indigo-500/5 text-indigo-500 border-indigo-500/20",
  },
];

export default function Categories() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg-soft/40 dark:bg-brand-dark-blue/40 border-y border-border/30 px-4 sm:px-6 lg:px-8">
      
      {/* Background radial spotlight transition overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(28,176,246,0.06),transparent_60%)] pointer-events-none z-0" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header Narrative */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 mb-20">
          <div className="text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green uppercase tracking-wider">
              High-Fidelity Learning Paths
            </div>
            
            <h2 className="font-heading mt-4 text-4xl sm:text-5xl font-black text-brand-dark-blue dark:text-white tracking-tight">
              Interactive Career Disciplines
            </h2>
            
            <p className="mt-4 text-base sm:text-lg text-muted-foreground font-medium">
              We skipped the static video modules. Learn standard economic principles, artificial intelligence, and startup loops in under 10 minutes a day.
            </p>
          </div>
          
          <button className="h-12 border-2 border-border/80 text-sm font-bold px-6 rounded-2xl transition-all duration-300 hover:bg-muted/50 hover:border-brand-blue/30 hover:text-brand-blue shrink-0">
            View Complete Syllabus
          </button>
        </div>

        {/* Curriculum list with spotlight grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor={cat.spotlight}
                borderColor={cat.border}
                className="p-8 h-full flex flex-col justify-between"
              >
                <div>
                  <div className={`p-4 w-fit rounded-2xl border mb-6 ${cat.color} shadow-sm`}>
                    {cat.icon}
                  </div>
                  
                  <h3 className="font-heading text-xl font-black text-brand-dark-blue dark:text-white">
                    {cat.title}
                  </h3>
                  
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 pt-2 border-t border-border/40">
                  {cat.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-bold px-3 py-1.5 rounded-xl bg-muted/50 text-muted-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
          
          {/* Promo suggestions block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 5 * 0.08 }}
            className="h-full"
          >
            <SpotlightCard
              spotlightColor="rgba(28, 176, 246, 0.08)"
              borderColor="rgba(28, 176, 246, 0.2)"
              className="p-8 h-full bg-brand-blue/5 dark:bg-brand-blue/10 border-dashed border-brand-blue/30 flex flex-col justify-between"
            >
              <div>
                <div className="p-4 w-fit rounded-2xl mb-6 bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                  <ShieldAlert className="h-7 w-7 text-brand-blue" />
                </div>
                
                <h3 className="font-heading text-xl font-black text-brand-dark-blue dark:text-white">
                  Vote on New Tracks!
                </h3>
                
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-sans font-medium">
                  We generate customized new tracks monthly based on active weekly leagues and trending tech. Suggest what you want to unlock next.
                </p>
              </div>

              <button className="mt-8 w-full py-3.5 bg-brand-blue text-white rounded-2xl font-bold hover:bg-brand-blue/95 hover:shadow-2xl shadow-glow-blue transition-all duration-300">
                Submit Recommendation
              </button>
            </SpotlightCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
