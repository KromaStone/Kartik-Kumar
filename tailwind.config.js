/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom': '1px 1px 2px #C0C0C0',
      },
      colors: {
        primary: "#1E1E1E",
        secondary: "#C0C0C0", // Silver
        tertiary: "#444444", // Gray
        "black-100": "#121212",
        "black-200": "#282828",
        "white-100": "#C0C0C0",
        accent: "#FFD700", // Gold
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(30, 30, 30, 0.5)",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.avif')",
      },
    },
  },
  plugins: [],
}
