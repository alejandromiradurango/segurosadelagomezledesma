/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        primary: '#413B6B',
        secondary: '#6F95FF',
        services: '#5C65C0'
      }
    }
  },
  plugins: []
}
