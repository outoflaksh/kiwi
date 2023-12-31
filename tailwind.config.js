/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#F8F8FF",
                secondary: "#C0C0C4",
                tertiary: "#7389F4",
                background: {
                    primary: "#1F1F22",
                    secondary: "#13132E",
                    tertiary: "#28282D",
                },
            },
        },
    },
    plugins: [],
};
