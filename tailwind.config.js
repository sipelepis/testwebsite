/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  darkMode: 'media',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'base-gray': '#434343',
        'base-blue': '#4285F4',
        'base-red': '#EA4335',
        'base-yellow': '#FBBC04',
        'base-green': '#34A853'
      },
      darkMode: 'media',
      maxWidth:{
        'hb-lg':'800px',
        'ho-lg':'1425px',
        'hpr-lg': '800px',
        'hb-xl':'900px',
        'ho-xl':'1550px',
        'hpr-xl': '1100px',
        'hb-2xl':'1000px',
        'ho-2xl': '1625px',
        'hpr-2xl':'1200px',

      },
      minWidth:{
        'hb-lg':'800px',
        'ho-lg':'1425px',
        'hpr-lg': '800px',
        'hb-xl':'900px',
        'ho-xl':'1550px',
        'hpr-xl': '1100px',
        'hb-2xl':'1000px',
        'ho-2xl': '1625px',
        'hpr-2xl':'1200px',
      },
      inset: {
        'hb-y-2xl': ''
      }

    },
  },
  plugins: [

  ],
};
