 // @type {import('tailwindcss').Config} 
module.exports = {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
          colors: {
            'primary-color': '#00509D',
            'secondary-color': '#00296B',
            'tertiary-color': '#FFFFFF',
            'extend-primary-color': '#00296B',
            'extend-secondary-color': '#ADABBE',
            'hover-primary-color': '#00296B',
            'hover-secondary-color': '#CECDD8',
            'linear-primary-color': '#CECDD8',
            'linear-secondary-color': '#0A033C',
            'da-primary-color': '#1e2749',
            'da-secondary-color': '#273469',
            'da-tertiary-color': '#E4D9FF',
            'text-primary-color': '#00296B',
          },
        },
      },
        plugins: [],
  }

