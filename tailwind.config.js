/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        indigoDye: "#344966",
        lavaPink: "#E6AACE",
        babyPowder: "#F0F4EF",
        sage: "#BFCC94",
        richBlack: "#0D1821"
      },
      backgroundImage: {
        profileBack: "url('/src/assets/profileBack.svg')",
        gyrate: "url('/src/assets/finalBack.svg')",
        chaos: "url('/src/assets/ccchaos.svg')",
      },
      screens: {
        'tablet': '640px',
  
        'laptop': '1024px',
  
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
}

