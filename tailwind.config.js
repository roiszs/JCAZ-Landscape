// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#161616",
          fg: "#FCFBF7",
          green: "#3D7433",
          green2: "#469C44",
          yellow: "#E2BE27",
          yellow2: "#FDDA3D",
        },
      },
    },
  },
  plugins: [],
};

