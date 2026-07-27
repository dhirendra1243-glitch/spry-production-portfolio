/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pitch: "#05050A",
        slate: {
          950: "#0A0A10",
          900: "#0F0F18",
          850: "#141422",
          800: "#1A1A2A",
          700: "#26263A",
        },
        magenta: {
          glow: "#EC4899",
          bright: "#F472B6",
          dark: "#BE185D",
        },
        purple: {
          neon: "#A855F7",
          glow: "#C084FC",
          deep: "#6366F1",
          dark: "#7E22CE",
        },
        chrome: {
          light: "#F8FAFC",
          mid: "#94A3B8",
          dark: "#334155",
        }
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        space: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        'radial-volumetric': 'radial-gradient(circle at center, rgba(168, 85, 247, 0.25) 0%, rgba(236, 72, 153, 0.15) 40%, rgba(5, 5, 10, 0) 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
        'chrome-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #94A3B8 50%, #334155 100%)',
      },
      boxShadow: {
        'magenta-glow': '0 0 35px -5px rgba(236, 72, 153, 0.4)',
        'purple-glow': '0 0 35px -5px rgba(168, 85, 247, 0.4)',
        'chrome-edge': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        }
      }
    },
  },
  plugins: [],
};
