"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX, Play, Pause, Maximize2, Sparkles, Film, Eye } from "lucide-react";

export function StickyShowreel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Scroll mapping for 3D device frame scaling from 60vw to 95vw
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameWidth = useTransform(scrollYProgress, [0, 0.7], ["60vw", "95vw"]);
  const rotateX = useTransform(scrollYProgress, [0, 0.7], [18, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.6]);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreenModal = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section
      id="showreel"
      ref={containerRef}
      className="relative h-[300vh] bg-pitch"
    >
      {/* Sticky Screen Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden py-12 px-4">
        {/* Section Header */}
        <div className="text-center mb-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-bright text-xs font-mono mb-2">
            <Film className="w-3.5 h-3.5" />
            <span>2026 AI MOTION SHOWREEL</span>
          </div>
          <h2 className="font-space text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Cinematic AI Commercials in Action
          </h2>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            Scroll down to expand the high-definition studio showreel
          </p>
        </div>

        {/* 3D Tilted Scaling Device Frame */}
        <motion.div
          style={{
            width: frameWidth,
            rotateX: rotateX,
            opacity: opacity,
          }}
          className="relative max-w-7xl h-[65vh] sm:h-[72vh] rounded-3xl p-2 sm:p-4 glass-panel border border-white/20 shadow-2xl shadow-cyan-glow/20 transform-style-3d transition-shadow duration-300 group"
        >
          {/* Bezel details */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
            {/* HTML5 Autoplay Showreel Video */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover rounded-xl"
              poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80"
            >
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                type="video/mp4"
              />
            </video>

            {/* Video Overlay Glass Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-pitch/90 via-transparent to-pitch/40 pointer-events-none" />

            {/* Floating Custom Controls Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-auto">
              <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
                <button
                  onClick={togglePlay}
                  className="p-2 text-white hover:text-cyan-bright transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-glow"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-2 text-white hover:text-cyan-bright transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-glow"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-gray-400" /> : <Volume2 className="w-5 h-5 text-cyan-bright" />}
                </button>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-bright" />
                  <span>4K AI Motion Synth</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={toggleFullscreenModal}
                  className="p-3 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full border border-white/15 backdrop-blur-md transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-glow"
                  aria-label="Expand Fullscreen Modal"
                >
                  <Maximize2 className="w-5 h-5 text-cyan-bright" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Video Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-pitch/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden border border-cyan-500/40 shadow-cyan-glow">
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 z-50 p-3 bg-slate-900/90 text-white hover:text-cyan-bright rounded-full border border-white/20 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              ✕
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
              title="SPRY Production Showreel Full HD"
              className="w-full h-full"
              allow="autoplay; fullscreen"
            />
          </div>
        </div>
      )}
    </section>
  );
}
