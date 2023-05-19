/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      spacing: {
        126: "30rem",
      },
      padding: {
        "49px": "49px",
        "35px": "35px",
      },
      colors: {
        "summer-yellow": "#e28525",
        "regal-blue": "#016972",
        "dull-teal": "#003e3d",
      },
    },
  },

  plugins: [],
};
