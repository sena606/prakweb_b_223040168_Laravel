/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"; // Ganti require dengan import

export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
