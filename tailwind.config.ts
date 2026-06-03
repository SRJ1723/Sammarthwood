/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury wood tones
        teak: {
          50: '#faf8f5',
          100: '#f5f0eb',
          200: '#e8ddd2',
          300: '#d4c4b0',
          400: '#b89968',
          500: '#a8854a',
          600: '#8b6f3f',
          700: '#6d5530',
          800: '#5c4829',
          900: '#3d2f1f',
        },
        walnut: {
          50: '#faf8f6',
          100: '#f4f0eb',
          200: '#e6dfd5',
          300: '#d4c4b0',
          400: '#b89968',
          500: '#8b6f3f',
          600: '#6d5530',
          700: '#5c4829',
          800: '#4a3821',
          900: '#2f241a',
        },
        gold: {
          50: '#fffef9',
          100: '#fffbf2',
          200: '#fff8e6',
          300: '#ffd700',
          400: '#d4af37',
          500: '#c9a961',
          600: '#b8960e',
          700: '#997707',
          800: '#7d6106',
          900: '#665c04',
        },
        ivory: {
          50: '#fffef9',
          100: '#fffbf2',
          200: '#fff8e6',
          300: '#fffadb',
          400: '#fff5c2',
          500: '#fffadb',
          600: '#f0eae0',
          700: '#e8ddd2',
          800: '#d4c4b0',
          900: '#b8a899',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 1s ease-out',
        'scroll-indicator': 'scrollIndicator 2s infinite',
        'floating-dust': 'floatingDust 20s infinite linear',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { 
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scrollIndicator: {
          '0%, 100%': { opacity: '0.5', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(10px)' },
        },
        floatingDust: {
          '0%': { opacity: '0', transform: 'translateY(100vh) translateX(0)' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(-100vh) translateX(100px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      boxShadow: {
        'luxury-sm': '0 2px 12px rgba(0, 0, 0, 0.08)',
        'luxury-md': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'luxury-lg': '0 16px 64px rgba(0, 0, 0, 0.15)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '44px'],
        '5xl': ['48px', '52px'],
        '6xl': ['60px', '68px'],
        '7xl': ['72px', '80px'],
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(({ addUtilities }) => {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
        },
      });
    }),
  ],
}

module.exports = config
