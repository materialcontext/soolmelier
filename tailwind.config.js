/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pri: '#ff4500',
        alt: '#34343e',
        sec: '#F4C430',
        off: '#F3D69D'
      }
    }
  },
  plugins: [],
}