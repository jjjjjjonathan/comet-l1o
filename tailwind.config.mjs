import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#98d7cb', 600: '#007d6f', 900: '#003c34', 950: '#002b25' };
const gray = { 100: '#f3f6fe', 200: '#e7eefd', 300: '#b9c2d4', 400: '#7b8cac', 500: '#495876', 700: '#2a3854', 800: '#192641', 900: '#121824' };

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};
