/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      transitionDelay: {
        '0': '0ms',
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('ch', '& > *');
      addVariant('ch2', '& > * > *');
      addVariant('ch3', '& > * > * > *');
    }
  ],
};
