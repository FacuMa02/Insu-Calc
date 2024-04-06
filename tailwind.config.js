import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/table.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
};

// // tailwind.config.js
// const { nextui } = require("@nextui-org/theme");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // single component styles
//     "./node_modules/@nextui-org/theme/dist/components/table.js",
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [nextui()],
// };
