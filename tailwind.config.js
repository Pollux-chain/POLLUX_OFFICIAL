/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements-react/dist/js/**/*.js"
    ],
    theme: {
      extend: {
        keyframes: {
          tada: {
            '0%': { transform: 'scale3d(1, 1, 1)' },
            '10%, 20%': { transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
            '30%, 50%, 70%, 90%': { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
            '40%, 60%, 80%': { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
            '100%': { transform: 'scale3d(1, 1, 1)' }
          },
          jiggle: {
            "0%": {
                transform: "scale3d(1, 1, 1)"
            },
            "30%": {
                transform: "scale3d(1.25, 0.75, 1)"
            },
            "40%": {
                transform: "scale3d(0.75, 1.25, 1)"
            },
            "50%": {
                transform: "scale3d(1.15, 0.85, 1)"
            },
            "65%": {
                transform: "scale3d(0.95, 1.05, 1)"
            },
            "75%": {
                transform: "scale3d(1.05, 0.95, 1)"
            },
            "100%": {
                transform: "scale3d(1, 1, 1)"
            },
        },
        shake: {
            "0%, 100%": {
                transform: "translateX(0)",
            },
            "10%, 30%, 50%, 70%, 90%": {
                transform: "translateX(-10px)",
            },
            "20%, 40%, 60%, 80%": {
                transform: "translateX(10px)",
            },
        },
        rotate: {
          '0%': {
              transform: 'rotateX(0deg) rotateZ(0deg) translateZ(0px)',
          },
          '100%': {
              transform: 'rotateX(180deg) rotateZ(-180deg) translateZ(10px)',
          },
      },
        },
        animation: {
          tada: 'tada 1s ease-in-out infinite',
          jiggle: 'jiggle 4s ease-in-out infinite',
          shake: 'shake 10s ease-in-out infinite',
          bounce: 'bounce 3s ease-in-out infinite',
          rotate: 'rotate 1s linear infinite',
        }
      }
    },
    darkMode: 'class',
    plugins: []
  }
  