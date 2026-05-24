"use client";

import { motion } from "framer-motion";

export default function BackgroundGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"
      />

      {/* Animated Floating Blurred Orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] max-w-[500px] rounded-full bg-brand-blue/20 blur-[100px] dark:bg-brand-blue/15"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[25%] right-[-5%] w-[40vw] h-[40vw] max-w-[450px] rounded-full bg-brand-green/25 blur-[110px] dark:bg-brand-green/10"
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 50, -20, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[550px] rounded-full bg-brand-yellow/15 blur-[120px] dark:bg-brand-yellow/10"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.08, 0.92, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[60%] right-[15%] w-[35vw] h-[35vw] max-w-[380px] rounded-full bg-brand-coral/15 blur-[95px] dark:bg-brand-coral/5"
        animate={{
          scale: [0.9, 1.15, 0.9],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
