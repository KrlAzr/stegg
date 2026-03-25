/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Inter drives the Stripe-like interface
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        // Plus Jakarta is great if you want to use it for display headers later
        display: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
        // Required for the Stegg typographic logo
        baloo: ['"Baloo Tamma 2"', 'cursive'],
      },
      colors: {
        slate: {
          ...defaultTheme.colors.slate,
          25: '#fcfcfd', // Your custom ultra-light slate
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
        // Upgraded to a premium cubic-bezier curve
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float 8s ease-in-out infinite',
        // Hero background meshes
        'blob': 'blob 12s infinite cubic-bezier(0.4, 0, 0.2, 1)',
        // Hero text shimmer
        'shimmer': 'shimmer 8s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
    },
  },
  plugins: [],
};