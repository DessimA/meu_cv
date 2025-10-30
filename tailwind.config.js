/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': 'rgba(0, 100, 255, 0.8)',
        'neon-gray': 'rgba(150, 150, 150, 0.8)',
        'neon-black': 'rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
}