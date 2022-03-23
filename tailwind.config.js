module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto Mono', 'sans-serif'],
      },
      animation: {
        slow: 'fade-Out .7s linear 1',
      },
      keyframes: {
        'fade-Out': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-In': {
          '0%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
