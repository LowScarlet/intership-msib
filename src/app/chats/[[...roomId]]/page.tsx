"use client"

import { useContext, useEffect, useState } from "react";
import ChatBox from "./_components/ChatBox";
import Header from "./_components/Header";
import InputBox from "./_components/InputBox";
import Navigation from "../../_components/Navigation";
import Sidebar from "../../_components/Sidebar";
import listClassName from "../../utils/listClassName";
import { Transition } from "@headlessui/react";
import SidebarContext from "../../_contexts/sidebarContext";
import UserContext from "@/app/_contexts/userContext";
import { redirect } from "next/navigation";
import RoomContext from "@/app/_contexts/roomContext";
import { RoomStateInterface } from "@/app/_contexts/roomReducers";

export default function Home({
  params
}: {
  params: {
    roomId: string
  }
}) {
  const { roomId } = params

  const { userState, userAction } = useContext(UserContext)
  const { roomState, roomAction } = useContext(RoomContext)
  const { sidebarState, sidebarAction } = useContext(SidebarContext)

  if (!userState.id) redirect('/auth/login')
  if (roomState.some(item => item.id === roomId)) redirect('/chats/')

  const [room, setRoom] = useState<RoomStateInterface | undefined>(roomId ? roomState.find(item => item.id === roomId[0]) : undefined)

  return (<>
    <div className={
      listClassName([
        'h-screen'
      ])
    }>
      <main className={
        listClassName([
          'flex w-full h-full',
          'p-0 md:p-4',
          'dark:text-gray-200 text-gray-700'
        ])
      }>
        <Transition
          show={sidebarState}
          enter="transition-all duration-75"
          enterFrom="opacity-0 -translate-x-6"
          enterTo="opacity-100 translate-x-0"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-6"
        >
          <div className={
            listClassName([
              'hidden md:block',
              'w-[300px] h-full',
              'px-4 py-4',
              'text-lg'
            ])
          }>
            <Navigation />
          </div>
        </Transition>
        <div className={
          listClassName([
            'transition duration-300 ease-in-out',
            'grow flex flex-col bg-white dark:bg-chinese-black',
            'md:rounded-[25px]',
            'p-4'
          ])
        }>
          <Header room={room} navSidebar={sidebarState} setNavSidebar={sidebarAction} />
          <ChatBox room={room} />
          <InputBox room={room} />
        </div>
      </main>
    </div>
    {typeof window !== 'undefined' && window.innerWidth < 768 ? (
      <Sidebar navSidebar={sidebarState} setNavSidebar={sidebarAction} />
    ) : null}
  </>)
}
