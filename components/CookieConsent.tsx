"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield, ShieldAlert, Check, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [prefs, setPrefs] = useState({
    essential: true,
    analytics: true,
    personalization: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("arthagroww-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2500); // delay banner appearing for aesthetic spacing
      return () => clearTimeout(timer);
    } else {
      setPrefs(JSON.parse(consent));
    }
  }, []);

  const handleAcceptAll = () => {
    const acceptAll = { essential: true, analytics: true, personalization: true, marketing: true };
    setPrefs(acceptAll);
    localStorage.setItem("arthagroww-cookie-consent", JSON.stringify(acceptAll));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const rejectAll = { essential: true, analytics: false, personalization: false, marketing: false };
    setPrefs(rejectAll);
    localStorage.setItem("arthagroww-cookie-consent", JSON.stringify(rejectAll));
    setIsVisible(false);
  };

  const handleSavePrefs = () => {
    localStorage.setItem("arthagroww-cookie-consent", JSON.stringify(prefs));
    setShowPreferences(false);
    setIsVisible(false);
  };

  return (
    <>
      {/* Bottom Floating Consent Banner */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-md z-45 p-5 rounded-3xl border border-border/40 bg-card/90 backdrop-blur-xl shadow-2xl flex flex-col gap-4 shadow-glow-blue"
          >
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center rounded-xl shrink-0">
                <Cookie className="h-5 w-5 text-brand-blue" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading text-sm font-black text-brand-dark-blue dark:text-white flex items-center gap-1.5">
                  Cookie Consent Options
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-semibold">
                  We use cookies to adapt studies, track streaks, and analyze simulated trades. Review our settings or Accept All to continue.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <Button 
                onClick={handleAcceptAll}
                className="flex-grow h-10 bg-brand-green hover:bg-brand-green/90 text-white font-extrabold text-xs rounded-xl shadow-glow-green"
              >
                Accept All
              </Button>
              <Button 
                variant="outline"
                onClick={handleRejectAll}
                className="flex-grow h-10 border-border/60 text-xs font-bold rounded-xl"
              >
                Reject Extra
              </Button>
              <Button 
                variant="ghost"
                onClick={() => setShowPreferences(true)}
                className="w-full h-10 text-brand-blue text-xs font-bold rounded-xl"
              >
                Manage Preferences
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Advanced Preferences Dialog Modal */}
      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="max-w-[420px] rounded-3xl border border-border/40 p-6 shadow-2xl bg-card">
          <DialogHeader className="text-left mb-4">
            <DialogTitle className="font-heading text-lg font-black text-brand-dark-blue dark:text-white flex items-center gap-2">
              <Shield className="h-5 w-5 text-brand-blue" />
              Privacy Center Options
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground font-semibold">
              Customize how ArthaGroww monitors learning progress metrics.
            </DialogDescription>
          </DialogHeader>

          {/* Preference Toggles List */}
          <div className="flex flex-col gap-4 py-2">
            
            {/* Essential */}
            <div className="flex justify-between items-center p-3 rounded-2xl border border-border bg-muted/20">
              <div className="max-w-[240px] space-y-1">
                <span className="text-xs font-black text-brand-dark-blue dark:text-white">Essential Cookies</span>
                <p className="text-[10px] text-muted-foreground font-semibold">Required for standard logins, streak multipliers, and session locks.</p>
              </div>
              <span className="text-xs font-black text-brand-green bg-brand-green/10 border border-brand-green/20 px-2.5 py-1 rounded-lg">REQUIRED</span>
            </div>

            {/* Analytics */}
            <div className="flex justify-between items-center p-3 rounded-2xl border border-border">
              <div className="max-w-[240px] space-y-1">
                <span className="text-xs font-black text-brand-dark-blue dark:text-white">Analytics Tracking</span>
                <p className="text-[10px] text-muted-foreground font-semibold">Used to study course completion timeframes and league active users.</p>
              </div>
              <input
                type="checkbox"
                checked={prefs.analytics}
                onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                className="h-4.5 w-4.5 rounded border-border text-brand-blue focus:ring-brand-blue accent-brand-blue cursor-pointer"
              />
            </div>

            {/* Personalization */}
            <div className="flex justify-between items-center p-3 rounded-2xl border border-border">
              <div className="max-w-[240px] space-y-1">
                <span className="text-xs font-black text-brand-dark-blue dark:text-white">AI Personalization</span>
                <p className="text-[10px] text-muted-foreground font-semibold">Required to adapt quiz complexity and study timelines to your pace.</p>
              </div>
              <input
                type="checkbox"
                checked={prefs.personalization}
                onChange={(e) => setPrefs({ ...prefs, personalization: e.target.checked })}
                className="h-4.5 w-4.5 rounded border-border text-brand-blue focus:ring-brand-blue accent-brand-blue cursor-pointer"
              />
            </div>

            {/* Marketing */}
            <div className="flex justify-between items-center p-3 rounded-2xl border border-border">
              <div className="max-w-[240px] space-y-1">
                <span className="text-xs font-black text-brand-dark-blue dark:text-white">Marketing Analytics</span>
                <p className="text-[10px] text-muted-foreground font-semibold">Integrates with social tags to evaluate our student signup conversion goals.</p>
              </div>
              <input
                type="checkbox"
                checked={prefs.marketing}
                onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
                className="h-4.5 w-4.5 rounded border-border text-brand-blue focus:ring-brand-blue accent-brand-blue cursor-pointer"
              />
            </div>

          </div>

          <DialogFooter className="flex flex-row justify-end gap-2 mt-4">
            <Button variant="ghost" onClick={() => setShowPreferences(false)} className="text-xs font-bold rounded-xl h-10 px-4">
              Cancel
            </Button>
            <Button onClick={handleSavePrefs} className="bg-brand-blue text-white font-extrabold text-xs rounded-xl h-10 px-5 shadow-glow-blue">
              Save Preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
