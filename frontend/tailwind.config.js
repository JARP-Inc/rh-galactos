/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".debug": {
          "box-sizing": "border-box",
          outline: "2px solid #ff6d00",
        },
        ".my-glass": {
          "backdrop-filter": "blur(16px) saturate(180%)",
          "-webkit-backdrop-filter": "blur(16px) saturate(180%)",
          "background-color": "rgba(17, 25, 40, 0.75)",
        },
      });
    }),
  ],
  daisyui: {
    themes: ["business"],
  },
};
