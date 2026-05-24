"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles, Send, Bot, User, ArrowRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";
import SmoothScroll from "@/components/SmoothScroll";
import SpotlightCard from "@/components/SpotlightCard";

const SAMPLE_PROMPTS = [
  "Explain 'Compound Interest' using a coffee analogy ☕",
  "How does a dynamic start-up 'Cap Table' work? 📊",
  "Why is index fund investing recommended over day trading? 📈",
];

export default function AiMentor() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hey Arjun! I'm your ArthaGroww AI Mentor. Ask me any financial or business question, and I'll break it down into a bite-sized explanation!",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    // User message
    const userMsg = { sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Dynamic Mock AI Responses
    setTimeout(() => {
      let replyText = "That's an excellent question! Here's a bite-sized breakdown: ";
      if (text.includes("Compound") || text.includes("coffee")) {
        replyText += "Think of compounding like buying a coffee maker. Instead of spending $5 on coffee daily (interest), you invest it. Soon, that machine generates savings, which buys *another* machine. Over Yrs, you own a coffee factory! ☕";
      } else if (text.includes("Cap Table") || text.includes("Cap")) {
        replyText += "A Cap Table is a pie chart of who owns what in a startup. Founders, early employees, and VCs all own slices. As you raise capital, new slices are made, which shrinks (dilutes) existing slices, but the overall pie gets much bigger! 📊";
      } else if (text.includes("index") || text.includes("trading")) {
        replyText += "Index funds buy a slice of the entire stock market (like the top 500 companies). Day trading is like betting on a single horse. Index funds grow steadily with the whole economy, while day trading exposes you to extreme risk. 📈";
      } else {
        replyText += "Let's explore this together! In finance, understanding general systems risk-free is the first step. Maintain your daily streak to unlock our complete track lessons on this topic!";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: replyText }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SmoothScroll />
      <BackgroundGrid />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            
            {/* Header Hero */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/20 bg-brand-yellow/5 px-4.5 py-1.5 text-xs font-bold text-brand-yellow shadow-sm animate-pulse"
              >
                <Brain className="h-4 w-4 text-brand-yellow" />
                ADAPTIVE COGNITIVE ENGINE
              </motion.div>
              
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark-blue dark:text-white tracking-tight leading-none">
                AI Personalized Mentor
              </h1>
              
              <p className="text-muted-foreground font-medium text-base sm:text-lg max-w-xl mx-auto">
                Ask questions risk-free and receive immediate, gamified analogies. Duolingo meets ChatGPT.
              </p>
            </div>

            {/* Chat Sandbox & Interactive Mockup */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
              
              {/* Left Column: Sandbox Description */}
              <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-6">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-black text-brand-dark-blue dark:text-white">
                    Personalized study routes
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed font-semibold">
                    Traditional textbooks are static. Our cognitive assistant breaks down complex economic and programming jargon into simple, high-fidelity real-world analogies.
                  </p>
                  
                  {/* Prompt Suggestions */}
                  <div className="mt-8 space-y-3">
                    <span className="text-xs font-black text-slate-800 dark:text-slate-200 block uppercase tracking-wider">Try these queries:</span>
                    {SAMPLE_PROMPTS.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(prompt)}
                        className="w-full text-left text-xs font-bold p-3.5 rounded-2xl border border-border bg-card hover:border-brand-blue hover:text-brand-blue transition-all duration-200 block shadow-sm"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border/40 flex items-center gap-2">
                  <Lightbulb className="h-4.5 w-4.5 text-brand-yellow fill-brand-yellow/10" />
                  <span className="text-[11px] text-muted-foreground font-semibold">AI Mentor access is free in all introductory paths.</span>
                </div>
              </div>

              {/* Right Column: Live Chat Interface Mockup */}
              <div className="lg:col-span-7">
                <SpotlightCard
                  spotlightColor="rgba(255, 200, 0, 0.12)"
                  borderColor="rgba(255, 200, 0, 0.25)"
                  className="p-5 h-[480px] flex flex-col justify-between shadow-2xl relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 blur-[50px] rounded-full" />
                  
                  {/* Chat logs */}
                  <div className="flex-grow overflow-y-auto space-y-4 pr-1 mb-4">
                    {messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex gap-3 items-start max-w-[85%] ${
                          msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                        }`}
                      >
                        <div
                          className={`h-8.5 w-8.5 rounded-full flex items-center justify-center shrink-0 text-sm ${
                            msg.sender === "user" 
                              ? "bg-brand-blue/15 border border-brand-blue/30 text-brand-blue" 
                              : "bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow"
                          }`}
                        >
                          {msg.sender === "user" ? <User className="h-4.5 w-4.5" /> : <Bot className="h-4.5 w-4.5" />}
                        </div>
                        <div
                          className={`p-3.5 rounded-2xl text-xs font-bold border text-left leading-relaxed ${
                            msg.sender === "user"
                              ? "bg-brand-blue text-white border-transparent shadow-sm"
                              : "bg-muted/40 border-border text-slate-800 dark:text-slate-200"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}

                    {/* Typing state */}
                    {isTyping && (
                      <div className="flex gap-3 items-start mr-auto">
                        <div className="h-8.5 w-8.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow flex items-center justify-center shrink-0">
                          <Bot className="h-4.5 w-4.5 animate-pulse" />
                        </div>
                        <div className="p-3.5 rounded-2xl bg-muted/40 border border-border text-slate-400 font-bold text-xs flex gap-1.5 items-center">
                          <span>AI Mentor is thinking</span>
                          <span className="animate-bounce">.</span>
                          <span className="animate-bounce delay-100">.</span>
                          <span className="animate-bounce delay-200">.</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input bar */}
                  <div className="flex gap-2 relative z-10 pt-2 border-t border-border/40">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                      placeholder="Ask me a query (e.g. Compound coffee)..."
                      className="w-full text-xs font-semibold bg-muted/40 border border-border/60 focus:border-brand-yellow rounded-xl px-4 outline-none"
                    />
                    <Button
                      onClick={() => handleSend(input)}
                      size="icon"
                      className="bg-brand-yellow text-slate-900 rounded-xl hover:bg-brand-yellow/90 shrink-0 h-10 w-10 shadow-glow-yellow"
                    >
                      <Send className="h-4 w-4 fill-slate-900" />
                    </Button>
                  </div>
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
