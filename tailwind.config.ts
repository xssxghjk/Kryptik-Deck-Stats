import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      dropShadow: {
        border: ['1px 1px 0px rgba(0, 0, 0, 1)'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      slate: colors.slate,
      fuchsia: colors.fuchsia,
      teal: colors.teal,
    },
    keyframes: {
      shake: {
        '0%, 100%': { transform: 'translateX(0)' },
        '10%, 30%, 50%, 70%': {
          transform: 'translateX(-5px)',
        },
        '20%, 40%, 60% ': {
          transform: 'translateX(5px)',
        },
        '80%': {
          transform: 'translateX(4px)',
        },
        '90%': {
          transform: 'translateX(-4px)',
        },
      },
    },
    animation: {
      shake: 'shake .7s ease 0s 1 normal forwards',
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    }),
  ],
}
