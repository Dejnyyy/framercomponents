import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      animation: {
        "gradient-rotate": "gradient-rotate 2s linear infinite",
      },
      keyframes: {
        "gradient-rotate": {
          "0%": { backgroundPosition: "0% 50%",backgroundRotation: "0deg" },
          "50%": { backgroundPosition: "100% 50%",backgroundRotation: "180deg" },
          "100%": { backgroundPosition: "0% 50%",backgroundRotation: "0deg" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
