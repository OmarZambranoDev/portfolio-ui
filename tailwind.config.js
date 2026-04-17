/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#344b33',
        'primary-hover': '#4a5d3e',
        secondary: '#7f886e',
        'secondary-hover': '#6b7359',
        accent: '#b78d6a',
        'accent-hover': '#a07d5c',
        muted: '#c5ae96',
        'muted-hover': '#d4bfa8',
      },
    },
  },
  plugins: [],
};