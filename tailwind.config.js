/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      height: {
        'screen-dynamic': 'calc(var(--vh, 1vh) * 100)',
    },
    },
  },
  plugins: [],
}
