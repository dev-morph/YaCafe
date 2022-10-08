/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'basic-bg': '#060b23',
        test: 'rgb(255 255 255)',
      },
    },
  },
  plugins: [],
};
