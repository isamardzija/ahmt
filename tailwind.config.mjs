/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        colors: {
            white: "#ffffff",
            gray: "#A5A5A5",
            dark: "#1e1e1e",
            black: "#060606",
            primary: "#5a8d91",
            pink: "#d3a3c9",
            blue: "#99afde",
            purple: "#c3a3e3",
            green: "#a6cc9b",
            yellow: "#f4e099",
            orange: "#f5ca93",
            red: "#ea968c",
            cream: "#f6ead1",
            lightGreen: "#D5E2E3",
        },
        fontSize: {
            56: "3.5rem", // 56px
            50: "3.125rem", // 50px
            32: "2rem", // 32px
            24: "1.5rem", // 24px
            20: "1.25rem", // 20px
            18: "1.125rem", // 18px
            16: "1rem", // 16px
            14: "0.875rem", // 14px
        },
        fontFamily: {
            sans: ["Quicksand", "sans-serif"],
        },
        extend: {
            padding: {
                body: "15px",
                half: "15px",
            },
            lineHeight: {
                paragraph: "17.5px",
            },
            borderRadius: {
                button: "10px",
            },
            gap: {
                standard: "30px",
            },
        },
    },
    plugins: [],
};
