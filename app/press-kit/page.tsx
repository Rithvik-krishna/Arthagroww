"use client";

import { motion } from "framer-motion";
import { Award, ShieldAlert, Sparkles, Download, Calendar, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";
import SmoothScroll from "@/components/SmoothScroll";
import SpotlightCard from "@/components/SpotlightCard";
import { Button } from "@/components/ui/button";

const BRAND_COLORS = [
  { name: "Primary Blue", hex: "#1CB0F6", bg: "bg-[#1CB0F6]", text: "text-white" },
  { name: "Growth Green", hex: "#58CC02", bg: "bg-[#58CC02]", text: "text-white" },
  { name: "Energy Yellow", hex: "#FFC800", bg: "bg-[#FFC800]", text: "text-slate-900" },
  { name: "Warning Coral", hex: "#FF4B4B", bg: "bg-[#FF4B4B]", text: "text-white" },
];

export default function PressKit() {
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
                className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/20 bg-brand-yellow/5 px-4.5 py-1.5 text-xs font-bold text-brand-yellow shadow-sm"
              >
                <Award className="h-4 w-4 text-brand-yellow" />
                MEDIA & ASSETS PORTAL
              </motion.div>
              
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark-blue dark:text-white tracking-tight leading-none">
                Press & Brand Kit
              </h1>
              
              <p className="text-muted-foreground font-medium text-base sm:text-lg max-w-xl mx-auto">
                Download high-fidelity logos, active mockups, and review color charts for ArthaGroww EdTech products.
              </p>
            </div>

            {/* Layout grids */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-20">
              
              {/* Left Column: Narrative description */}
              <div className="md:col-span-6 space-y-6 text-left">
                <h2 className="font-heading text-2xl font-black text-brand-dark-blue dark:text-white">
                  Company Overview
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-semibold">
                  ArthaGroww is an elite gamified EdTech platform custom-built for Gen Z high school students, college undergraduates, and young professionals. Our mobile companion systems host bite-sized quizzes, habit streaks, global leagues, and compound interest wealth growth simulation widgets.
                </p>
                <h3 className="font-heading text-lg font-black text-brand-dark-blue dark:text-white mt-8">
                  Core Company Details
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground font-bold">
                  <li><strong className="text-slate-800 dark:text-slate-200">Founded:</strong> 2024</li>
                  <li><strong className="text-slate-800 dark:text-slate-200">Headquarters:</strong> Remote-First</li>
                  <li><strong className="text-slate-800 dark:text-slate-200">Users:</strong> 150,000+ globally</li>
                  <li><strong className="text-slate-800 dark:text-slate-200">Contact:</strong> contact.arthagroww@gmail.com</li>
                </ul>
              </div>

              {/* Right Column: Colors guide card */}
              <div className="md:col-span-6">
                <SpotlightCard className="p-6 text-left" spotlightColor="rgba(255, 200, 0, 0.1)">
                  <h3 className="font-heading text-lg font-black text-brand-dark-blue dark:text-white mb-6">
                    Brand Color Palette
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {BRAND_COLORS.map((color, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl border border-border bg-background flex flex-col items-center gap-3">
                        <div className={`h-11 w-11 rounded-full ${color.bg} shadow-sm border border-black/5`} />
                        <div className="text-center">
                          <span className="text-xs font-black text-brand-dark-blue dark:text-white block">{color.name}</span>
                          <span className="text-[10px] text-muted-foreground font-semibold">{color.hex}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </div>

            </div>

            {/* Asset downloads section */}
            <div className="space-y-8">
              <h2 className="font-heading text-2xl font-black text-brand-dark-blue dark:text-white text-center mb-12">
                Downloadable Media Assets
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Brand Logos */}
                <SpotlightCard className="p-6 text-left" spotlightColor="rgba(28, 176, 246, 0.08)">
                  <h4 className="font-heading text-base font-bold text-brand-dark-blue dark:text-white mb-2">
                    Official Logos Package
                  </h4>
                  <p className="text-xs text-muted-foreground font-semibold leading-relaxed mb-6">
                    Contains vector SVGs, transparent PNG formats, and high-fidelity lightbulb symbols.
                  </p>
                  <Button className="w-full h-11 bg-brand-blue hover:bg-brand-blue/95 text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-glow-blue">
                    <Download className="h-4 w-4" />
                    Download Logos (.ZIP)
                  </Button>
                </SpotlightCard>

                {/* Mobile screens */}
                <SpotlightCard className="p-6 text-left" spotlightColor="rgba(88, 204, 2, 0.08)">
                  <h4 className="font-heading text-base font-bold text-brand-dark-blue dark:text-white mb-2">
                    Companion Screenshots
                  </h4>
                  <p className="text-xs text-muted-foreground font-semibold leading-relaxed mb-6">
                    Includes the home dashboard, micro-quiz widgets, and Diamond League podium screenshots.
                  </p>
                  <Button className="w-full h-11 bg-brand-green hover:bg-brand-green/95 text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-glow-green">
                    <Download className="h-4 w-4" />
                    Download Screenshots
                  </Button>
                </SpotlightCard>

                {/* Presentation templates */}
                <SpotlightCard className="p-6 text-left" spotlightColor="rgba(255, 75, 75, 0.08)">
                  <h4 className="font-heading text-base font-bold text-brand-dark-blue dark:text-white mb-2">
                    Venture Pitch Deck
                  </h4>
                  <p className="text-xs text-muted-foreground font-semibold leading-relaxed mb-6">
                    Overview of the EdTech product values, student multiplier loops, and AI customized roadmap projections.
                  </p>
                  <Button className="w-full h-11 bg-brand-coral hover:bg-brand-coral/95 text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-glow-coral">
                    <Download className="h-4 w-4" />
                    Download Pitch Deck (.PDF)
                  </Button>
                </SpotlightCard>
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
