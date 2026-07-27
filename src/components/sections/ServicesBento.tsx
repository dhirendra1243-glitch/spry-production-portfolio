"use client";

import React from "react";
import { Video, Layers, Globe, Box, Sparkles, ArrowUpRight, Zap, Check } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceProps {
  onOpenBooking: () => void;
}

export function ServicesBento({ onOpenBooking }: ServiceProps) {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Ambient Radial Glows */}
      <div className="ambient-glow-cyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-bright text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="font-space text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Services Bento Grid
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            High-converting video production capabilities designed for rapid iteration & maximum ad efficiency.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: AI UGC Video Ads (Span 2 cols) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-2 glass-card p-8 rounded-3xl border border-white/10 group hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-glow/10 rounded-full blur-3xl group-hover:bg-cyan-glow/20 transition-all" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-glow/10 border border-cyan-glow/30 flex items-center justify-center text-cyan-bright mb-6 group-hover:scale-110 transition-transform">
                <Video className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-cyan-bright uppercase tracking-wider">Top Performing</span>
              <h3 className="font-space text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
                AI UGC Video Ads
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-lg">
                Scalable direct-response user generated content powered by digital twin creators, emotion synthesis, and high-converting hook variations for Meta, TikTok & YouTube Shorts.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                {["Hook Angle A/B Testing", "100+ Digital Talent Rigs", "Native Dynamic Subtitles", "48-Hour Turnaround"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-cyan-bright" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenBooking}
                className="glass-button px-5 py-2.5 rounded-full text-xs font-semibold text-white flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-glow"
              >
                <span>Request UGC Package</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-bright" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: High-End Brand Commercials (Span 1 col) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-1 glass-card p-8 rounded-3xl border border-white/10 group hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-violet-neon/10 rounded-full blur-3xl group-hover:bg-violet-neon/20 transition-all" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-glow mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-violet-glow uppercase tracking-wider">Cinematic</span>
              <h3 className="font-space text-xl font-bold text-white mt-1 mb-3">
                Brand Commercials
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-4">
                Full-scale cinematic video spots featuring generative set extensions, lighting passes, and Hollywood-grade sound scoring.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="text-xs font-medium text-violet-glow hover:text-white flex items-center gap-1 cursor-pointer pt-4 border-t border-white/10"
            >
              <span>Explore Specs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Card 3: 3D Motion & Visual Effects (Span 1 col) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-1 glass-card p-8 rounded-3xl border border-white/10 group hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-glow/10 border border-cyan-glow/30 flex items-center justify-center text-cyan-bright mb-6 group-hover:scale-110 transition-transform">
                <Box className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-cyan-bright uppercase tracking-wider">VFX & Renders</span>
              <h3 className="font-space text-xl font-bold text-white mt-1 mb-3">
                3D Motion & VFX
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-4">
                Hyper-realistic 3D product exploding views, liquid physics simulation, and fluid camera sweeps.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="text-xs font-medium text-cyan-bright hover:text-white flex items-center gap-1 cursor-pointer pt-4 border-t border-white/10"
            >
              <span>Explore 3D Pipeline</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Card 4: AI Voice & Avatar Localization (Span 2 cols on lg) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-3 lg:col-span-4 glass-card p-8 rounded-3xl border border-white/10 group hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-glow text-xs font-mono">
                <Globe className="w-3.5 h-3.5" />
                <span>GLOBAL AD REACH</span>
              </div>
              <h3 className="font-space text-2xl font-bold text-white">
                AI Voice & Avatar Localization (25+ Languages)
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Seamlessly translate and lip-sync your winning video ad creative into Spanish, German, French, Japanese, Arabic and 20+ other global markets with perfect native cadence.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full md:w-auto glass-button backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-full flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Launch Global Campaign</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-bright" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
