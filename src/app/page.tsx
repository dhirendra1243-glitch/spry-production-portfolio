'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Play, Zap, Cpu, TrendingUp } from 'lucide-react';
import VideoModal from '@/components/VideoModal';
import ContactForm from '@/components/ContactForm';

// Dynamic imports with SSR disabled for optimal Three.js / R3F loading
const LiquidChromeCanvas = dynamic(
  () => import('@/components/3d/LiquidChromeCanvas'),
  { 
    ssr: false, 
    loading: () => <div className="fixed inset-0 bg-[#040407]" /> 
  }
);

export default function Home() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#040407] text-white overflow-x-hidden font-sans selection:bg-purple-500 selection:text-white">
      
      {/* 3D Background Canvas on Desktop / Cyber Gradient Fallback on Mobile */}
      {!isMobile ? (
        <LiquidChromeCanvas />
      ) : (
        <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a12] via-[#040407] to-[#040407] z-0 pointer-events-none" />
      )}

      {/* Volumetric Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0">
        <div className="w-[650px] h-[650px] bg-purple-600/25 rounded-full blur-[160px]" />
        <div className="absolute w-[450px] h-[450px] bg-pink-500/15 rounded-full blur-[120px]" />
      </div>

      {/* Technical Cyber HUD Frame */}
      <div className="fixed inset-0 pointer-events-none border border-white/10 m-4 sm:m-8 rounded-2xl flex flex-col justify-between p-6 z-30">
        <div className="flex justify-between items-center text-[11px] tracking-widest text-white/50 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>[ SPRY_CORE_v2.6 ]</span>
          </div>
          <span className="hidden sm:inline">100% AI GENERATED UGC & ADS</span>
          <span>SYS_READY // 2026</span>
        </div>

        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/40" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/40" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/40" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/40" />

        <div className="flex justify-between items-end text-[11px] font-mono text-white/50">
          <div>
            <p className="text-white/80 font-bold">SPRY PRODUCTION</p>
            <p>PROMPT TO MOTION STUDIO</p>
          </div>
          <div className="flex items-center gap-2 text-white/80 animate-bounce">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </div>
        </div>
      </div>

      {/* SECTION 1: HERO */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 text-center pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 text-xs tracking-widest text-purple-300 font-mono">
            <Sparkles size={14} className="text-purple-400" /> AI-DRIVEN VISUAL PERFORMANCE
          </div>
          
          <h1 className="text-7xl sm:text-9xl md:text-[13rem] font-black tracking-tighter uppercase font-serif leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20 drop-shadow-2xl">
            SPRY
          </h1>
          
          <p className="mt-4 text-lg sm:text-2xl text-white/70 max-w-2xl mx-auto font-light tracking-wide">
            Next-generation AI video ads, hyper-realistic UGC, and cinematic commercials crafted from pure prompts.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 pointer-events-auto">
            <button
              onClick={() => setShowreelOpen(true)}
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-purple-300 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <Play size={18} fill="currentColor" /> Watch Showreel
            </button>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Book Campaign
            </a>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: SHOWREEL HIGHLIGHT */}
      <section id="showreel" className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-2">[ FEATURED WORK ]</p>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight font-serif">AI UGC & AD SHOWCASE</h2>
        </div>

        <div
          onClick={() => setShowreelOpen(true)}
          className="relative aspect-video rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)] flex items-center justify-center group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />
          
          <div className="text-center z-20">
            <div className="w-20 h-20 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Play size={32} fill="currentColor" className="text-white ml-1" />
            </div>
            <p className="text-sm font-mono text-white/80">CLICK TO PLAY 2026 AI REEL</p>
          </div>

          <div className="absolute bottom-6 left-6 z-20 font-mono text-xs text-white/60">
            <p className="text-white font-bold text-sm">SPRY PRODUCTION MASTER REEL</p>
            <p>MIDJOURNEY + RUNWAY GEN-3 + ELEVENLABS</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CAMPAIGN PORTFOLIO GRID */}
      <section className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-2">[ CAMPAIGNS ]</p>
            <h2 className="text-4xl sm:text-5xl font-bold font-serif">PERFORMANCE & RESULTS</h2>
          </div>
          <p className="text-white/60 font-mono text-sm mt-4 md:mt-0">100% GENERATED WITH GENERATIVE AI</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'E-Com Beauty UGC', metric: '+340% ROAS', tool: 'Sora + Runway Gen-3', icon: TrendingUp },
            { title: 'SaaS AI Commercial', metric: '1.2M Impressions', tool: 'Kling AI + Voice Clone', icon: Cpu },
            { title: 'App Install Video Ad', metric: '4.8% CTR', tool: 'Midjourney v6 + Luma', icon: Zap },
          ].map((item, index) => (
            <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6 text-purple-300">
                <item.icon size={24} />
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
                {item.metric}
              </span>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-xs font-mono text-white/50">{item.tool}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: AI PROCESS PIPELINE */}
      <section className="relative z-10 py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-2">[ WORKFLOW ]</p>
          <h2 className="text-4xl sm:text-5xl font-bold font-serif">FROM PROMPT TO HIGH-CONVERTING AD</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Script & Concept', desc: 'Hook-driven copy tailored for TikTok, Meta & YouTube Ads.' },
            { step: '02', title: 'AI Asset Generation', desc: 'Hyper-realistic digital avatars, products & environments.' },
            { step: '03', title: 'Motion & Synthesis', desc: 'High frame-rate motion render, lip-sync & voice cloning.' },
            { step: '04', title: 'Ad Export', desc: 'Conversion-focused post-production & multi-format delivery.' },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative">
              <span className="text-4xl font-mono font-bold text-purple-400/40 mb-4 block">{item.step}</span>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CONTACT & FOOTER */}
      <section id="contact" className="relative z-10 py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-2">[ START A PROJECT ]</p>
          <h2 className="text-4xl sm:text-6xl font-black font-serif mb-4">READY TO ELEVATE YOUR ADS?</h2>
          <p className="text-white/70 max-w-lg mx-auto text-sm sm:text-base">
            Scale your brand with 100% AI-generated video campaigns that convert viewers into buyers.
          </p>
        </div>

        <ContactForm />

        <footer className="mt-20 text-xs font-mono text-white/40 flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-8 gap-4">
          <p>© 2026 SPRY PRODUCTION. ALL RIGHTS RESERVED.</p>
          <p>BUILT FOR NEXT-GEN AI CREATORS</p>
        </footer>
      </section>

      {/* Video Modal Lightbox */}
      <VideoModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />

    </main>
  );
}
