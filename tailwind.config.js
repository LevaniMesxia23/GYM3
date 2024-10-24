/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-transparent': 'linear-gradient(180deg, #D7FD44 0%, #5C6B20 100%)',
      },
    },
  },
  plugins: [],
};
