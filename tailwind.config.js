export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  daisyui: {
    themes: ["forest"],
  },
  theme: {
    extend: {},

  },
  plugins: [require("daisyui")],
}