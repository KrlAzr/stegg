/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        slate: {
          25: '#fcfcfd', // Your custom ultra-light slate
          ...defaultTheme.colors.slate,
        },
        brand: {
          dark: '#0B0F19',
          accent: '#2563eb',
        },
      },
      backgroundImage: {
        'gradient-mesh':
          'radial-gradient(at 0% 0%, rgba(219, 234, 254, 0.6) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(224, 242, 254, 0.6) 0px, transparent 50%)',
        'card-gradient':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)',
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        card: '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)',
        float: '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  plugins: [],
};
