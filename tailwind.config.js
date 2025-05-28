/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-lg': '1354px', // lg (1024px) + 30px
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #040BFF 0%, #0665FB 100%)',
        'secondary-gradient': 'linear-gradient(to right, #1A1B2E 0%, #545794 100%)',
        'pricing-gradient': 'linear-gradient(to right, #1D90F0 0%, #B76DF0 100%)',
      },
      colors: {
        accent: '#1E90FF',  // for game server and locations text
        feature: '#9333EA', // equivalent to purple-500
      },
      fontFamily: {
        'Rajdhani': ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
