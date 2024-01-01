"use client"

import { useContext, useEffect, useState } from "react";
import ChatBox from "./_components/ChatBox";
import Header from "./_components/Header";
import InputBox from "./_components/InputBox";
import Navigation from "../../_components/Navigation";
import Sidebar from "../../_components/Sidebar";
import listClassName from "../../utils/listClassName";
import { Transition } from "@headlessui/react";
import SidebarContext from "@/app/_contexts/SidebarContext";

const chatsRaw = [
  {
    id: 'sdjasd-sdaskd',
    question: 'GGWP',
    answer: 'Thinking...',
    userId: 'asdasd-asdasd-asdasda',
    createdAt: 'no prob',
    updatedAt: 'no prob'
  },
]

export interface ChatInterface {
  id: string,
  question: string,
  answer: string,
  userId: string,
  createdAt: string,
  updatedAt: string
}

export interface RoomInterface {
  id: string,
  name: string,
  chats: ChatInterface[],
  ownerId: string,
  createdAt: string,
  updatedAt: string
}

export default function Home({
  params
}: {
  params: {
    roomId: string
  }
}) {
  const { roomId } = params

  const { sidebarState, sidebarAction } = useContext(SidebarContext)

  const [room, setRoom] = useState<RoomInterface | null>(null)

  useEffect(() => {
    if (roomId) {
      setRoom({
        id: '123',
        name: 'GGWP',
        chats: chatsRaw,
        ownerId: '1',
        createdAt: new Date().toString(),
        updatedAt: new Date().toString()
      })
    } else {
      setRoom(null)
    }
  }, []);

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
          <InputBox />
        </div>
      </main>
    </div>
    {
      window.innerWidth < 768 ? (
        <Sidebar navSidebar={sidebarState} setNavSidebar={sidebarAction} />
      ) : null
    }
  </>)
}
