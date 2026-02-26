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
                brand: {
                    orange: "#FF7D29",
                    cream: "#FFF9EE",
                    softOrange: "#FFB677",
                    dark: "#1A1A1A",
                    gray: "#71717A",
                },
            },
            borderRadius: {
                "3xl": "1.5rem",
                "4xl": "2rem",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
                caveat: ["var(--font-caveat)", "cursive"],
                patrickHand: ["var(--font-patrick-hand)", "cursive", "sans-serif"],
                lexend: ["var(--font-lexend)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
