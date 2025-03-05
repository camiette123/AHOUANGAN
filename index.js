/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1e40af",
          secondary: "#4f46e5",
          accent: "#f59e0b",
        },
      },
    },
    plugins: [],
  }

  