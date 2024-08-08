/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128' : '32rem',
        '144' : '36rem',
        '192' : '48rem',
      },
    },
  },
  plugins: [],
}

