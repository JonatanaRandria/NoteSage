/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors : {
        cyan : '#36EEE0',
        tiffany_blue : '#BCECE0',
        Cornflower:'#4C5270',
        hot_pink: '#EF7C8E'
      }
    },
  },
  plugins: [],
}

