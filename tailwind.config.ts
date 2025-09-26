import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["var(--font-rubik)", "sans-serif"],
        questrial: ["var(--font-questrial)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.02em", // -2% letter spacing
      },
    },
  },
  plugins: [],
};

export default config;
