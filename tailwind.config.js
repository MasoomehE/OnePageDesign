module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    fontFamily : {
      body : ['myvazir'],
      display : ['myvazir']
    },
    extend: {

      keyframes: {
        typing: {
          '100%': { width: '0'},
          '60%': { width:'39%'},
          '0%' : {width:'39% '}
        }
      }

    },
  },
  plugins: [],
}
