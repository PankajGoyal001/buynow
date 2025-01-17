/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        gray:{
          'graylight': "#495F6A",
          'Silver': "#C4CFD4",
          'Purple': "#422659",
        }
      }
    },
    fontFamily: {
      heebo: [
        '"heebo", serif',
      ],
    },
  },
  plugins: [],
}

