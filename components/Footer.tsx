"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const FOOTER_LINKS = {
  about: [
    { label: "Our Story", href: "/our-story" },
    { label: "Careers", href: "/careers" },
    { label: "Press Kit", href: "/press-kit" },
    { label: "Trust & Safety", href: "/trust-safety" },
  ],
  features: [
    { label: "AI Mentor", href: "/ai-mentor" },
    { label: "Leagues & XP", href: "/leagues-and-xp" },
    { label: "Daily Quizzes", href: "/daily-quizzes" },
    { label: "Simulators", href: "/simulators" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card py-16 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Logo & Brand statement */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white shadow">
                <Image
                  src="/assets/logo.png"
                  alt="ArthaGroww Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-brand-dark-blue dark:text-white">
                Artha<span className="text-brand-green">Groww</span>
              </span>
            </Link>
            
            <p className="text-sm text-muted-foreground leading-relaxed font-sans font-medium">
              We help high-school, college students and young professionals master practical money intelligence and career tech through bite-sized, gamified daily quests.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter X link" className="h-10 w-10 border border-border/80 hover:border-brand-blue hover:text-brand-blue rounded-xl flex items-center justify-center transition-all duration-300 text-muted-foreground hover:text-brand-blue">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram link" className="h-10 w-10 border border-border/80 hover:border-brand-blue hover:text-brand-blue rounded-xl flex items-center justify-center transition-all duration-300 text-muted-foreground hover:text-brand-blue">
                <svg className="h-5 w-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="Github link" className="h-10 w-10 border border-border/80 hover:border-brand-blue hover:text-brand-blue rounded-xl flex items-center justify-center transition-all duration-300 text-muted-foreground hover:text-brand-blue">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.523-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-5 grid grid-cols-3 gap-8">
            <div>
              <h4 className="font-heading text-sm font-bold text-brand-dark-blue dark:text-white uppercase tracking-wider mb-5">About</h4>
              <ul className="space-y-3.5">
                {FOOTER_LINKS.about.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-xs font-semibold text-muted-foreground hover:text-brand-blue transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm font-bold text-brand-dark-blue dark:text-white uppercase tracking-wider mb-5">Features</h4>
              <ul className="space-y-3.5">
                {FOOTER_LINKS.features.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-xs font-semibold text-muted-foreground hover:text-brand-blue transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm font-bold text-brand-dark-blue dark:text-white uppercase tracking-wider mb-5">Legal</h4>
              <ul className="space-y-3.5">
                {FOOTER_LINKS.legal.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-xs font-semibold text-muted-foreground hover:text-brand-blue transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter signup column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold text-brand-dark-blue dark:text-white uppercase tracking-wider mb-5">Daily Wealth Digest</h4>
            <p className="text-xs text-muted-foreground leading-relaxed font-sans font-medium">
              Join 12,000+ subscribers reading our weekly 3-minute financial tips.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full text-xs font-semibold bg-muted/50 border border-border/80 focus:border-brand-blue rounded-xl px-3.5 outline-none"
              />
              <Button size="icon" className="bg-brand-blue text-white rounded-xl hover:bg-brand-blue/90 shrink-0">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

        </div>

        {/* Lower footer copyright */}
        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground font-semibold font-sans gap-4">
          <span>&copy; {new Date().getFullYear()} ArthaGroww EdTech Inc. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Designed for Gen Z with <Heart className="h-3.5 w-3.5 text-brand-coral fill-brand-coral" /> globally.
          </span>
        </div>

      </div>
    </footer>
  );
}
