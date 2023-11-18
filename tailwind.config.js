/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["components/**/*.{js,jsx,ts,tsx}", "app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ExtraLightFont: ["PlusJakartaSans_200ExtraLight"],
        ExtraLightItalicFont: ["PlusJakartaSans_200ExtraLight_Italic"],
        RegularFont: ["PlusJakartaSans_400Regular"],
        LightFont: ["PlusJakartaSans_300Light"],
        LightItalicFont: ["PlusJakartaSans_300Light_Italic"],
        MediumFont: ["PlusJakartaSans_500Medium"],
        MediumItalicFont: ["PlusJakartaSans_500Medium_Italic"],
        SemiBoldFont: ["PlusJakartaSans_600SemiBold"],
        SemiBoldItalicFont: ["PlusJakartaSans_600SemiBold_Italic"],
        BoldFont: ["PlusJakartaSans_700Bold"],
        BoldItalicFont: ["PlusJakartaSans_700Bold_Italic"],
        ExtraBoldFont: ["PlusJakartaSans_800ExtraBold"],
        ExtraBoldItalicFont: ["PlusJakartaSans_800ExtraBold_Italic"],
      },
      colors: {
        primary: {
          100: "#FCE7F3",
          200: "#FBCFE7",
          300: "#F8B7DB",
          400: "#F38AC2",
          500: "#EF5DA9",
          600: "#D65698",
          700: "#8F3B66",
          800: "#6B2C4D",
          900: "#471D34",
        },
        secondary: {
          100: "#E6F5F0",
          200: "#C0EAD9",
          300: "#9ADFC2",
          400: "#4DCF9B",
          500: "#00BF74",
          600: "#00AB67",
          700: "#007144",
          800: "#005634",
          900: "#003822",
        },
      },
    },
  },
  plugins: [],
};
