/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'sans-serif-collection': ['Sans Serif Collection', 'sans-serif'],
        'sans': ['Sans Serif Collection', 'sans-serif'], // Adding as default sans
      },
      colors: {
        'medifit': {
          'primary': '#503217',
          'secondary': '#8F7D6A',
          'bg-primary': '#EEEDE7',
          'bg-secondary': '#E8E6DE',
          'white': '#F2F2F2',
        }
      },
      opacity: {
        '15': '0.15',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
