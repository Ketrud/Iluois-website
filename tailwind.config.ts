import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        roseGold: '#c4877b',
        roseGoldDeep: '#8f6158',
        roseGoldSoft: '#e2b7ae',
        ink: '#1f1f1f',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(196, 135, 123, 0.16)',
      },
      borderRadius: {
        organic: '2.25rem',
      },
    },
  },
  plugins: [],
}
export default config
