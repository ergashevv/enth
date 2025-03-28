// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      // Container ichidagi ichki "padding" sozlamalari
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "1rem",
        xl: "0rem", // xohishingizga qarab o'zgartirishingiz mumkin
      },
      // Breakpointlarga mos ravishda container max-width'lari
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1179px",
        "2xl": "1179px", // 2xl'da ham 1179px bo'lib qoladi
      },
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
