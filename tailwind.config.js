const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "operators-art": "url('/operators-art.jpg')"
      }),
      fontFamily: {
        "headline": ["Montserrat", "sans-serif"],
        "main": ["Open Sans", "sans-serif"]
      }
    },
    screens: {
      "xs": "475px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
