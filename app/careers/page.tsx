"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Globe, Heart, Rocket, ShieldCheck, Mail, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";
import SmoothScroll from "@/components/SmoothScroll";
import SpotlightCard from "@/components/SpotlightCard";
import { Button } from "@/components/ui/button";

const ROLES = [
  {
    title: "Senior Frontend Engineer (Next.js)",
    dept: "Engineering",
    location: "Remote (IST/EST)",
    type: "Full-Time",
    desc: "Build fluid motion layouts, interactive dashboards, and design custom calculator systems using Tailwind CSS v4 and Framer Motion.",
    spotlight: "rgba(28, 176, 246, 0.12)",
    border: "rgba(28, 176, 246, 0.25)",
  },
  {
    title: "Lead AI Research Engineer",
    dept: "Engineering",
    location: "Remote (IST)",
    type: "Full-Time",
    desc: "Train and integrate custom adaptive curriculum roadmaps that adjust quiz questions dynamically based on student performance vectors.",
    spotlight: "rgba(88, 204, 2, 0.12)",
    border: "rgba(88, 204, 2, 0.25)",
  },
  {
    title: "Senior Motion Designer / UX",
    dept: "Design",
    location: "Remote (EST)",
    type: "Full-Time",
    desc: "Create premium startup vectors, 3D device mockups, fluid scroll-snapping progressions, and delight triggers.",
    spotlight: "rgba(255, 200, 0, 0.12)",
    border: "rgba(255, 200, 0, 0.25)",
  },
  {
    title: "Curriculum Architect (Finance)",
    dept: "Education",
    location: "Remote (Anywhere)",
    type: "Full-Time",
    desc: "Design standard stock market, crypto, Web3 wallet security, and startup capital-scaling bite-sized quiz quest guides.",
    spotlight: "rgba(255, 75, 75, 0.12)",
    border: "rgba(255, 75, 75, 0.25)",
  },
];

const PERKS = [
  { icon: <Globe className="h-5 w-5 text-brand-blue" />, title: "Remote-First", desc: "Work from anywhere in the world. Flexible hours." },
  { icon: <Heart className="h-5 w-5 text-brand-coral fill-brand-coral" />, title: "Full Coverage", desc: "Top-tier global medical, dental, and wellness support." },
  { icon: <Rocket className="h-5 w-5 text-brand-green" />, title: "Learning Budget", desc: "Annual stipend to buy books, courses, and attend conferences." },
];

export default function Careers() {
  const [filter, setFilter] = useState("All");

  const depts = ["All", "Engineering", "Design", "Education"];

  const filteredRoles = filter === "All" ? ROLES : ROLES.filter((r) => r.dept === filter);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SmoothScroll />
      <BackgroundGrid />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            
            {/* Page Header */}
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green/5 px-4.5 py-1.5 text-xs font-bold text-brand-green shadow-sm"
              >
                <Briefcase className="h-4 w-4 text-brand-green" />
                JOIN THE MISSION
              </motion.div>
              
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark-blue dark:text-white tracking-tight leading-none">
                Build the future of EdTech
              </h1>
              
              <p className="text-muted-foreground font-medium text-base sm:text-lg max-w-xl mx-auto">
                Join a highly collaborative, remote-first team of SaaS engineers, designers, and curriculum creators building financial literacy habit engines.
              </p>
            </div>

            {/* Perks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {PERKS.map((perk, idx) => (
                <SpotlightCard key={idx} className="p-6 text-left" spotlightColor="rgba(88, 204, 2, 0.08)">
                  <div className="p-3 w-fit rounded-xl bg-background border border-border mb-4 shadow-sm">
                    {perk.icon}
                  </div>
                  <h3 className="font-heading text-base font-bold text-brand-dark-blue dark:text-white">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed">
                    {perk.desc}
                  </p>
                </SpotlightCard>
              ))}
            </div>

            {/* Careers Board */}
            <div className="space-y-12">
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-border/40 pb-6">
                <h2 className="font-heading text-2xl sm:text-3xl font-black text-brand-dark-blue dark:text-white">
                  Open Positions
                </h2>
                
                {/* Department Filter Tabs */}
                <div className="flex flex-wrap gap-1 bg-muted/60 p-1.5 rounded-2xl border border-border/60">
                  {depts.map((d) => (
                    <button
                      key={d}
                      onClick={() => setFilter(d)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                        filter === d
                          ? "bg-brand-blue text-white shadow-sm"
                          : "text-muted-foreground hover:text-brand-blue"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Roles List */}
              <div className="grid grid-cols-1 gap-6">
                {filteredRoles.map((role, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <SpotlightCard
                      spotlightColor={role.spotlight}
                      borderColor={role.border}
                      className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left"
                    >
                      <div className="space-y-3.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-black px-3 py-1 rounded-xl bg-brand-blue/10 text-brand-blue">
                            {role.dept}
                          </span>
                          <span className="text-xs font-bold text-muted-foreground">
                            {role.location} • {role.type}
                          </span>
                        </div>
                        
                        <h3 className="font-heading text-lg sm:text-xl font-black text-brand-dark-blue dark:text-white">
                          {role.title}
                        </h3>
                        
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl font-medium">
                          {role.desc}
                        </p>
                      </div>

                      <Button className="w-full md:w-auto h-11 bg-brand-blue hover:bg-brand-blue/95 text-white font-extrabold text-xs px-6 rounded-xl flex items-center justify-center gap-1.5 shadow-glow-blue shrink-0">
                        Apply Now
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>

              {/* General Applications CTA */}
              <div className="max-w-2xl mx-auto text-center pt-12 space-y-4">
                <h3 className="font-heading text-lg font-black text-brand-dark-blue dark:text-white">
                  Don't see your perfect slot?
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-semibold max-w-md mx-auto">
                  We are always looking for stellar builders, UI designers, and financial curriculum developers. Send your general profile to:
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/40 border border-border font-bold text-xs">
                  <Mail className="h-4.5 w-4.5 text-brand-blue" />
                  <a href="mailto:contact.arthagroww@gmail.com" className="text-brand-blue hover:underline">
                    contact.arthagroww@gmail.com
                  </a>
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
