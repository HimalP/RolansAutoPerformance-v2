/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        accent: "#f73b4b",
        dark: "#222222",
        darklight: "#292929",
        light: "#f9fafb",
        egg: "#F0EBD8",
      },
      listStyleImage: {
        checkmark: 'url("/dist/imgs/checkmark.svg")',
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
