/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        "neutral-950": "#0E121B",
        "neutral-900": "#191B25",
        "neutral-800": "#232530",
        "neutral-700": "#2B303B",
        "neutral-600": "#525866",
        "neutral-500": "#717784",
        "neutral-400": "#99A0AE",
        "neutral-300": "#CACFD8",
        "neutral-200": "#E0E4EA",
        "neutral-100": "#F3F5F8",
        "neutral-50": "#F5F7FA",
        neutral: "#FFFFFF",
        "blue-700": "#2547D0",
        "blue-500": "#335CFF",
        "blue-50": "#EBF1FF",
        green: "#21C16B",
        green: "#D1FBE9",
        red: "#FB3748",
        red: "#FFD5D8",
      },
      fontSize: {
        "preset-1": [
          "1.5rem",
          {
            lineHeight: "120%",
            letterSpacing: "-0.5px",
            fontWeight: "700",
          },
        ],
        "preset-2": [
          "1.25rem",
          {
            lineHeight: "120%",
            letterSpacing: "-0.5px",
            fontWeight: "700",
          },
        ],
        "preset-3": [
          "1rem",
          {
            lineHeight: "120%",
            letterSpacing: "-0.3px",
            fontWeight: "600",
          },
        ],
        "preset-4": [
          "0.875rem",
          {
            lineHeight: "120%",
            letterSpacing: "-0.2px",
            fontWeight: "500",
          },
        ],
        "preset-5": [
          "0.875rem",
          {
            lineHeight: "120%",
            letterSpacing: "-0.2px",
            fontWeight: "400",
          },
        ],
        "preset-6": [
          "0.75rem",
          {
            lineHeight: "120%",
            letterSpacing: "-0.2px",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};
