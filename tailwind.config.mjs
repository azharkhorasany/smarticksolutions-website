import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B1F8A',
          dark:    '#0D0F4F',   // kept for backward compat
          mid:     '#161a75',   // kept for backward compat
          light:   '#2B30C4',   // kept for backward compat
          50:  '#eef0fc',
          100: '#d8dcf8',
          200: '#b5baf2',
          300: '#8891ea',
          400: '#5e67e1',
          500: '#3c45d4',
          600: '#2630b8',
          700: '#1B1F8A',  // same as DEFAULT
          800: '#131663',
          900: '#0D0F4F',  // same as dark
          950: '#070838',
        },
        scarlet: {
          DEFAULT: '#E8001D',
          dark:    '#B5001A',   // kept for backward compat
          light:   '#ff3347',   // kept for backward compat
          50:  '#fff0f2',
          100: '#ffdde1',
          200: '#ffb3bb',
          300: '#ff7888',
          400: '#ff3347',  // same as light
          500: '#f5152e',
          600: '#E8001D',  // same as DEFAULT
          700: '#c90019',
          800: '#A80016',  // same as dark
          900: '#7a0010',
          950: '#450009',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'navy-sm': '0 1px 3px 0 rgba(27,31,138,0.08), 0 1px 2px -1px rgba(27,31,138,0.08)',
        'navy':    '0 4px 6px -1px rgba(27,31,138,0.10), 0 2px 4px -2px rgba(27,31,138,0.10)',
        'navy-md': '0 10px 15px -3px rgba(27,31,138,0.12), 0 4px 6px -4px rgba(27,31,138,0.12)',
        'navy-lg': '0 20px 25px -5px rgba(27,31,138,0.14), 0 8px 10px -6px rgba(27,31,138,0.14)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body':          theme('colors.gray[600]'),
            '--tw-prose-headings':      theme('colors.navy[950]'),
            '--tw-prose-lead':          theme('colors.gray[500]'),
            '--tw-prose-links':         theme('colors.scarlet[DEFAULT]'),
            '--tw-prose-bold':          theme('colors.navy[900]'),
            '--tw-prose-counters':      theme('colors.navy[400]'),
            '--tw-prose-bullets':       theme('colors.scarlet[DEFAULT]'),
            '--tw-prose-hr':            theme('colors.gray[200]'),
            '--tw-prose-quotes':        theme('colors.gray[600]'),
            '--tw-prose-quote-borders': theme('colors.scarlet[DEFAULT]'),
            '--tw-prose-code':          theme('colors.navy[800]'),
            '--tw-prose-pre-code':      theme('colors.gray[200]'),
            '--tw-prose-pre-bg':        theme('colors.navy[950]'),
            'h2': {
              fontWeight: '800',
              letterSpacing: '-0.025em',
              marginTop:    '2.5rem',
              marginBottom: '1rem',
              paddingBottom: '0.625rem',
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.gray[100]'),
            },
            'h3': {
              fontWeight: '700',
              letterSpacing: '-0.02em',
              marginTop:    '2rem',
              marginBottom: '0.5rem',
            },
            'a': {
              color:          theme('colors.scarlet[DEFAULT]'),
              textDecoration: 'none',
              fontWeight:     '500',
              '&:hover': { textDecoration: 'underline' },
            },
            'strong': {
              color:      theme('colors.navy[900]'),
              fontWeight: '700',
            },
            'blockquote': {
              backgroundColor: theme('colors.navy[50]'),
              borderLeftColor: theme('colors.scarlet[DEFAULT]'),
              borderLeftWidth: '4px',
              borderRadius:    '0 0.5rem 0.5rem 0',
              padding:         '0.75rem 1.5rem',
              fontStyle:       'normal',
              color:           theme('colors.gray[600]'),
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after':   { content: 'none' },
            'code': {
              backgroundColor: theme('colors.navy[50]'),
              color:           theme('colors.navy[800]'),
              fontWeight:      '500',
              borderRadius:    '0.25rem',
              padding:         '0.125rem 0.375rem',
            },
            'code::before': { content: 'none' },
            'code::after':  { content: 'none' },
            'pre': {
              backgroundColor: theme('colors.navy[950]'),
              borderRadius:    '0.75rem',
            },
            'ul > li::marker': { color: theme('colors.scarlet[DEFAULT]') },
            'ol > li::marker': { color: theme('colors.navy[400]') },
            'hr': { borderColor: theme('colors.gray[200]') },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
