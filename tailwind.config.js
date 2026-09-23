/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        diwali: {
          navy: '#0b0d1e',
          night: '#080a18',
          deep: '#12142d',
          purple: '#28114b',
          royal: '#3b186b',
          maroon: '#541026',
          ruby: '#781534',
          gold: {
            light: '#ffe58f',
            DEFAULT: '#e5b32f',
            rich: '#d4af37',
            dark: '#b38600'
          },
          amber: '#ff9900',
          ivory: '#fcf8f0'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(229, 179, 47, 0.45)',
        'diya-glow': '0 0 35px rgba(255, 153, 0, 0.55)',
        'purple-glow': '0 0 30px rgba(59, 24, 107, 0.6)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.7)'
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.82', transform: 'scale(0.96)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' }
        }
      },
      animation: {
        flicker: 'flicker 2.2s infinite ease-in-out',
        float: 'floatSlow 4s infinite ease-in-out',
        sparkle: 'sparkle 3s infinite ease-in-out'
      }
    },
  },
  plugins: [],
}
