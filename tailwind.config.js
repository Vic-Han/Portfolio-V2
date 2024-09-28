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
      fontSize: {
        '2xl-relaxed': ['1.5rem', { lineHeight: '2.25rem' }],
        '3xl-relaxed': ['1.875rem', { lineHeight: '2.75rem' }],
        '4xl-relaxed': ['2.25rem', { lineHeight: '3.25rem' }],
        '5xl-relaxed': ['3rem', { lineHeight: '4.5rem' }],
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2400px',
      },
    },
  },
  plugins: [],
}

