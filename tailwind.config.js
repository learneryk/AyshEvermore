/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          cream: '#FDFBF7',       // main bg
          warm: '#F5EFEB',        // secondary bg
          accent: '#EFE6DD',      // borders, light accents
          gold: '#C5A880',        // primary gold
          goldLight: '#D4AF37',   // hover gold
          goldDark: '#A3845B',    // deep gold
          charcoal: '#111111',    // text color
          dark: '#1A1A1A',        // dark sections (footer)
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        script: ['Pinyon Script', 'Alex Brush', 'cursive'],
        sans: ['Montserrat', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        extraWide: '0.3em',
      },
      boxShadow: {
        luxury: '0 10px 35px -10px rgba(197, 168, 128, 0.15)',
        glass: '0 8px 32px 0 rgba(197, 168, 128, 0.08)',
      }
    },
  },
  plugins: [],
}
