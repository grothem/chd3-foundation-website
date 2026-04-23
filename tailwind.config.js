/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          light: "#DBEAFE",
          dark: "#1D4ED8",
        },
        accent: {
          DEFAULT: "#F59E0B",
          light: "#FEF3C7",
          dark: "#D97706",
        },
        brand: {
          indigo: "#3F51B5",
          yellow: "#FFEC3C",
        },
        neutral: {
          50: "#FAFAF8",
          100: "#F5F5F2",
          200: "#E8E8E4",
          300: "#D1D1CB",
          400: "#A3A39A",
          500: "#737368",
          600: "#525248",
          700: "#3A3A32",
          800: "#262620",
          900: "#1A1A14",
        },
        text: {
          DEFAULT: "#1E3A5F",
          muted: "#6B7280",
        },
        bg: {
          DEFAULT: "#FAFAF8",
          tint: "#EFF6FF",
        },
        card: "#FFFFFF",
        border: "#E5E7EB",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        md: "10px",
        lg: "14px",
        xl: "20px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(37,99,235,0.06)",
        elevated: "0 8px 32px rgba(37,99,235,0.12), 0 2px 8px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
