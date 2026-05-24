"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    id: "faq-1",
    question: "Is ArthaGroww really free to start?",
    answer: "Yes, 100%! All our foundational tracks—including Stock Markets 101, Budgeting Basics, and Intro to Generative AI—are completely free of cost. You can learn, keep your streaks, climb the weekly leaderboard, and earn XP badges without entering any payment card.",
  },
  {
    id: "faq-2",
    question: "Who is this platform designed for?",
    answer: "ArthaGroww is custom-built for Gen Z high school students, college undergraduates, and young professionals. If you find standard corporate finance textbooks or technical crypto articles confusing, our bite-sized interactive Duolingo-style modules will make you an expert in no time.",
  },
  {
    id: "faq-3",
    question: "How does the AI personalized roadmap work?",
    answer: "When you first sign up, you choose your career goals. As you answer daily interactive quizzes and simulation quests, our AI content engine evaluates your performance and adapts the complexity of upcoming lessons, ensuring you're never bored or overwhelmed.",
  },
  {
    id: "faq-4",
    question: "What is included in ArthaGroww Pro?",
    answer: "ArthaGroww Pro unlocks our high-tier premium benefits: 1-on-1 personalized tutoring with our AI Financial Mentor, advanced portfolio simulation engines with live data feeds, completely ad-free focus loops, accredited credentials certificates, and access to premium active investor Discord group channels.",
  },
  {
    id: "faq-5",
    question: "Can I use ArthaGroww on my web browser?",
    answer: "Yes! While the primary experience is tailored for our mobile companion app (iOS and Android), this web landing portal offers interactive quizzes, compound interest calculators, and custom learning dashboards accessible on any tablet, desktop, or mobile browser.",
  },
];

export default function FAQ() {
  return (
    <section id="faqs" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold text-brand-blue uppercase tracking-wider">
            Got Questions?
          </div>
          <h2 className="font-heading mt-4 text-4xl sm:text-5xl font-extrabold text-brand-dark-blue dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-medium">
            Everything you need to know about the ArthaGroww platform.
          </p>
        </div>

        {/* Shadcn Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-border/50 bg-card p-6 md:p-8 shadow-sm"
        >
          <Accordion className="w-full">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-border/50 py-2 last:border-b-0">
                <AccordionTrigger className="text-sm sm:text-base font-extrabold text-brand-dark-blue dark:text-white hover:text-brand-blue hover:no-underline transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans font-medium pt-1 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
}
