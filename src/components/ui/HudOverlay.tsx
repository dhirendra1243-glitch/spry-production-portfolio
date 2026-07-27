"use client";

import React, { useState, useEffect } from "react";
import { Plus, Disc, Activity } from "lucide-react";

export function HudOverlay() {
  const [timecode, setTimecode] = useState("00:00:00:00");
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 10);
      const ms = String(elapsed % 100).padStart(2, "0");
      const sec = String(Math.floor(elapsed / 100) % 60).padStart(2, "0");
      const min = String(Math.floor(elapsed / 6000) % 60).padStart(2, "0");
      const hr = String(Math.floor(elapsed / 360000)).padStart(2, "0");
      setTimecode(`${hr}:${min}:${sec}:${ms}`);

      // Subtle FPS variation tick
      setFps(59 + Math.floor(Math.random() * 2));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 p-4 sm:p-8 flex flex-col justify-between select-none">
      {/* Top HUD Row */}
      <div className="flex items-start justify-between text-[11px] font-mono text-gray-400 tracking-wider">
        {/* Top Left */}
        <div className="flex items-center gap-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg">
          <Plus className="w-3.5 h-3.5 text-magenta-bright animate-pulse" />
          <span className="text-white font-semibold">SPRY_CORE_V2.6</span>
          <span className="text-purple-glow font-bold">// ONLINE</span>
        </div>

        {/* Top Right */}
        <div className="flex items-center gap-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 shadow-lg">
          <div className="flex items-center gap-1.5 text-magenta-bright">
            <Disc className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
            <span>REC</span>
          </div>
          <span className="text-gray-200 font-bold">{timecode}</span>
          <span className="hidden md:inline text-gray-500">LAT: 37.7749 // LON: -122.4194</span>
        </div>
      </div>

      {/* Bottom HUD Row */}
      <div className="flex items-end justify-between text-[11px] font-mono text-gray-400 tracking-wider">
        {/* Bottom Left */}
        <div className="flex items-center gap-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg">
          <Activity className="w-3.5 h-3.5 text-purple-glow" />
          <span>SYS_STATUS: <strong className="text-emerald-400">100% OPTIMAL</strong></span>
          <span className="hidden sm:inline text-gray-500">FPS: {fps}</span>
        </div>

        {/* Bottom Right */}
        <div className="flex items-center gap-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg">
          <span className="hidden sm:inline text-gray-400">FRAME_ID: #8820</span>
          <Plus className="w-3.5 h-3.5 text-magenta-bright" />
        </div>
      </div>
    </div>
  );
}
