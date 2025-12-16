import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          500: '#22c55e', // Emerald green
          600: '#16a34a',
          700: '#15803d',
          900: '#14532d',
        },
        accent: '#eab308', // Golden yellow for harvests
        earth: '#84cc16', // Lime for secondary accents
      },
      backgroundImage: {
        'hero-farm': "url('https://images.unsplash.com/photo-1617181186135-14801a60151a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
      },
    },
  },
  plugins: [],
};

export default config;
