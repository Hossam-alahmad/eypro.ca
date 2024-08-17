import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      backgroundImage: {
        "cleaning-service-1": "url(/assets/images/cleaning-service-2.jpeg)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        background: "hsl(var(--background-color))",
        primary: "hsl(var(--primary-color))",
        secondary: "hsl(var(--secondary-color))",
        third: "hsl(var(--third-color))",
        destructive: "hsl(var(--destructive-color))",
        success: "hsl(var(--success-color))",
        text: {
          primary: "hsl(var(--primary-text))",
          secondary: "hsl(var(--secondary-text))",
        },
        border: {
          primary: "hsl(var(--primary-border))",
          secondary: "hsl(var(--secondary-border))",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
