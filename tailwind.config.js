/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1A56DB',
          dark:    '#1342B0',
          light:   '#EEF3FF',
          mid:     '#C7D7FF',
        },
        green: {
          DEFAULT: '#0E9F6E',
          light:   '#ECFDF5',
        },
        orange: {
          DEFAULT: '#FF5A1F',
          light:   '#FFF7ED',
        },
        dark:   '#111928',
        mid:    '#374151',
        wgray:  '#6B7280',
        border: '#E5E7EB',
        wbg:    '#F9FAFB',
      },
      fontFamily: {
        sans:  ['Bricolage Grotesque', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      fontSize: {
        '2xs': '11px',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
    },
  },
  plugins: [],
}
