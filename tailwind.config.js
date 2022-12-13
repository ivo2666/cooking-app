/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.2)",
      },
      height: {
        input: "54px",
      },
      width: {
        input: "328px",
      },
      padding: {
        input: "15px 16px",
      },
      borderRadius: {
        custom: "0px 0px 4px 4px",
      },
      letterSpacing: {
        custom: "0.6px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "content-primary": "rgba(0, 0, 0, 0.87)",
        "content-secondary": "rgba(0, 0, 0, 0.6)",
        gainsboro: "rgba(0, 0, 0, 0.12)",
        "gray-c": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
