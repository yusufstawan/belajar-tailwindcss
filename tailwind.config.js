module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#EAE7FF',
          200: '#CBC3FF',
          300: '#AC9FFF',
          400: '#6E57FF',
          500: '#300FFF',
          600: '#2B0EE6',
          700: '#1D0999',
          800: '#160773',
          900: '#0E054D',
        },
        pink: {
          100: '#FFE8F6',
          200: '#FFC5E8',
          300: '#FFA2DA',
          400: '#FF5DBE',
          500: '#FF17A2',
          600: '#E61592',
          700: '#990E61',
          800: '#730A49',
          900: '#4D0731',
        },
      }
    },
    fontFamily: {
      sans: ['Source Sans Pro', "system-ui", "-apple- system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
        "Helvetica Neue", "Arial", "Noto Sans", "sans-serif",
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji"]
    },
  },
  plugins: [],
}
