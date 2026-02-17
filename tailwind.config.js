/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed",
        accent: "#06b6d4",
        dark: "#0b1120",
        card: "rgba(255,255,255,0.05)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 30% 30%, #7c3aed33, transparent 40%), radial-gradient(circle at 70% 70%, #06b6d433, transparent 40%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(124, 58, 237, 0.4)",
      },
    },
  },
};
