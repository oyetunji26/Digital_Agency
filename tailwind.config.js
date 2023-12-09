/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      gray: "#DEDCDB",
      deepGray: "#B4AFAD",
      "primary-fade": "#8EADD5",
      "backgrnd": "#8EADD53D",
      blacked: "#272D38"

    },
    extend: {
      backgroundImage: {
        "ell2": "url('/src/assets/ellipse2.png')",
        "ell3": "url('/src/assets/ellipse3.png')",
        "fig1": "url('/src/assets/fig1.png')",
        "fig2": "url('/src/assets/fig2.png')",
        "fig3": "url('/src/assets/fig3.png')",
        "fig4": "url('/src/assets/fig4.png')"
        
      },
      screens: {
        xs: "350px",
        tb: "769px",
        mdd: "1000px"
      },
    },
  },
  plugins: [],
}