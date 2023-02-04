/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      "font-family": {
        mono: ["Ubuntu Mono", "defaultTheme.fontFamily.mono"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".debug": {
          "box-sizing": "border-box",
          outline: "2px solid #ff6d00",
        },
      });
    }),
  ],
  daisyui: {
    themes: ["business"],
  },
};
