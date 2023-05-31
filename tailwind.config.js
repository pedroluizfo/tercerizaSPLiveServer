module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        cyan_A400: "#00f7ed",
        gray_600: "#828282",
        gray_400: "#bdbdbd",
        yellow_700_87: "#ffbf3487",
        gray_100: "#f2f2f2",
        black_900_01: "#000000",
        deep_orange_A400_87: "#ff340287",
        black_900: "#0a0707",
        yellow_700: "#ffbf34",
        white_A700_01: "#f8ffff",
        white_A700_02: "#ffffff",
        blue_gray_900_99: "#33333399",
        blue_gray_900: "#293335",
        black_900_19: "#00000019",
        white_A700: "#fefefe",
        deep_orange_A400: "#ff3402",
        yellow_700_3f: "#ffbf343f",
      },
      fontFamily: {
        arboriabold: "Arboria-Bold",
        arborialight: "Arboria-Light",
        campuni: "Campuni",
        arboriabook: "Arboria-Book",
        arboria: "Arboria",
        inter: "Inter",
        fontfamily: "",
        arboriablack: "Arboria-Black",
      },
      boxShadow: { bs: "0px 1px  2px 0px #00000019" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
