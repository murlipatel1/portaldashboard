/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    screens:{
      'sm':{ 'min':'0px','max':'815px'}
    },
    extend: {},
  },
  plugins: [],
}
