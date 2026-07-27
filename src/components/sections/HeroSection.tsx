"use client";

import React, { useRef } from "react";
import { LiquidChromeCanvas } from "../3d/LiquidChromeCanvas";
import { Sparkles, ArrowRight, Play, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  onOpenBooking: () => void;
}

export function HeroSection({ onOpenBooking }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll phase tracking
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Phase 1 -> Phase 2 transitions
  const phase1Opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const phase2Opacity = useTransform(scrollYProgress, [0.35, 0.7], [0, 1]);
  const phase2Y = useTransform(scrollYProgress, [0.35, 0.7], [30, 0]);
  const volumetricGlowScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.8]);
  const volumetricGlowOpacity = useTransform(scrollYProgress, [0, 0.8], [0.25, 0.65]);

  return (
    <section ref={heroRef} className="relative min-h-[220vh] w-full bg-pitch bg-noise">
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-12">
        {/* 3D Liquid Chrome Canvas */}
        <LiquidChromeCanvas />

        {/* Dynamic Scroll-Driven Volumetric Lighting Accents */}
        <motion.div
          style={{
            scale: volumetricGlowScale,
            opacity: volumetricGlowOpacity,
          }}
          className="volumetric-purple top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="volumetric-magenta top-1/3 left-1/4 opacity-20" />

        {/* Content Box */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Cyber Kinetic Monospace Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/90 border border-magenta-glow/40 backdrop-blur-md mb-8 shadow-magenta-glow/30"
          >
            <span className="w-2 h-2 rounded-full bg-magenta-glow animate-ping" />
            <span className="text-xs sm:text-sm font-mono font-semibold tracking-widest text-magenta-bright uppercase">
              STUDIO ARCHETYPE // LIQUID-CHROME 3D
            </span>
          </motion.div>

          {/* SCROLL PHASE 1 TEXT: "SPRY PRODUCTION — BUILT FOR THE FUTURE" */}
          <motion.div style={{ opacity: phase1Opacity }} className="relative z-10 space-y-4">
            <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]">
              <span className="block text-white">SPRY PRODUCTION</span>
              <span className="block italic text-chrome-liquid font-space font-bold mt-2">
                — BUILT FOR THE FUTURE
              </span>
            </h1>
            <p className="font-sans text-lg sm:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
              Scroll to unveil our 2026 AI motion engine & high-converting commercial pipeline.
            </p>
          </motion.div>

          {/* SCROLL PHASE 2 TEXT: "NEXT-GEN AI UGC & CINEMATIC COMMERCIALS" */}
          <motion.div
            style={{ opacity: phase2Opacity, y: phase2Y }}
            className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4 pointer-events-auto space-y-6"
          >
            <h2 className="font-space text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-magenta-bright via-purple-glow to-white text-magenta-glow">
                NEXT-GEN AI UGC
              </span>
              <span className="block font-playfair italic font-extrabold text-white mt-1">
                & CINEMATIC COMMERCIALS
              </span>
            </h2>

            <p className="font-sans text-base sm:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
              Engineering ultra-high ROAS video ads with organic 3D liquid metal shaders and multi-lingual AI avatar synthesis.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto glass-button bg-magenta-glow/20 border border-magenta-glow/60 text-white font-semibold text-base px-8 py-4 rounded-full flex items-center justify-center gap-3 shadow-magenta-glow/40 cursor-pointer focus:ring-2 focus:ring-magenta-glow"
              >
                <Sparkles className="w-5 h-5 text-magenta-bright" />
                <span>Launch High-ROAS Campaign</span>
                <ArrowRight className="w-5 h-5 text-gray-300" />
              </button>

              <a
                href="#showreel"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-purple-glow/50 text-purple-glow font-medium text-base hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Watch 2026 Reel</span>
              </a>
            </div>
          </motion.div>

          {/* Proof Badges Row */}
          <div className="hidden md:grid grid-cols-4 gap-4 w-full max-w-4xl mt-16 z-10">
            {[
              { label: "Ad Revenue Generated", value: "$14.2M+", icon: TrendingUp, color: "text-magenta-bright" },
              { label: "Avg ROAS Multiplier", value: "+340%", icon: Zap, color: "text-purple-glow" },
              { label: "AI Rendered Frames", value: "1.2M+", icon: Play, color: "text-magenta-bright" },
              { label: "Client Retention", value: "99.4%", icon: ShieldCheck, color: "text-purple-glow" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center hover:border-magenta-glow/50 transition-all duration-300"
              >
                <stat.icon className={`w-4 h-4 ${stat.color} mb-1`} />
                <div className="font-mono text-xl font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-[11px] text-gray-400 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
