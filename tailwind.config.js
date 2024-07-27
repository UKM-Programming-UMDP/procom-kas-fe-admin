/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/renderer/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.7rem",
        "3xs": "0.4rem"
      }
    }
  },
  plugins: []
};
