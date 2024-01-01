"use client"

import { ReactNode, useEffect, useState } from "react";
import ChatBox from "./_components/ChatBox";
import Header from "./_components/Header";
import InputBox from "./_components/InputBox";
import listClassName from "./utils/listClassName";
import React from "react";
import { BsChatSquare } from "react-icons/bs";
import { Ultra } from "next/font/google";
import { FaLink } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Disclosure, Transition, Menu, Dialog } from "@headlessui/react";

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

const navlist = [
  'asdasdasd',
  '123 asdasd asdasdasdasda sdasd asdasd asdasd',
  'dasd sad as sdad'
]

const Nav = () => {
  return (
    <div className={
      listClassName([
        'flex flex-col justify-between h-full'
      ])
    }>
      <ul className={
        listClassName([
          'py-2',
          'space-y-2',
          'list-disc text-sm truncate list-disc list-inside',
        ])
      }>
        <h1 className={
          listClassName([
            'text-base',
          ])
        }>Recent Chats</h1>
        {
          navlist.map((e, i) => (
            <li
              key={i}
              className={
                listClassName([
                  i === 0 ? 'bg-gradient-to-r from-violet-900 to-fuchsia-600 text-white' : '',
                  'rounded-[25px]',
                  'px-4 py-1'
                ])
              }
            >{e}</li>
          ))
        }
      </ul>
      <div>
        <h1 className={
          listClassName([
            'text-sm'
          ])
        }>
          Made for MSIB Project Task <a className="flex items-center gap-x-2 underline decoration-fuchsia-600" href="https://lowscarlet.my.id/" target="_blank"><FaLink className="text-fuchsia-600" />lowscarlet.my.id</a>
        </h1>
      </div>
    </div>
  )
}

const Sidebar = ({
  navSidebar,
  setNavSidebar
}: {
  navSidebar: boolean,
  setNavSidebar: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [show, setShow] = useState(false)
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  return (<>
    {
      show ? (
        <Dialog
          open={navSidebar}
          onClose={() => setNavSidebar(false)}
          className="relative z-50"
        >
          <div
            className={
              listClassName([
                'fixed inset-0 bg-white/50 dark:bg-black/50',
                'md:hidden'
              ])
            }
            aria-hidden="true"
          />
          <div
            className={
              listClassName([
                'fixed inset-0 flex',
                'md:hidden',
                'dark:text-gray-200 text-gray-700'
              ])
            }
          >
            <Dialog.Panel className="grow max-w-[300px] rounded-r-sm dark:bg-dark-jungle-green bg-violet-50 p-8">
              <Nav />
            </Dialog.Panel>
            <div className={
              listClassName([
                'p-4',
                'text-4xl'
              ])
            }>
              <IoClose />
            </div>
          </div>
        </Dialog>
      ) : (
        null
      )
    }
  </>);
};

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

export default function Home() {
  const [navSidebar, setNavSidebar] = useState<boolean>(false)

  const [room, setRoom] = useState<RoomInterface | null>({
    id: '123',
    name: 'GGWP',
    chats: chatsRaw,
    ownerId: '1',
    createdAt: new Date().toString(),
    updatedAt: new Date().toString()
  })

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
        {
          navSidebar ? (
            <div className={
              listClassName([
                'hidden md:block',
                'max-w-[300px]',
                'px-4 py-4',
                'text-lg'
              ])
            }>
              <Nav />
            </div>
          ) : null
        }
        <div className={
          listClassName([
            'transition duration-300 ease-in-out',
            'grow flex flex-col bg-white dark:bg-chinese-black',
            'md:rounded-[25px]',
            'p-4'
          ])
        }>
          <Header room={room} navSidebar={navSidebar} setNavSidebar={setNavSidebar} />
          <ChatBox room={room} />
          <InputBox />
        </div>
      </main>
    </div>
    <Sidebar navSidebar={navSidebar} setNavSidebar={setNavSidebar} />
  </>)
}
