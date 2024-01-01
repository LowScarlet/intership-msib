'use client'

import { Hanken_Grotesk } from 'next/font/google'
import { useEffect, useState } from 'react'
import listClassName from '../utils/listClassName'

const hanken_grotesk = Hanken_Grotesk({ subsets: ['latin'] })

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mode, setMode] = useState<string>('dark');

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        const colorScheme = event.matches ? "dark" : "light";
        setMode(colorScheme);
      });
  }, []);
  return (
    <html
      lang="en"
      className={
        listClassName([
          mode
        ])
      }
    >
      <body className={
        hanken_grotesk.className
      }>
        <div className={
          listClassName([
            'transition duration-300 ease-in-out',
            'dark:bg-dark-jungle-green bg-violet-50'
          ])
        }>

          {children}
        </div>
      </body>
    </html>
  )
}
