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
        'clr-primary': '#18ffff',
        'clr-primary-light': '#adffff',
        'clr-primary-dark': '#091034',
        'clr-gray100': '#f9fbff',
        'clr-gray150': '#f4f6fb',
        'clr-gray200': '#eef1f6',
        'clr-gray300': '#e1e5ee',
        'clr-gray400': '#767b91',
        'clr-gray500': '#4f546c',
        'clr-gray600': '#2a324b',
        'clr-gray700': '#161d34',
        'clr-bg': '#060b23',
      },
    },
  },
  plugins: [],
};
