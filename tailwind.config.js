/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#020043",
        textColor: "#4D4C7B",
        cardBgColor: "#343268",
        faqColor: "#FFFFF5",
      },
    },
  },
  plugins: [],
};
