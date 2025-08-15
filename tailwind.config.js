/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'floatx': 'floatx 16s ease-in-out infinite',
        'floaty': 'floaty 18s ease-in-out infinite',
      },
      keyframes: {
        floatx: {
          '0%, 100%': { transform: 'translateX(-20%)' },
          '50%': { transform: 'translateX(20%)' }
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(-20%)' },
          '50%': { transform: 'translateY(20%)' }
        }
      }
    },
  },
  plugins: [],
}
