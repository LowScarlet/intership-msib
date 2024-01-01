'use client'

import { Hanken_Grotesk } from 'next/font/google'
import { useEffect, useReducer, useState } from 'react'
import listClassName from '../utils/listClassName'
import NProgress from './NProgress'
import { initialSidebarState, sidebarReducer } from '../_contexts/sidebarReducers'
import SidebarContext from '../_contexts/SidebarContext'

const hanken_grotesk = Hanken_Grotesk({ subsets: ['latin'] })

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarState, sidebarAction] = useReducer(sidebarReducer, initialSidebarState)

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
        <SidebarContext.Provider value={{ sidebarState, sidebarAction }}>
          <NProgress >
            <div className={
              listClassName([
                'transition duration-300 ease-in-out',
                'dark:bg-dark-jungle-green bg-violet-50'
              ])
            }>

              {children}
            </div>
          </NProgress>
        </SidebarContext.Provider>
      </body>
    </html>
  )
}
