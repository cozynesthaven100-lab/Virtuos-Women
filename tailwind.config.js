/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Violet / purple — matches the VWD logo (crown, gown, ribbon)
        primary: {
          50: '#f9f4fb',
          100: '#f1e3f6',
          200: '#e2c3ec',
          300: '#cb96db',
          400: '#ac60c3',
          500: '#8f3ba9',
          600: '#752690',
          700: '#5e1d74',
          800: '#481760',
          900: '#37124a',
          950: '#210a2e',
        },
        // Warm gold — matches the crown & frame in the logo
        gold: {
          50: '#fdfaf3',
          100: '#faf2dd',
          200: '#f4e3b8',
          300: '#edce88',
          400: '#e6b356',
          500: '#df9a34',
          600: '#cc7f28',
          700: '#a96222',
          800: '#864e21',
          900: '#6e401f',
          950: '#3d210d',
        },
        // Secondary accent — soft magenta-pink from the crown gradient
        accent: {
          50: '#fdf3f8',
          100: '#fbe3f0',
          200: '#f7c6e2',
          300: '#ef97c9',
          400: '#e35fa8',
          500: '#cf3888',
          600: '#b02170',
          700: '#8f195b',
          800: '#74184b',
          900: '#611740',
          950: '#390921',
        },
        // Neutral scale — white background with a violet-tinted undertone
        cream: {
          50: '#ffffff',
          100: '#f8f5fb',
          200: '#eee6f3',
          300: '#dccbe6',
          400: '#b9a0c8',
          500: '#9678a8',
          600: '#775b88',
          700: '#5b436a',
          800: '#43304f',
          900: '#2f2038',
          950: '#1a0f22',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'heading': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(180deg, rgba(26,15,34,0.60) 0%, rgba(26,15,34,0.35) 40%, rgba(26,15,34,0.70) 100%)',
        'soft-gradient': 'linear-gradient(135deg, #ffffff 0%, #f8f5fb 100%)',
      },
    },
  },
  plugins: [],
};
