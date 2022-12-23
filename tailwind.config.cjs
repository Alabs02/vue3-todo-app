/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,scss,html}'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
    fontSize: {
      base: '1.1875rem',
    },
    screens: {
      mobile: '375px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1440px',
    },
    extend: {
      backgroundImage: {
        'hero-bg-desktop-dark': "url('/static/images/BG-DESKTOP-DARK.svg')",
        'hero-bg-desktop-light': "url('/static/images/BG-DESKTOP-LIGHT.svg')",
        'hero-bg-mobile-dark': "url('/static/images/BG-MOBILE-DARK.svg')",
        'hero-bg-mobile-light': "url('/static/images/BG-MOBILE-LIGHT.svg')",
      },
      colors: {
        white: '#ffffff',
        primary: 'hsl(220, 98%, 61%)',
        light: {
          gray: 'hsl(0, 0%, 98%)',
          'blue-gray': {
            50: 'hsl(236, 33%, 92%)',
            100: 'hsl(233, 11%, 84%)',
            200: 'hsl(236, 9%, 61%)',
            300: 'hsl(235, 19%, 35%)',
          },
        },
        dark: {
          bg: 'hsl(240, 33%, 14%)',
          blue: 'hsl(235, 21%, 11%)',
          'desaturated-blue': 'hsl(235, 24%, 19%)',
          'blue-gray': {
            50: 'hsl(234, 39%, 85%)',
            100: 'hsl(234, 11%, 52%)',
            200: 'hsl(233, 14%, 35%)',
            300: 'hsl(237, 14%, 26%)',
            hover: 'hsl(236, 33%, 92%)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
