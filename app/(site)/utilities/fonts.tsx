import { Cormorant_Garamond, Lato, Merriweather } from 'next/font/google'

/////////////////////////////////////////
/////////// FONT DEFINITIONS ///////////
///////////////////////////////////////

export const heading = Cormorant_Garamond({
  subsets: ['latin-ext'],
  weight: ["400"],
  variable: '--font-header'
})

export const heading2 = Cormorant_Garamond({
  subsets: ['latin-ext'],
  weight: ["700"],
  variable: '--font-header2'
})

export const mainContent = Merriweather({
  subsets: ['latin'],
  weight: ["400"],
  variable: '--font-main-content'
})

export const mainContent2 = Merriweather({
  subsets: ['latin'],
  weight: ["700"],
  variable: '--font-main-content2'
})

export const subContent = Lato({
  subsets: ['latin'],
  weight: ["400"],
  variable: '--font-sub-content'
})

export const subContent2 = Lato({
  subsets: ['latin'],
  weight: ["700"],
  variable: '--font-sub-content2'
})