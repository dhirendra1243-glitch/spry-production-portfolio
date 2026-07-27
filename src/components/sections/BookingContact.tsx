"use client";

import React, { useState } from "react";
import { Calendar, Mail, User, Building, DollarSign, Send, CheckCircle2, Clock, Sparkles, X } from "lucide-react";
import confetti from "canvas-confetti";

interface BookingProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export function BookingContact({ isOpenModal = false, onCloseModal }: BookingProps) {
  const [submitted, setSubmitted] = useState(false);
  const [showCalendlyEmbed, setShowCalendlyEmbed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$5k - $15k",
    service: "AI UGC Ads",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger celebratory confetti animation
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00F0FF", "#9D4EDD", "#ffffff"]
    });
  };

  const formContent = (
    <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-white/15 shadow-2xl relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Booking Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-bright text-xs font-mono">
            <Calendar className="w-3.5 h-3.5" />
            <span>INSTANT STRATEGY CALL</span>
          </div>

          <h3 className="font-space text-2xl sm:text-4xl font-bold text-white leading-tight">
            Book Your AI Video Campaign
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed">
            Ready to scale your monthly ROAS? Connect directly with SPRY production’s creative directors to audit your ad creatives & engineer your 2026 motion strategy.
          </p>

          <div className="space-y-4 pt-4 border-t border-white/10">
            {[
              "30-Minute Creative Strategy & Creative Audit",
              "Custom AI UGC & 3D Motion Proposal",
              "Guaranteed 48-Hour First Cut Delivery"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-xs text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-bright flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Toggle Calendly Option */}
          <div className="pt-4">
            <button
              onClick={() => setShowCalendlyEmbed(!showCalendlyEmbed)}
              className="w-full py-3 px-4 rounded-xl border border-cyan-500/40 text-cyan-bright text-xs font-mono font-semibold hover:bg-cyan-500/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Clock className="w-4 h-4" />
              <span>{showCalendlyEmbed ? "Switch to Inquiry Form" : "Open Live Calendly Booking Calendar"}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Form or Live Calendly Embed */}
        <div className="lg:col-span-7 bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-white/10">
          {showCalendlyEmbed ? (
            <div className="w-full h-[450px] rounded-xl overflow-hidden bg-slate-950 flex flex-col items-center justify-center p-4 border border-white/10 text-center space-y-4">
              <Calendar className="w-12 h-12 text-cyan-bright animate-bounce" />
              <h4 className="font-space text-xl font-bold text-white">SPRY Live Calendly Booking</h4>
              <p className="text-xs text-gray-300 max-w-sm">
                Select your preferred 30-minute time slot directly with our executive creative team.
              </p>
              <iframe
                src="https://calendly.com"
                title="Calendly Booking Widget"
                className="w-full h-[320px] rounded-lg border border-white/10"
              />
            </div>
          ) : submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyan-glow/20 border border-cyan-glow text-cyan-bright flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-space text-2xl font-bold text-white">Strategy Request Received!</h4>
              <p className="text-gray-300 text-sm max-w-md mx-auto">
                Thank you <span className="text-cyan-bright font-semibold">{formData.name}</span>. Our lead creative director will review your campaign details and reach out within 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-1.5" htmlFor="name">
                  Your Full Name <span className="text-cyan-bright">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="Alex Vance"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950/80 border border-white/15 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-glow focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-1.5" htmlFor="email">
                  Work Email Address <span className="text-cyan-bright">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="alex@brand.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950/80 border border-white/15 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-glow focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-1.5" htmlFor="company">
                    Company / Brand Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                    <input
                      id="company"
                      type="text"
                      placeholder="Apex Nutrition"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-950/80 border border-white/15 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-glow focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-1.5" htmlFor="budget">
                    Monthly Ad Budget
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-slate-950/80 border border-white/15 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-glow transition-all"
                  >
                    <option value="$5k - $15k">$5k - $15k / mo</option>
                    <option value="$15k - $50k">$15k - $50k / mo</option>
                    <option value="$50k+">$50k+ / mo</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider mb-1.5" htmlFor="message">
                  Campaign Goals & Vision
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Tell us about your product, current ROAS targets, and visual preferences..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950/80 border border-white/15 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-glow transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full glass-button bg-cyan-glow/20 border border-cyan-glow/50 text-cyan-bright font-semibold text-sm py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-cyan-glow/30 hover:bg-cyan-glow/30 transition-all min-h-[48px]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Strategy Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 bg-pitch/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200 overflow-y-auto">
        <div className="relative w-full max-w-4xl my-8">
          <button
            onClick={onCloseModal}
            className="absolute -top-12 right-0 z-50 p-2 text-gray-400 hover:text-white rounded-full bg-slate-900 border border-white/20 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-24 bg-pitch relative overflow-hidden">
      <div className="ambient-glow-cyan top-1/2 right-10 opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {formContent}
      </div>
    </section>
  );
}
