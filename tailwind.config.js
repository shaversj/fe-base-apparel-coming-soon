/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*html"],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-desktop": "url('/assets/images/bg-pattern-desktop.svg')",
        "hero-mobile": "url('/assets/images/hero-mobile.jpg')",
        "hero-desktop": "url('/assets/images/hero-desktop.jpg')",
        "logo": "url('/assets/images/logo.jpg')",
      },
      screens: {
        sm: "375px",
        lg: "1440px",
      },
      colors: {
        "soft-red": "hsl(0, 93%, 68%)",
        "desaturated-red": "hsl(0, 36%, 70%)",
        "dark-grayish-red": "hsl(0, 6%, 24%)",
        "trans-1": "hsl(0, 0%, 100%)",
        "trans-2": "hsl(0, 100%, 98%)",
        "trans-3": "hsl(0, 80%, 86%)",
        "trans-4": "hsl(0, 74%, 74%)",
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}