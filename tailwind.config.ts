import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'massimowomen1': "url('../../public/img/massimokids.jpeg')",
        'massimowomen': "url('../app/img/massimocover/women.jpeg')",
        'massimomen': "url('../app/img/massimocover/massimomen.webp')",
        'massimokids': "url('../app/img/massimocover/massimokids.jpeg')",
        'masimmoaccesories': "url('../app/img/massimocover/massimoaccesories.jpeg')",
        'masimmnewcover': "url('../app/img/massimocover/womenmass1.jpeg')"
        
      },
    },
  },
  plugins: [],
}
export default config
