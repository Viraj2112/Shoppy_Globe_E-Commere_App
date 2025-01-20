/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playwrite-in': [['Playwrite IN', 'serif']]
      },
      screens:{
          "sm":"480px",
          "md":"768px",
          "lg":"1024px",
          "xl":"1280px"
        },
    },
  },
  plugins: [],
}

