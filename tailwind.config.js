/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      height: {
        'screen-custom': 'calc(var(--vh) * 100)',
      },
    },
  },
  plugins: [],
}
