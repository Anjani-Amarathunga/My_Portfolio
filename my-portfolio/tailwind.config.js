module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        orangeGlow: "#0015ff, #00c8ff, #ffffff",
        darkBg: "#0b0b0b",
        card: "#111",
        muted: "#9ca3af",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        ui: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "glow-orange": "0 8px 30px #0015ff, #00c8ff, #ffffff",
      },
    },
  },
  plugins: [],
};
