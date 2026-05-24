"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl relative">
        
        {/* Glow behind final CTA */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-green/20 blur-[100px] rounded-full opacity-60 z-0 animate-pulse scale-90" />

        <div className="rounded-[40px] border border-border/40 bg-card/60 backdrop-blur-2xl p-12 md:p-20 text-center relative z-10 shadow-2xl overflow-hidden shadow-glow-blue">
          
          {/* Subtle design details */}
          <div className="absolute top-[-30px] left-[-30px] w-36 h-36 bg-brand-blue/10 blur-xl rounded-full" />
          <div className="absolute bottom-[-30px] right-[-30px] w-36 h-36 bg-brand-green/10 blur-xl rounded-full" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-1.5 rounded-xl bg-brand-blue/10 px-4 py-2 border border-brand-blue/20 text-xs font-bold text-brand-blue">
              <Star className="h-4 w-4 fill-brand-blue" />
              JOIN 150,000+ YOUNG BUILDERS TODAY
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-dark-blue dark:text-white leading-[1.1] tracking-tight">
              Start building your financial future today
            </h2>

            <p className="text-muted-foreground font-medium text-base sm:text-lg max-w-xl mx-auto">
              Master stocks, compound growth, and generative AI skills in 10 minutes a day. Download ArthaGroww now.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button className="w-full sm:w-auto h-14 bg-brand-blue text-white hover:bg-brand-blue/90 font-bold px-8 rounded-2xl shadow-glow-blue group text-base">
                Get Started Free
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto h-14 border-2 border-border font-bold px-8 rounded-2xl text-base flex items-center justify-center gap-2 hover:bg-muted/50">
                <Smartphone className="h-5 w-5 text-brand-blue" />
                Download App
              </Button>
            </div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
}
