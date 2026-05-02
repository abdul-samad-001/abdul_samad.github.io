/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#06060a",
        dark2: "#0e0e14",
        card: "rgba(14,14,22,0.6)",
        card2: "rgba(22,22,34,0.5)",
        primary: "#a78bfa",
        primary2: "#8b5cf6",
        accent: "#38bdf8",
        accent2: "#f472b6",
        gold: "#fbbf24",
        emerald: "#34d399",
        text: "#f1f5f9",
        text2: "#94a3b8",
        text3: "#475569",
        border: "rgba(255,255,255,0.06)",
        glass: "rgba(255,255,255,0.03)",
      },
      fontFamily: {
        head: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'orb': 'orb 18s ease-in-out infinite',
        'sPulse': 'sPulse 2s infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-slower': 'float 8s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'aurora': 'aurora 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'gradient-shift': 'gradientShift 6s ease-in-out infinite',
        'border-glow': 'borderGlow 4s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        orb: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(45px,-45px) scale(1.08)' },
          '66%': { transform: 'translate(-35px,35px) scale(0.94)' },
        },
        sPulse: {
          '0%, 100%': { boxShadow: '0 0 5px #22c55e' },
          '50%': { boxShadow: '0 0 15px #22c55e, 0 0 25px #22c55e' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        sLine: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '50.1%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        aurora: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)', opacity: '0.5' },
          '33%': { transform: 'rotate(120deg) scale(1.1)', opacity: '0.7' },
          '66%': { transform: 'rotate(240deg) scale(0.9)', opacity: '0.4' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(139,92,246,0.2)' },
          '50%': { borderColor: 'rgba(56,189,248,0.4)' },
        }
      }
    },
  },
  plugins: [],
}
