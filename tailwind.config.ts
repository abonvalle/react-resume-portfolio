/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: {
        dark: {
          css: {
            backgroundColor: "#1c1b22",
            color: "#f3f4f6",
          },
        },
        light: {
          css: {
            backgroundColor: "#f3f4f6",
            color: "#1c1b22",
          },
        },
      },
    },
  },
};
