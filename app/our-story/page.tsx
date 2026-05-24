"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Compass, Trophy, TrendingUp, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";
import SmoothScroll from "@/components/SmoothScroll";
import SpotlightCard from "@/components/SpotlightCard";

const MILESTONES = [
  {
    year: "2024",
    title: "The Spark",
    desc: "ArthaGroww was founded by a team of SaaS engineers and financial architects who realized traditional schooling taught everything except capital allocation.",
    icon: <Compass className="h-5 w-5 text-brand-blue" />,
    color: "rgba(28, 176, 246, 0.15)",
    border: "rgba(28, 176, 246, 0.3)",
  },
  {
    year: "2025",
    title: "100K active Learners",
    desc: "Launched our gamified companion app. Our micro-learning streaks immediately clicked with high school and college undergraduates.",
    icon: <Trophy className="h-5 w-5 text-brand-yellow" />,
    color: "rgba(255, 200, 0, 0.15)",
    border: "rgba(255, 200, 0, 0.3)",
  },
  {
    year: "2026",
    title: "The Overhaul Integration",
    desc: "Introduced advanced AI mentors, structured coding tracks, and compound simulated trading suites to create a full startup-grade platform.",
    icon: <Sparkles className="h-5 w-5 text-brand-green" />,
    color: "rgba(88, 204, 2, 0.15)",
    border: "rgba(88, 204, 2, 0.3)",
  },
];

export default function OurStory() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SmoothScroll />
      <BackgroundGrid />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            
            {/* Page Header */}
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4.5 py-1.5 text-xs font-bold text-brand-blue shadow-sm"
              >
                <Heart className="h-4 w-4 fill-brand-blue" />
                OUR MISSION & CHARTER
              </motion.div>
              
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark-blue dark:text-white tracking-tight leading-none">
                Learn. Grow. Earn.
              </h1>
              
              <p className="text-muted-foreground font-medium text-base sm:text-lg max-w-xl mx-auto">
                ArthaGroww was built to close the practical money intelligence and career technology gap for young builders globally.
              </p>
            </div>

            {/* Split Narrative Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-24">
              
              <div className="md:col-span-7 space-y-6 text-left">
                <h2 className="font-heading text-2xl sm:text-3xl font-black text-brand-dark-blue dark:text-white">
                  Why traditional classrooms skip capital intelligence
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
                  We are forced to learn algebraic proofs and historical timelines, yet enter adult life with zero understanding of tax files, compound interest, index funds, or launch loops. This systemic gap creates severe wealth inequality.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
                  ArthaGroww changes this dynamic permanently. We combine the gamified habit systems of gaming apps with elite financial simulation calculators to make capital allocation fun and understandable.
                </p>
              </div>

              <div className="md:col-span-5">
                <SpotlightCard className="p-8 shadow-md text-left" spotlightColor="rgba(28, 176, 246, 0.15)">
                  <h3 className="font-heading text-xl font-black text-brand-dark-blue dark:text-white">
                    Our Philosophy
                  </h3>
                  <ul className="mt-4 space-y-4 text-xs sm:text-sm text-muted-foreground font-medium">
                    <li className="flex gap-2">
                      <span className="text-brand-blue font-bold">1.</span>
                      <span>Students first. Learning must be completely interactive, not a series of slides.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand-green font-bold">2.</span>
                      <span>Bite-sized execution. Build focus loops in under ten minutes a day.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand-yellow font-bold">3.</span>
                      <span>Practical tech tracks. Finance, AI automation, Web3 structures, and Startup launches go hand-in-hand.</span>
                    </li>
                  </ul>
                </SpotlightCard>
              </div>

            </div>

            {/* Interactive Timeline */}
            <div className="space-y-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-brand-dark-blue dark:text-white text-center mb-16">
                Our Journey & Milestones
              </h2>

              <div className="relative border-l-2 border-border/60 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-3 md:gap-8 space-y-8 md:space-y-0">
                {MILESTONES.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <SpotlightCard
                      spotlightColor={m.color}
                      borderColor={m.border}
                      className="p-6 relative text-left"
                    >
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="p-2.5 rounded-xl bg-background border border-border shadow-sm">
                          {m.icon}
                        </div>
                        <span className="text-lg font-black text-brand-blue">{m.year}</span>
                      </div>
                      
                      <h3 className="font-heading text-base font-bold text-brand-dark-blue dark:text-white">
                        {m.title}
                      </h3>
                      
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-semibold">
                        {m.desc}
                      </p>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
