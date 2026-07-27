"use client";

import React, { useState } from "react";
import { Play, TrendingUp, Cpu, Sparkles, Plus, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Campaign {
  id: string;
  title: string;
  client: string;
  category: "ugc" | "3d" | "avatar";
  roas: string;
  metricLabel: string;
  techStack: string[];
  thumbnail: string;
  videoUrl: string;
  description: string;
}

export function CampaignGrid() {
  const [activeCategory, setActiveCategory] = useState<"all" | "ugc" | "3d" | "avatar">("all");
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  const campaigns: Campaign[] = [
    {
      id: "1",
      title: "CyberPulse Smartwatch Launch",
      client: "Aura Tech Co.",
      category: "3d",
      roas: "+420% ROAS",
      metricLabel: "$2.8M Sales in 14 Days",
      techStack: ["Runway Gen-3", "Luma Dream Machine", "Midjourney v6"],
      thumbnail: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      description: "Hyper-realistic 3D metallic liquid motion commercial created with Runway Gen-3 and custom camera paths."
    },
    {
      id: "2",
      title: "NerveGlow AI Skincare UGC",
      client: "Lumina Beauty",
      category: "ugc",
      roas: "+340% ROAS",
      metricLabel: "4.8x Conversion Rate",
      techStack: ["Kling AI", "ElevenLabs", "Midjourney v6"],
      thumbnail: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      description: "Next-gen synthetic UGC creator ads localized in 12 global dialects using ElevenLabs voice cloning."
    },
    {
      id: "3",
      title: "FinTech NeoCard Global Launch",
      client: "Vault Pay",
      category: "avatar",
      roas: "+510% CTR",
      metricLabel: "450k App Installs",
      techStack: ["HeyGen", "ElevenLabs", "Runway Gen-3"],
      thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      description: "Autonomous AI brand avatars delivering hyper-personalized direct-response video hooks."
    },
    {
      id: "4",
      title: "AuraHydrate Energy Beverage",
      client: "Apex Nutrition",
      category: "3d",
      roas: "+380% ROAS",
      metricLabel: "12M Viral Views",
      techStack: ["Luma Dream Machine", "Runway Gen-3", "Cinema4D AI"],
      thumbnail: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      description: "Fluid simulation and particle motion synthesis engineered for TikTok & Meta Feed algorithms."
    },
    {
      id: "5",
      title: "Zenith Executive AI Agent",
      client: "SaaS Scale Inc.",
      category: "avatar",
      roas: "+290% ROAS",
      metricLabel: "$1.4M ARR Added",
      techStack: ["ElevenLabs", "Kling AI", "Midjourney v6"],
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoylines.mp4",
      description: "Photorealistic AI CEO avatar delivering targeted B2B video proposals and LinkedIn ad hooks."
    },
    {
      id: "6",
      title: "VoltSpeed Electric Hypercar",
      client: "EV Motors",
      category: "3d",
      roas: "+460% ROAS",
      metricLabel: "3,200 Pre-orders",
      techStack: ["Runway Gen-3", "Midjourney v6", "ElevenLabs"],
      thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      description: "High-octane 3D car commercial with AI-generated environmental lighting & spatial audio."
    }
  ];

  const filteredCampaigns = activeCategory === "all"
    ? campaigns
    : campaigns.filter(c => c.category === activeCategory);

  return (
    <section id="campaigns" className="py-28 bg-pitch bg-noise relative overflow-hidden">
      {/* Volumetric Radial Glows */}
      <div className="volumetric-purple top-10 right-0 opacity-20" />
      <div className="volumetric-magenta bottom-10 left-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-magenta-glow/10 border border-magenta-glow/30 text-magenta-bright text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>[SYSTEM_CASE_STUDIES // 2026]</span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Liquid-Chrome Campaigns
            </h2>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-950/90 p-1.5 rounded-2xl border border-white/10 font-mono text-xs">
            {[
              { id: "all", label: "All Campaigns" },
              { id: "ugc", label: "AI UGC Ads" },
              { id: "3d", label: "3D Motion" },
              { id: "avatar", label: "AI Avatars" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 font-medium rounded-xl transition-all duration-200 cursor-pointer min-h-[44px] ${
                  activeCategory === tab.id
                    ? "bg-magenta-glow/20 text-magenta-bright border border-magenta-glow/50 shadow-magenta-glow/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Grid with Technical Corner Crosshairs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCampaigns.map(campaign => (
              <motion.div
                key={campaign.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedCampaign(campaign)}
                className="group relative glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-magenta-glow/50 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Technical Corner Crosshairs */}
                <div className="absolute top-2 left-2 z-20 text-magenta-bright/60 group-hover:text-magenta-bright transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                </div>
                <div className="absolute top-2 right-2 z-20 text-magenta-bright/60 group-hover:text-magenta-bright transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                </div>
                <div className="absolute bottom-2 left-2 z-20 text-magenta-bright/60 group-hover:text-magenta-bright transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                </div>
                <div className="absolute bottom-2 right-2 z-20 text-magenta-bright/60 group-hover:text-magenta-bright transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                </div>

                {/* Card Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={campaign.thumbnail}
                    alt={campaign.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Metric Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/90 border border-magenta-glow/40 text-magenta-bright font-mono text-xs font-bold shadow-magenta-glow/30 backdrop-blur-md">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{campaign.roas}</span>
                  </div>

                  {/* Hover Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-pitch/60 backdrop-blur-xs">
                    <div className="w-14 h-14 rounded-full bg-magenta-glow text-white flex items-center justify-center shadow-magenta-glow transform group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-gray-400 mb-1">CLIENT // {campaign.client}</div>
                    <h3 className="font-space text-xl font-bold text-white group-hover:text-magenta-bright transition-colors mb-2">
                      {campaign.title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-2 mb-4 leading-relaxed font-light">
                      {campaign.description}
                    </p>
                  </div>

                  {/* AI Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {campaign.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-purple-glow flex items-center gap-1"
                      >
                        <Cpu className="w-2.5 h-2.5 text-magenta-bright" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Campaign Detail Video Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 z-50 bg-pitch/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-950 rounded-3xl border border-magenta-glow/40 p-6 sm:p-8 shadow-magenta-glow overflow-hidden">
            <button
              onClick={() => setSelectedCampaign(null)}
              className="absolute top-4 right-4 z-50 p-2 text-gray-400 hover:text-white rounded-full bg-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black">
                <video autoPlay controls loop className="w-full h-full object-cover">
                  <source src={selectedCampaign.videoUrl} type="video/mp4" />
                </video>
              </div>

              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-magenta-glow/10 border border-magenta-glow/40 text-magenta-bright font-mono text-xs font-bold mb-2">
                  {selectedCampaign.roas} — {selectedCampaign.metricLabel}
                </div>
                <h3 className="font-playfair text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {selectedCampaign.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">
                  {selectedCampaign.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10 font-mono text-xs">
                  <span className="text-gray-400">TECH STACK:</span>
                  {selectedCampaign.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-glow">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
