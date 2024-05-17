import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F87000",
        "primary-light": "rgba(248, 112, 0, 0.1)",
        secondary: "#151212",
        "secondary-light": "rgba(39, 39, 39, 0.42)",
        "secondary-medium": "rgba(39, 39, 39, 0.2)",
        tertiary: "#FFFFFF29",
        "tertiary-sub": "#737373",
        basic: "#2727276B",
      },
      backgroundImage: {
        hero: "url('/images/hero.png')",
        prefooter: "url('/images/prefooter.svg')",
        serviceshero: "url('/images/serviceshero.svg')",
        abouthero: "url('/images/abouthero.png')",
        "gradient-linear":
          "linear-gradient(180deg, rgba(21, 18, 18, 0) 0%, #151212 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
