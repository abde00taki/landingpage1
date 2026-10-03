/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bordeaux: {
          50: '#fdf6f5',
          100: '#f9e8e6',
          200: '#f0cfc9',
          300: '#e2ab9f',
          400: '#d0806f',
          500: '#bd5a45',
          600: '#a8422f',
          700: '#8c3324',
          800: '#732a20',
          900: '#5f251d',
          950: '#3a140f',
        },
        beige: {
          50: '#fdfcf9',
          100: '#faf6ef',
          200: '#f3ebdd',
          300: '#ead9c4',
          400: '#dec1a3',
          500: '#d2a882',
          600: '#c79368',
          700: '#b67c54',
          800: '#a06a4b',
          900: '#865a44',
        },
        charcoal: {
          50: '#f6f6f5',
          100: '#e7e7e4',
          200: '#d0d0cb',
          300: '#b1b1a9',
          400: '#8e8e83',
          500: '#74746a',
          600: '#5e5e55',
          700: '#4d4d46',
          800: '#41413c',
          900: '#3a3a36',
          950: '#21211e',
        },
      },
      fontFamily: {
        sans: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2.25rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
};
