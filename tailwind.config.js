/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        acrez: {
          bg: "#040f09",
          dark: "#01532b",
          light: "#2e8b4e",
          accent: "#43c46e",
          surface: "rgba(1, 83, 43, 0.08)",
        },
      },
      backgroundImage: {
        'acrez-gradient': 'linear-gradient(135deg, #2e8b4e 0%, #01532b 50%, #002912 100%)',
        'acrez-text': 'linear-gradient(180deg, #329051 0%, #01532b 100%)',
      }
    },
  },
  plugins: [],
};