"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const TESTIMONIALS = [
  {
    name: "Arjun Kumar",
    role: "College Sophomore, Finance Major",
    quote: "ArthaGroww completely replaced my boring finance textbooks. The daily stock market and AI automation paths feel like playing a game, and the math actually makes sense now!",
    rating: 5,
    avatar: "🎒",
    spotlight: "rgba(28, 176, 246, 0.12)",
    border: "rgba(28, 176, 246, 0.25)",
  },
  {
    name: "Aditya Sen",
    role: "Freelance UI Designer & Dev",
    quote: "As a freelancer, taxes and investing were a nightmare. The compound interest simulations and micro-lessons on investing gave me the confidence to open my first index fund account.",
    rating: 5,
    avatar: "🎨",
    spotlight: "rgba(88, 204, 2, 0.12)",
    border: "rgba(88, 204, 2, 0.25)",
  },
  {
    name: "Meera Nair",
    role: "Aspiring Tech Entrepreneur",
    quote: "The entrepreneurship track helped me design and launch my first micro-SaaS validation page. I learned how to talk to users, pitch concepts, and manage a cap table.",
    rating: 5,
    avatar: "👩‍💻",
    spotlight: "rgba(255, 200, 0, 0.12)",
    border: "rgba(255, 200, 0, 0.25)",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg-soft/20 dark:bg-brand-dark-blue/20 border-y border-border/30 px-4 sm:px-6 lg:px-8">
      
      {/* Background blobs */}
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-brand-blue/5 blur-[95px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] bg-brand-green/5 blur-[95px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold text-brand-blue uppercase tracking-wider">
            Wall of Love
          </div>
          <h2 className="font-heading mt-4 text-4xl sm:text-5xl font-black text-brand-dark-blue dark:text-white tracking-tight">
            Loved by 150K+ Learners
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-medium">
            Hear from students and young professionals who are leveling up their financial futures.
          </p>
        </div>

        {/* Testimonials Grid using SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor={t.spotlight}
                borderColor={t.border}
                className="p-8 h-full flex flex-col justify-between group shadow-sm"
              >
                <Quote className="absolute top-6 right-8 h-10 w-10 text-muted-foreground/10 group-hover:text-brand-blue/15 transition-colors duration-300 pointer-events-none" />
                
                <div>
                  {/* Rating */}
                  <div className="flex gap-1 mb-6 text-brand-yellow">
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="h-4.5 w-4.5 fill-brand-yellow" />
                    ))}
                  </div>
                  
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author profile */}
                <div className="mt-8 pt-6 border-t border-border/40 flex items-center gap-3.5">
                  <span className="text-3xl select-none">{t.avatar}</span>
                  <div>
                    <div className="text-sm font-black text-brand-dark-blue dark:text-white">{t.name}</div>
                    <div className="text-[11px] text-muted-foreground font-bold">{t.role}</div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
