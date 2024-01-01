'use client'

import { Hanken_Grotesk } from 'next/font/google'
import { useEffect, useReducer, useState } from 'react'
import SidebarContext from '../_contexts/sidebarContext'
import { initialSidebarState, sidebarReducer } from '../_contexts/sidebarReducers'
import UserContext from '../_contexts/userContext'
import { initialUserState, userReducer } from '../_contexts/userReducers'
import listClassName from '../utils/listClassName'
import NProgress from './NProgress'
import { initialRoomState, roomReducer } from '../_contexts/roomReducers'
import RoomContext from '../_contexts/roomContext'

const hanken_grotesk = Hanken_Grotesk({ subsets: ['latin'] })

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const [userState, userAction] = useReducer(userReducer, initialUserState)

  const [roomState, roomAction] = useReducer(roomReducer, initialRoomState)

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
        <RoomContext.Provider value={{ roomState, roomAction }}>
          <UserContext.Provider value={{ userState, userAction }}>
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
          </UserContext.Provider>
        </RoomContext.Provider>
      </body>
    </html>
  )
}
