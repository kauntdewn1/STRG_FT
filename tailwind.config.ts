import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      colors: {
        'stronger-red': '#FF0000',
        'stronger-red-dark': '#CC0000',
        'stronger-black': '#1A1A1A',
      },
      fontFamily: {
        sans: ['var(--font-gotham)'],
        heading: ['var(--font-gotham)'],
=======
      fontFamily: {
        sans: ['var(--font-gotham)', 'sans-serif'],
      },
      colors: {
        'stronger-red': '#E30613',
        'stronger-red-dark': '#B2050F',
        'stronger-black': '#1A1A1A',
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
<<<<<<< HEAD
  plugins: [],
}

=======
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
export default config 