/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        'y-180': 'rotateY(180deg)'
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'system-ui', 'sans-serif'],
        display: ['sohne', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        stripe: {
          text: '#0a2540',
          gradient: {
            from: '#7a73ff',
            to: '#32325d'
          }
        }
      }
    },
  },
  plugins: [],
}