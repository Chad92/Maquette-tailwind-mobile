/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: { // dans le extend j ecris mes customs que je veux rajouter a tailwind, attention a ne pas l ecrire en dehors sinon ca ecrase les donneés css de taildwind //
      colors: {
        'bleu-de-fond': 'hsl(217, 54%, 11%)',
        'bleu-block-fond': 'hsl(216, 50%, 16%)',
        'background-exp': '#202831',
        'barre-more' : 'hsla(51, 100%, 49%, 40%)',
        'barre-more-pink' : 'hsla(7, 99%, 70%, 40%)',
      },
      backgroundColor: {
        'footer-color':'#89D5AF'
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces', 'sans-serif']
      }
    },
  },
  plugins: [],
}
