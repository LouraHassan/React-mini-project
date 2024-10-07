/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),

  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#F4F8F8",
          
"primary-content": "#151515",
          
"secondary": "#657686",
          
"secondary-content": "#dee2e6",
          
"accent": "#1DA1F3",
          
"accent-content": "#000914",
          
"neutral": "#202327",
          
"neutral-content": "#cdcecf",
          
"base-100": "#000000",
          
"base-200": "#000000",
          
"base-300": "#000000",
          
"base-content": "#F4F8F8",
          
"info": "#1DA1F3",
          
"info-content": "#000914",
          
"success": "#4EB233",
          
"success-content": "#020c01",
          
"warning": "#F49F1C",
          
"warning-content": "#140900",
          
"error": "#EE222B",
          
"error-content": "#140001",
          },
        },
      ],
    },
}

