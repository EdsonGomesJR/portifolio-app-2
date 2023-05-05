/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  mode: 'jit',
  theme: {
    extend: {
   
      

      fontFamily: {
        mont: ["var(--font-mont)"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        onNeutralBg: 'var(--onNeutralBg)',
        neutralBg: 'var(--neutralBg)',
        onPrimaryBg: 'var(--onPrimaryBg)',
        primaryBg: 'var(--primaryBg)',
        primary2: 'var(--primary)',
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        fade: 'fadeOut 1.7s  ease-in-out ',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: theme => ( {
      
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
      },
      fadeOut: {
        '100%': { opacity: '100%'},
        '0%': { opacity: '0%'},
      },}),
    },
    backgroundImage: {
      circularLight:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)",
      circularDark:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 100px)",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
