/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "#f8fafc",
        surface: "#ffffff",
        "surface-subtle": "#f1f5f9",
        ink: "#0f172a",
        "ink-muted": "#475569",
        "ink-soft": "#64748b",
        accent: "#d97706",
        "accent-dark": "#b45309",
        "field-dark": "#090d16",
        "field-dark-ink": "#f8fafc",
      },
      fontFamily: {
        sans: ["Cabinet Grotesk", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
