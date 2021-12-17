module.exports = {
  // mode: 'jit', // tailwind 3.0 is already mode jit
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class' or 'false'
  theme: {
    extend: {
      colors: {},
    },
    fontFamily: {
      sans: ['Poppins, Inter'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
