/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        ink: '#11151c',
        graphite: '#2e3238',
        mist: '#eef0ee',
        parchment: '#f7f4ee',
        brass: '#b79a5b',
        navy: '#172233',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(17, 21, 28, 0.12)',
        panel: '0 18px 60px rgba(17, 21, 28, 0.18)',
      },
    },
  },
  plugins: [],
};
