/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
