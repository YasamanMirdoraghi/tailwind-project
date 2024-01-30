/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./project/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'yas':"'EB Garamond', serif;",
        'yasi':"'Secular One', sans-serif;",
        'naz': "'Dancing Script', cursive;",
        'nazi': "'Zilla Slab', serif;",
      }
      
    },
  },
  plugins: [],
}
