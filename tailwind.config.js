module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./public/index.html'
  ],
  theme: {
    fontSize:{
      'rockethtml': '.875rem',
    },
    extend: {
      colors:{
        'optblue': '#4C7CE3'
      },
      letterSpacing:{
        wide:'.0625rem'
      }
    },
  },
  plugins: [],
}
