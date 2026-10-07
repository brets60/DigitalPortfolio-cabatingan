/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#080D16',
          secondary: '#0D1420',
          card: '#111A28',
          hover: '#162235',
        },
        text: {
          main: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
        },
        accent: {
          primary: '#3B82F6',
          secondary: '#60A5FA',
          light: '#93C5FD',
          glow: 'rgba(59, 130, 246, 0.15)',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          active: 'rgba(59, 130, 246, 0.3)',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(59, 130, 246, 0.25)',
        'accent-sm': '0 0 15px -3px rgba(59, 130, 246, 0.25)',
        'accent-md': '0 0 25px -4px rgba(59, 130, 246, 0.35)',
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
