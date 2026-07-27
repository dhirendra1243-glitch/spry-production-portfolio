'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.dataset.cursor === 'hover'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Precision Center Dot — Max Z-Index */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Smooth Lagging Liquid Ring — Max Z-Index */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-purple-500/60 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
        animate={{
          x: mousePosition.x - (isHovered ? 28 : 18),
          y: mousePosition.y - (isHovered ? 28 : 18),
          width: isHovered ? 56 : 36,
          height: isHovered ? 56 : 36,
          backgroundColor: isHovered ? 'rgba(168, 85, 247, 0.15)' : 'rgba(0, 0, 0, 0)',
          borderColor: isHovered ? '#00F0FF' : 'rgba(168, 85, 247, 0.6)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      />
    </>
  );
}
