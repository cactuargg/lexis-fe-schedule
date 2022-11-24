/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridAutoColumns: {
        'schedule-columns': 200,
      },
    },
  },
  plugins: [],
};
