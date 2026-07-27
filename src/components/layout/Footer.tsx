"use client";

import React from "react";
import { Video, ArrowUpRight, Sparkles, Shield, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/40 flex items-center justify-center text-cyan-bright shadow-cyan-glow/30">
                <Video className="w-5 h-5" />
              </div>
              <span className="font-space text-xl font-bold tracking-tight text-white">
                SPRY <span className="text-cyan-bright font-normal">production</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              High-conversion video studio / agency crafting Next-Gen AI UGC, 3D motion commercials, and localized campaign creative for global brands.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-bright text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-bright animate-ping" />
              <span>Accepting New Clients for Q3 / Q4 2026</span>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-cyan-bright uppercase tracking-wider">Navigation</div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#showreel" className="hover:text-cyan-bright transition-colors">2026 Showreel</a></li>
              <li><a href="#campaigns" className="hover:text-cyan-bright transition-colors">Featured Campaigns</a></li>
              <li><a href="#pipeline" className="hover:text-cyan-bright transition-colors">AI Pipeline Workflow</a></li>
              <li><a href="#services" className="hover:text-cyan-bright transition-colors">Services Bento</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-violet-glow uppercase tracking-wider">Tech & Stack</div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Runway Gen-3 Alpha</li>
              <li>Kling AI Character Rigs</li>
              <li>ElevenLabs Multi-lingual</li>
              <li>Luma Dream Machine</li>
              <li>ComfyUI ControlNet</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © {new Date().getFullYear()} SPRY production. All rights reserved. Neo-Digital Glassmorphism Edition.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Ad Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
