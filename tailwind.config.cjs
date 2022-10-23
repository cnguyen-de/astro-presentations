const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(255, 255, 255, 0.25)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
