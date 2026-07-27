"use client";

import React, { useState, useEffect } from "react";
import { Video, Calendar, Menu, X, ArrowUpRight, Plus } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Showreel", href: "#showreel" },
    { label: "Campaigns", href: "#campaigns" },
    { label: "AI Pipeline", href: "#pipeline" },
    { label: "Services", href: "#services" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-pitch/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-purple-900/10" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-magenta-glow/50 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-xl bg-slate-950 border border-white/15 flex items-center justify-center overflow-hidden group-hover:border-magenta-glow/60 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-magenta-glow/30 to-purple-deep/30 opacity-50 group-hover:opacity-100 transition-opacity" />
              <Video className="w-5 h-5 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair text-lg font-bold tracking-tight text-white group-hover:text-magenta-bright transition-colors flex items-center gap-1.5">
                SPRY <span className="font-space font-normal text-purple-glow">production</span>
              </span>
              <span className="text-[10px] tracking-widest text-gray-400 font-mono">
                [3D_CYBER_STUDIO]
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-950/70 backdrop-blur-md p-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-xs font-mono tracking-wider text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-magenta-glow/50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="glass-button text-xs font-mono uppercase tracking-wider text-white px-5 py-2.5 rounded-full flex items-center gap-2 min-h-[44px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-magenta-glow group"
            >
              <Calendar className="w-4 h-4 text-magenta-bright group-hover:rotate-12 transition-transform duration-300" />
              <span>Book Strategy</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-magenta-bright transition-colors" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 rounded-xl text-gray-300 hover:text-white bg-slate-950 border border-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-200 hover:text-magenta-bright py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <Plus className="w-3.5 h-3.5 text-gray-500" />
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full glass-button text-xs font-mono uppercase text-white py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-magenta-bright" />
            <span>Book Strategy Call</span>
          </button>
        </div>
      )}
    </header>
  );
}
