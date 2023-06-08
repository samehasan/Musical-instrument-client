/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Update the color values as per your light theme
        primary: '#FFFFFF',
        secondary: '#F3F4F6',
        // ...
      },
    },
  },
  plugins: [require("daisyui")],
}

