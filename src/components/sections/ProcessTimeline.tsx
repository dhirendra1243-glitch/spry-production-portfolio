"use client";

import React, { useState } from "react";
import { FileText, Wand2, Film, Rocket, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Step {
  num: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
  tools: string[];
}

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      num: "01",
      title: "Scripting & Visual Storyboarding",
      subtitle: "Direct-Response Hook Engineering",
      icon: FileText,
      description: "Data-backed script generation targeting consumer pain points, psychological hooks, and high-converting narrative structures.",
      deliverables: ["3x Variant Script Frameworks", "AI Visual Storyboard Grid", "Hook Matrix & Angle Testing"],
      tools: ["GPT-4o Direct-Response Engine", "Midjourney v6 Storyboarding"]
    },
    {
      num: "02",
      title: "Asset & Voice Synthesis",
      subtitle: "High-Fidelity Generation",
      icon: Wand2,
      description: "Generating photorealistic human avatars, custom brand props, product render passes, and natural multi-lingual voice clones.",
      deliverables: ["Photorealistic Avatar Talent", "Studio-Quality Voiceover Stems", "Custom 3D Product Assets"],
      tools: ["ElevenLabs Voice Cloning", "Kling AI Character Rigging", "ComfyUI Pipeline"]
    },
    {
      num: "03",
      title: "Motion Synthesis & Rendering",
      subtitle: "Cinematic Camera & Lighting Pass",
      icon: Film,
      description: "Translating static keyframes into fluid, cinematic video sequences with high-speed camera dynamics and particle VFX.",
      deliverables: ["4K 60fps Motion Video Passes", "Fluid & FX Simulations", "Color Grade & Sound Design"],
      tools: ["Runway Gen-3 Alpha", "Luma Dream Machine", "Adobe After Effects AI"]
    },
    {
      num: "04",
      title: "Conversion Optimization & Export",
      subtitle: "Multi-Format Platform Deployment",
      icon: Rocket,
      description: "Assembling final direct-response ad variations, optimizing aspect ratios (9:16 TikTok/Reels, 4:5 Meta, 16:9 YouTube), and launching A/B test split sets.",
      deliverables: ["15x Aspect-Ratio Variations", "Native Dynamic Subtitles", "Production Export Package"],
      tools: ["CapCut Pro Batch Render", "Meta Ads Manager Ready"]
    }
  ];

  return (
    <section id="pipeline" className="py-24 bg-pitch relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow-cyan top-1/3 left-10 opacity-20" />
      <div className="ambient-glow-violet bottom-1/3 right-10 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-bright text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROPRIETARY AI WORKFLOW</span>
          </div>
          <h2 className="font-space text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Interactive AI Production Pipeline
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            From raw concept to high-converting video commercial in 48–72 hours.
          </p>
        </div>

        {/* Pipeline Steps Tabs Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`glass-card p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-cyan-glow ${
                  isActive
                    ? "border-cyan-bright bg-slate-900/90 shadow-cyan-glow/30"
                    : "border-white/10 hover:border-white/20 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-space text-lg font-bold ${isActive ? "text-cyan-bright" : "text-gray-400"}`}>
                    {step.num}
                  </span>
                  <div className={`p-2 rounded-xl ${isActive ? "bg-cyan-glow text-pitch" : "bg-white/5 text-gray-400"}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-space text-base font-bold text-white mb-1 line-clamp-1">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400 font-mono line-clamp-1">
                  {step.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed View Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-cyan-bright font-mono text-xs font-bold uppercase tracking-wider">
                <span>Phase {steps[activeStep].num} Details</span>
              </div>
              <h3 className="font-space text-2xl sm:text-4xl font-bold text-white leading-tight">
                {steps[activeStep].title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {steps[activeStep].description}
              </p>

              {/* Deliverables List */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Key Deliverables</div>
                {steps[activeStep].deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-bright flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right AI Stack Tools Card */}
            <div className="lg:col-span-5 bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-cyan-bright uppercase tracking-wider">AI Stack & Engine</span>
                <Sparkles className="w-4 h-4 text-violet-glow" />
              </div>
              <div className="space-y-3">
                {steps[activeStep].tools.map((tool, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="font-space text-sm font-semibold text-white">{tool}</span>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
