"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Smartphone, Compass, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Bento Grid", href: "#bento" },
  { label: "Showcase", href: "#showcase" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "ArthaGroww Pro", href: "#pro" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate Scroll Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      
      // Update scrolled state
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "border-b border-border/40 bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-blue via-brand-green to-brand-yellow transition-all duration-100 z-50" 
        style={{ width: `${scrollProgress}%` }} 
      />

      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            <Image
              src="/assets/logo.png"
              alt="ArthaGroww Logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <span className="font-heading text-xl font-bold tracking-tight text-brand-dark-blue dark:text-white transition-colors duration-300 group-hover:text-brand-blue">
            Artha<span className="text-brand-green">Groww</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-muted-foreground relative py-1 transition-colors hover:text-brand-blue group/link"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-blue transition-all duration-300 group-hover/link:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button 
            variant="ghost" 
            className="gap-2 text-brand-dark-blue dark:text-white font-bold hover:text-brand-blue hover:bg-brand-blue/5 rounded-xl transition-all duration-300"
          >
            <Smartphone className="h-4 w-4 text-brand-blue" />
            Download App
          </Button>
          <Button className="bg-brand-blue text-white shadow-glow-blue hover:bg-brand-blue/95 hover:shadow-2xl font-bold group rounded-xl px-5 transition-all duration-300 relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-1">
              Start Learning
              <ArrowRight className="h-4 w-4 ml-0.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </div>

        {/* Mobile Navigation Menu Trigger */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="h-10 w-10 text-brand-dark-blue dark:text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              }
            />
            <SheetContent side="right" className="w-[300px] border-l border-border/40 bg-background/95 backdrop-blur-md p-6">
              <SheetHeader className="text-left mb-6">
                <SheetTitle className="flex items-center gap-2">
                  <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-white shadow">
                    <Image
                      src="/assets/logo.png"
                      alt="ArthaGroww Logo"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="font-heading text-lg font-bold text-brand-dark-blue dark:text-white">
                    Artha<span className="text-brand-green">Groww</span>
                  </span>
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col gap-5 mt-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-semibold text-muted-foreground transition-colors hover:text-brand-blue flex items-center gap-2 py-1"
                  >
                    <Compass className="h-4 w-4 text-brand-blue/80" />
                    {link.label}
                  </Link>
                ))}
                
                <hr className="border-border/40 my-2" />
                
                <div className="flex flex-col gap-3">
                  <Button variant="outline" className="w-full gap-2 border-border/60 justify-center font-medium rounded-xl h-11">
                    <Smartphone className="h-4 w-4 text-brand-blue" />
                    Download App
                  </Button>
                  <Button className="w-full bg-brand-blue text-white shadow-glow-blue hover:bg-brand-blue/90 font-semibold justify-center rounded-xl h-11">
                    Start Learning
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
