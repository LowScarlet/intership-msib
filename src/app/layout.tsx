import './globals.css'
import type { Metadata } from 'next'
import { Hanken_Grotesk, Open_Sans } from 'next/font/google'
import listClassName from './utils/listClassName'

const hanken_grotesk = Hanken_Grotesk({ subsets: ['latin'] })
const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LowScarlet - Personal Website',
  description: 'Hi 👋, I am Tegar Maulana Fahreza, a web developer from Indonesia.',
  metadataBase: new URL('https://lowscarlet.my.id'),
  openGraph: {
    type: "website",
    url: "https://lowscarlet.my.id",
    title: "LowScarlet - Personal Website",
    description: "Hi 👋, I am Tegar Maulana Fahreza, a web developer from Indonesia.",
    siteName: "LowScarlet",
    images: [
      '/pp.png'
    ]
  },
  twitter: {
    card: 'summary',
  },
  colorScheme: "dark",
  creator: "Tegar Maulana Fahreza",
  publisher: "Vercel"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={
        listClassName([
          'transition duration-300 ease-in-out',
          'dark:bg-dark-jungle-green bg-white'
        ])
      }
    >
      <body className={
        hanken_grotesk.className
      }>
        {children}
      </body>
    </html>
  )
}
