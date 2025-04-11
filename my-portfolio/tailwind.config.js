/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'cool-black': '#0f1010',
          'aurora-green': '#43cc88',
          'aurora-magenta': '#c82087',
          'aurora-purple': '#8821ad',
          'aurora-yellow': '#dbb957',
          'aurora-blue': '#187795',
        },
        fontFamily: {
          body: ['Times New Roman', 'Times', 'serif'],
          title: ['Arial', 'Helvetica', 'sans-serif'],
        }
      },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
  }