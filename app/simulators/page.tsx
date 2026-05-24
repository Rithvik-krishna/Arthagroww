"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart2, ShieldAlert, BadgeDollarSign, Wallet, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";
import SmoothScroll from "@/components/SmoothScroll";
import SpotlightCard from "@/components/SpotlightCard";
import { Button } from "@/components/ui/button";

export default function Simulators() {
  const [monthlyInvest, setMonthlyInvest] = useState(5000); // in Rupees
  const [returnRate, setReturnRate] = useState(12); // in %
  const [years, setYears] = useState(10); // in Years

  // Compound Interest Calculation
  const simulationData = useMemo(() => {
    let totalInvested = 0;
    let balance = 0;
    const monthlyRate = returnRate / 100 / 12;
    const months = years * 12;
    const points: { x: number; y: number; invested: number }[] = [];

    for (let i = 1; i <= months; i++) {
      totalInvested += monthlyInvest;
      balance = (balance + monthlyInvest) * (1 + monthlyRate);

      // Add a data point every year for chart plotting
      if (i % 12 === 0 || i === months) {
        const yearNum = Math.ceil(i / 12);
        points.push({
          x: yearNum,
          y: Math.round(balance),
          invested: totalInvested,
        });
      }
    }

    const futureValue = Math.round(balance);
    const growth = futureValue - totalInvested;

    return {
      totalInvested,
      futureValue,
      growth,
      points,
    };
  }, [monthlyInvest, returnRate, years]);

  // Dynamic SVG Chart Coordinates Generator
  const chartPath = useMemo(() => {
    if (simulationData.points.length === 0) {
      return { line: "", investedLine: "", points: [] };
    }
    const width = 500;
    const height = 200;
    const padding = 20;

    const maxVal = simulationData.futureValue;
    const minVal = 0;

    const points = simulationData.points.map((p, index) => {
      const x = padding + (index / (simulationData.points.length - 1)) * (width - padding * 2);
      const y = height - padding - ((p.y - minVal) / (maxVal - minVal)) * (height - padding * 2);
      return `${x},${y}`;
    });

    const investedPoints = simulationData.points.map((p, index) => {
      const x = padding + (index / (simulationData.points.length - 1)) * (width - padding * 2);
      const y = height - padding - ((p.invested - minVal) / (maxVal - minVal)) * (height - padding * 2);
      return `${x},${y}`;
    });

    return {
      line: `M ${points.join(" L ")}`,
      investedLine: `M ${investedPoints.join(" L ")}`,
      points,
    };
  }, [simulationData]);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <SmoothScroll />
      <BackgroundGrid />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            
            {/* Page Hero */}
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4.5 py-1.5 text-xs font-bold text-brand-blue shadow-sm"
              >
                <TrendingUp className="h-4 w-4 text-brand-blue" />
                RISK-FREE FINTECH LABS
              </motion.div>

              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark-blue dark:text-white tracking-tight leading-none">
                Interactive Simulators.<br />
                <span className="text-brand-blue">No Real Money Needed.</span>
              </h1>

              <p className="text-muted-foreground font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Test asset allocations, practice stock charting, and simulate compounding loops. Learn to navigate the volatility before risking your actual savings.
              </p>
            </div>

            {/* Interactive Compound Calculator Widget */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
              
              {/* Simulator Sliders Control Panel */}
              <div className="lg:col-span-5 space-y-8 text-left bg-card p-6 sm:p-8 rounded-3xl border border-border shadow-md">
                <h3 className="font-heading text-xl font-black text-brand-dark-blue dark:text-white flex items-center gap-2">
                  <BadgeDollarSign className="h-5 w-5 text-brand-green" />
                  Growth Experimenter
                </h3>

                {/* Slider 1: Monthly contribution */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-muted-foreground">Monthly Savings Contribution</span>
                    <span className="text-brand-blue">₹{monthlyInvest.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={monthlyInvest}
                    onChange={(e) => setMonthlyInvest(Number(e.target.value))}
                    className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-brand-blue"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground font-bold">
                    <span>₹500</span>
                    <span>₹50,000</span>
                  </div>
                </div>

                {/* Slider 2: Annual return rate */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-muted-foreground">Expected Annual Return</span>
                    <span className="text-brand-green">{returnRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="25"
                    step="1"
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground font-bold">
                    <span>3% (FD)</span>
                    <span>25% (High Risk)</span>
                  </div>
                </div>

                {/* Slider 3: Years horizon */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-muted-foreground">Investment Horizon</span>
                    <span className="text-brand-yellow">{years} Years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-brand-yellow"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground font-bold">
                    <span>1 Year</span>
                    <span>30 Years</span>
                  </div>
                </div>
              </div>

              {/* Real-time Projections Graph */}
              <div className="lg:col-span-7">
                <SpotlightCard
                  spotlightColor="rgba(88, 204, 2, 0.08)"
                  className="p-6 md:p-8 rounded-3xl border border-border bg-card shadow-lg text-left relative overflow-hidden"
                >
                  <div className="grid grid-cols-3 gap-4 border-b border-border/40 pb-6 mb-6">
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground block uppercase">
                        Total Invested
                      </span>
                      <span className="font-heading text-sm sm:text-base font-black text-brand-dark-blue dark:text-white">
                        ₹{simulationData.totalInvested.toLocaleString()}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground block uppercase">
                        Estimated Return
                      </span>
                      <span className="font-heading text-sm sm:text-base font-black text-brand-green">
                        +₹{simulationData.growth.toLocaleString()}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground block uppercase">
                        Future Value
                      </span>
                      <span className="font-heading text-sm sm:text-base font-black text-brand-blue">
                        ₹{simulationData.futureValue.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic SVG Sparkline Graph */}
                  <div className="relative w-full h-[200px] border-b border-l border-border/60 bg-muted/5 rounded-tr-xl p-2 mb-4">
                    
                    {/* SVG Canvas */}
                    <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                      {/* Invested Capital Line */}
                      <path
                        d={chartPath.investedLine}
                        fill="none"
                        stroke="#94a3b8"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />

                      {/* Total Value Compounding Line */}
                      <path
                        d={chartPath.line}
                        fill="none"
                        stroke="#1CB0F6"
                        strokeWidth="3.5"
                        className="drop-shadow-[0_2px_10px_rgba(28,176,246,0.3)]"
                      />
                    </svg>

                    {/* Dynamic floating tags */}
                    <div className="absolute top-4 left-6 flex items-center gap-2">
                      <div className="w-3 h-3 bg-brand-blue rounded-full" />
                      <span className="text-[10px] font-bold text-muted-foreground">Portfolio Value</span>
                    </div>
                    <div className="absolute top-8 left-6 flex items-center gap-2">
                      <div className="w-3 h-3 bg-slate-400 rounded-full" />
                      <span className="text-[10px] font-bold text-muted-foreground">Capital Invested</span>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center bg-brand-yellow/10 border border-brand-yellow/20 p-3.5 rounded-xl text-brand-yellow-dark">
                    <ShieldAlert className="h-4.5 w-4.5 shrink-0" />
                    <p className="text-[10px] sm:text-xs leading-relaxed font-semibold">
                      Compounding shows its true superpower after Year 10. Learn the magic of early regular savings in our simulated sandbox modules.
                    </p>
                  </div>
                </SpotlightCard>
              </div>

            </div>

            {/* Other Available Simulator Modes */}
            <div className="border-t border-border/40 pt-20 mb-24">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                <h2 className="font-heading text-3xl font-black text-brand-dark-blue dark:text-white tracking-tight">
                  Additional Simulator Modules
                </h2>
                <p className="text-muted-foreground font-medium text-xs sm:text-sm">
                  We cover stocks, cryptos, and mock startup investment allocations inside the app.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <SpotlightCard className="p-6 text-left" spotlightColor="rgba(28, 176, 246, 0.08)">
                  <div className="p-3 w-fit rounded-xl bg-background border border-border mb-4 shadow-sm text-brand-blue">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-brand-dark-blue dark:text-white mb-2">
                    📊 Mock Stock Exchanges
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed">
                    Test live stock feeds with ₹10 Lakhs of virtual cash. Experiment with market orders, stop-losses, and long-term holds.
                  </p>
                </SpotlightCard>

                <SpotlightCard className="p-6 text-left" spotlightColor="rgba(88, 204, 2, 0.08)">
                  <div className="p-3 w-fit rounded-xl bg-background border border-border mb-4 shadow-sm text-brand-green">
                    <Wallet className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-brand-dark-blue dark:text-white mb-2">
                    🔒 Web3 / Crypto Practice
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed">
                    Practice storing assets in hardware keys, navigate gas fees, and buy mock tokens without exposing yourself to real volatility risk.
                  </p>
                </SpotlightCard>

                <SpotlightCard className="p-6 text-left" spotlightColor="rgba(255, 75, 75, 0.08)">
                  <div className="p-3 w-fit rounded-xl bg-background border border-border mb-4 shadow-sm text-brand-coral">
                    <RefreshCw className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-brand-dark-blue dark:text-white mb-2">
                    📈 Cap Table Allocations
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-semibold leading-relaxed">
                    Act as a venture capitalist seed-funding a startup. Allocate capital, structure options pools, and calculate founder dilution percentages.
                  </p>
                </SpotlightCard>
              </div>
            </div>

            {/* Simulators final CTA */}
            <div className="rounded-3xl border border-brand-blue/20 bg-brand-blue/5 p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-brand-green/5 to-transparent -z-10 animate-pulse" />
              <div className="max-w-2xl mx-auto space-y-6">
                <h2 className="font-heading text-2xl sm:text-3xl font-black text-brand-dark-blue dark:text-white">
                  Start experimenting risk-free today
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground font-semibold max-w-md mx-auto">
                  Download the ArthaGroww app now to practice stocks, cryptos, and VC term-sheet calculators on our native sandbox interface.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="h-12 bg-brand-blue hover:bg-brand-blue/95 text-white font-extrabold text-xs px-8 rounded-xl flex items-center justify-center gap-1.5 shadow-glow-blue">
                    Download for iOS
                  </Button>
                  <Button className="h-12 bg-brand-green hover:bg-brand-green/95 text-white font-extrabold text-xs px-8 rounded-xl flex items-center justify-center gap-1.5 shadow-glow-green">
                    Download for Android
                  </Button>
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
