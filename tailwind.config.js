/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          graydark: "#495F6A",
          graylight: "#C4CFD4",
          graystrong: "#1F292D",
        },
        purple: {
          Purple_dark: "#422659",
          Purple_light: "#67517A",
        },
        yellow: {
          yellow:"#FFB400"
        },
        slate:{
          slatedark: "#212B36"
        }
      },
    },
    fontFamily: {
      heebo_regular: ['"heebo_regular", serif'],
      heebo_Medium: ['"heebo_Medium", serif'],
      inter_regular: ['"inter_regular", serif'],
      inter_Medium: ['"inter_Medium", serif'],
    },
  },
  plugins: [],
};
