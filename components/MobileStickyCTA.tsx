"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-sm pointer-events-auto rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-md p-3.5 shadow-2xl flex items-center justify-between shadow-glow-green"
      >
        <div className="flex items-center gap-3.5 pl-1.5">
          <div className="relative h-9 w-9 bg-brand-green/20 border border-brand-green/30 flex items-center justify-center rounded-xl animate-pulse">
            <Smartphone className="h-4.5 w-4.5 text-brand-green" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-white flex items-center gap-1">
              ArthaGroww App
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand-green"></span>
            </div>
            <div className="text-[10px] text-slate-400 font-bold">100% Free Gamified Learning</div>
          </div>
        </div>

        <Button className="h-10 bg-brand-green text-white hover:bg-brand-green/90 font-extrabold text-xs px-4 rounded-xl flex items-center gap-1.5 shadow-glow-green">
          <Download className="h-3.5 w-3.5" />
          Download
        </Button>
      </motion.div>
    </div>
  );
}
