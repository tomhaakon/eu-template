/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        color1: '#eaf1dd', //biegeish
        color2: '#2c4326', //dirty green
        color3: '#86b559', // olive green
        color4: '#4f6228', // dark olive green
        color5: '#1e1e8f', // dark blue
        // Add as many custom colors as you like
      },
    },
    fontFamily: {
      NunitoSans: ['Nunito Sans', 'sans-serif'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
