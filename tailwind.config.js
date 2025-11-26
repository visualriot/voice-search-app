import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "gradient-red-light": "linear-gradient(to bottom, #D2691E, #CC2200)",
        "gradient-red-dark": "linear-gradient(to bottom, #FFE3B2, #FF3532)",
        "gradient-gray-light": "linear-gradient(to bottom, #505050, #707070)",
        "gradient-gray-dark": "linear-gradient(to bottom, #9B9B9B, #E7E7E7)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#ffffff", // Light theme background
            foreground: "#000000", // Light theme text
            gray: "linear-gradient(to bottom, #D2691E, #CC2200)",
          },
        },
        dark: {
          colors: {
            background: "#1e1e27", // Dark theme background
            foreground: "#ffffff", // Dark theme text
            gray: "linear-gradient(to bottom, #9B9B9B, #E7E7E7)",
          },
        },
      },
    }),
  ],
};

module.exports = config;
