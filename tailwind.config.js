/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f59e0b",
          "secondary": "#8b5cf6",
          "accent": "#2563eb",
          "neutral": "#1A1A1A",
          "base-100": "#FFFFFF",
          "info": "#a3e635",
          "success": "#81328F",
          "warning": "#EF8234",
          "error": "#EA4034",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}