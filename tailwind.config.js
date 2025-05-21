/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2463',
          dark: '#071a4a',
        },
        accent: '#3CAEA3',
        secondary: '#5D8CAE',
        dark: '#1A1B41',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      boxShadow: {
        'skill': '0 4px 20px -2px rgba(10, 36, 99, 0.12)',
      },
    },
  },
  plugins: [],
};