/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*"],
  theme: {
    extend: {
      animation: {
        spinCustom: 'spinCustom 5s linear infinite',
        bounceCustom: 'bounceCustom 1s linear infinite',
        heartBeat: 'heartBeat 1s linear infinite',
      },

    },
    keyframes: {
      spinCustom: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      bounceCustom: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
        },
        '50%': {
          transform: 'translateY(0)',
        }
      },
      heartBeat: {
        '0%, 100%': { transform: 'scale(1)' },
        '25%': { transform: 'scale(1.2)' },
        '75': { transform: 'scale(1.2)' },
      }
    },

    container: {
      center: true,
      padding: {
        default: "20px",
        md: "32px"
      }
    },

    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      Lobster: ["Lobster", "sans-serif"]
    },
  },
  plugins: [require("tailwindcss-animate"),
  require('tailwindcss-intersect')
  ]
}

