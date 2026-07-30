/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        debo: {
          primary: '#1E40AF',
          secondary: '#D97706',
          dark: '#0F172A',
          light: '#F8FAFC',
          accent: '#059669'
        }
      },
      fontFamily: {
        qatar: ['QatarArabic', 'sans-serif'],
        sans: ['system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
