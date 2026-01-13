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
          green: "#0F6300",   // Saguaro Green
          gold: "#FFCE00",    // Desert Sun Gold
          white: "#FFFFFF",   // Sonoran White Sand
          black: "#000000",   // Monument Shadow
        },
      },
    },
  },
  plugins: [],
};

