/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#fefefe',
      'dark-red': '#f04e4e',
      'light-red': 'f9b1b0',
      'dark-green': '#1b424d',
      'light-green': '#889da2',
    },
    gridTemplateRows: {
      layout: 'auto 1fr auto',
    },
    gridTemplateColumns: {
      'card-responsive': 'repeat(auto-fit, minmax(250px, 1fr))',
    },
  },
  plugins: [],
};
