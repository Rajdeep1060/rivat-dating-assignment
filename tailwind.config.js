/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rivet: {
          pink: '#FF2E93',
          darkpink: '#D6006B',
          softpink: '#FFEBF4',
          accent: '#FF1BB8',
          magenta: '#F500A7',
          dark: '#0A0E12',
          floor: '#1F0012',
          card: '#160111',
          peach: '#FACFA9',
          surface: '#FAF9F7',
        },
        'rv-magenta': {
          100: '#FFE5F6',
          200: '#FCBFE9',
          400: '#F960C8',
          500: '#FF2E93',
          600: '#FF1BB8',
          700: '#F500A7',
          800: '#C20084',
          1000: '#1F0012',
        },
        'rv-ui': {
          black: '#0A0E12',
          dark: '#160111',
          white: '#F5F6F7',
          pureWhite: '#FFFFFF',
        }
      },
      fontFamily: {
        'rv-display': ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        'rv-body': ['"Inter Tight"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Inter Tight"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        cursive: ['Caveat', 'cursive']
      },
      animation: {
        'float-slow': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      }
    },
  },
  plugins: [],
}
