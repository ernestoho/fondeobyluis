module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        green_300: "#6ccb9c",
        bluegray_50: "#eaecf0",
        gray_901: "#0d1624",
        blue_500: "#18a0fb",
        gray_900: "#121b29",
        bluegray_100: "#d6dae2",
        blue_A200: "#4f80e1",
        bluegray_900: "#1f2735",
        black_900_99: "#090b0d99",
        black_900: "#000919",
        bluegray_200: "#bac1ce",
        blue_400: "#37aee2",
        white_A700: "#ffffff",
        cyan_400: "#18cdca",
        bluegray_902: "#262f3b",
        bluegray_901: "#29313e",
      },
      borderRadius: {
        radius2: "2px",
        radius6: "6px",
        radius8: "8px",
        radius12: "12px",
        radius50: "50%",
      },
      fontFamily: { spacegrotesk: "Space Grotesk", opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
