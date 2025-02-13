import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/all-pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [nextui()],
};
export default config;
