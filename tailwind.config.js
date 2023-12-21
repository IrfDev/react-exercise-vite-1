/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**.tsx", "./src/*.tsx", "./index.html", "./src/**.tsx"],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0000",
        },
        secondary: {
          DEFAULT: "#D3FD06",
        },
        tertiary: {
          DEFAULT: "#C4C4C4",
          dark: "#5A5A5A",
        },
      },
    },
  },
  plugins: [],
};
