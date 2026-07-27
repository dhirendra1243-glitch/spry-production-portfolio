'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    budget: '$5k - $10k',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', brand: '', budget: '$5k - $10k', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_0_60px_rgba(168,85,247,0.15)]">
      {status === 'success' ? (
        <div className="py-12 text-center">
          <CheckCircle2 size={56} className="text-emerald-400 mx-auto mb-4 animate-bounce" />
          <h3 className="text-2xl font-bold mb-2 font-serif">Inquiry Transmitted</h3>
          <p className="text-sm font-mono text-white/60">
            Our creative directors will analyze your brand prompt and reach out within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 text-xs font-mono text-purple-400 underline hover:text-purple-300 cursor-pointer"
          >
            SEND ANOTHER MESSAGE
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-white/60 uppercase mb-2">Your Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Cyber Director"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-white/60 uppercase mb-2">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="client@brand.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-white/60 uppercase mb-2">Brand / Company</label>
              <input
                type="text"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                placeholder="NeoStudio Inc."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-white/60 uppercase mb-2">Project Budget</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#08080f] border border-white/10 text-white focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="$2k - $5k">$2,000 – $5,000</option>
                <option value="$5k - $10k">$5,000 – $10,000</option>
                <option value="$10k+">$10,000+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-white/60 uppercase mb-2">Project Vision / Details *</label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your ad campaign goals, required deliverables, or aesthetic ideas..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-white hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(168,85,247,0.4)] disabled:opacity-50 cursor-pointer min-h-[48px]"
          >
            {status === 'loading' ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                <Sparkles size={18} /> Transmit Campaign Brief <Send size={16} />
              </>
            )}
          </button>

          {status === 'error' && (
            <p className="text-xs font-mono text-rose-400 text-center">
              Transmission failed. Check your network or try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
}

export { ContactForm };
