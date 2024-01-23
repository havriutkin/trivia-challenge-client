/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-purple': '#281548',
        'dark-pink': '#fe4fef',
      },
      fontFamily: {
        'custom-main': ['TrendSansOne', 'sans-serif'],
        'custom-buttons': ['ProximaNovaExtraCondensedBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

