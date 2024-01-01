import './globals.css'
import type { Metadata } from 'next'
import { Hanken_Grotesk, Open_Sans } from 'next/font/google'
import Layout from './components/Layout'

export const metadata: Metadata = {
  title: 'Google AI',
  description: 'Discover more about Bard, a collaborative AI tool developed by Google to help bring your ideas to life.',
  metadataBase: new URL('https://googleai.lowscarlet.my.id'),
  openGraph: {
    type: "website",
    url: "https://googleai.lowscarlet.my.id",
    title: "Google AI",
    description: "Discover more about Bard, a collaborative AI tool developed by Google to help bring your ideas to life.",
    siteName: "Google AI",
    images: [
      '/banner.png'
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
    <Layout >
      {children}
    </Layout>
  )
}