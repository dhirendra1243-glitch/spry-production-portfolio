'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/20 bg-black/90 shadow-[0_0_80px_rgba(168,85,247,0.3)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              aria-label="Close Video Lightbox"
            >
              <X size={20} />
            </button>

            {/* Embedded Video or Fallback Demo Reel */}
            {videoUrl ? (
              <iframe
                src={videoUrl}
                className="w-full h-full border-0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-purple-900/20 via-black to-black">
                <p className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">[ DEMO REEL STREAM ]</p>
                <h3 className="text-2xl font-bold mb-4 font-serif">SPRY Production 2026 AI Showreel</h3>
                <p className="text-sm font-mono text-white/50 max-w-md">
                  Replace <code className="text-purple-300">videoUrl</code> prop with your Vimeo, YouTube, or direct MP4 link.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { VideoModal };
