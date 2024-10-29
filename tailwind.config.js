/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '100' : '25rem',
        '112':  '28rem',
        '128' : '32rem',
        '144' : '36rem',
        '192' : '48rem',
      },
      height: {
        '100' : '25rem',
        '112':  '28rem',
        '128' : '32rem',
        '144' : '36rem',
        '192' : '48rem',
      },
      scale:{
          '60' : '0.6',
          '175' : '1.75'
      },
      fontSize: {
        '3xs' : ['0.6rem', {lineHeight: '0.8rem'}],
        '2xs' : ['0.65rem', {lineHeight: '0.9rem'}],
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2400px',
      },
    },
  },
  plugins: [],
}

