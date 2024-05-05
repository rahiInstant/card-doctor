/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Inter: '"Inter", sans-serif',
      },
      backgroundColor: {
        primary: "#FF3811",
      },
      borderColor: {
        primary: "#FF3811",
      },
      textColor: {
        primary: "#FF3811",
        secondary: "#737373",
      },
    },
  },
};
