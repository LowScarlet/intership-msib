/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"
import { FaBars } from "react-icons/fa6";
import { MdDiversity1, MdWbSunny } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { PiSmileySticker } from "react-icons/pi";
import { BiSend } from "react-icons/bi";
import { FaBookBookmark } from "react-icons/fa6";
import { RiStarSLine } from "react-icons/ri";
import { LuDot } from "react-icons/lu";

import listClassName from "./utils/listClassName";
import { CSSProperties, ChangeEvent, useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";

const nav = [
  'rogram ini adalah sama dengan output',
  'rogram ini adalah',
  'rogram ini adalah sama output',
  'rogram ini adalah sama',
]

const chats = [
  {
    id: 5,
    avatar: null,
    username: 'Yuuka Hayase',
    type: 'text',
    content: 'no prob'
  },
  {
    id: 4,
    avatar: null,
    username: 'LowScarlet',
    type: 'text',
    content: 'thanku'
  },
  {
    id: 1,
    avatar: null,
    username: 'LowScarlet',
    type: 'text',
    content: 'Good Game!!'
  },
]

export default function Home() {
  const [showNav, setShowNav] = useState(true)

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxTextAreaHeight)}px`;
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxTextAreaHeight)}px`;
    }
  }, []);

  const maxTextAreaHeight = 200;

  return (<>
    <div className={
      listClassName([
        'h-screen',
        'flex flex-col',
      ])
    }>
      <div className={
        listClassName([
          'flex h-full'
        ])
      }>

        <Transition
          show={showNav}
          enter="transition-all duration-500"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition-all duration-250"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-full"
        >
          <nav className={
            listClassName([
              'flex flex-col gap-y-4',
              'px-4 py-8',
              'text-xs'
            ])
          }>
            <ul className={
              listClassName([
                'space-y-1'
              ])
            }>
              <h1 className={
                listClassName([
                  'flex gap-x-2 items-center'
                ])
              }>
                <FaClockRotateLeft />Recent
              </h1>
              {
                nav.map((x, i) => (
                  <li key={i} className={
                    listClassName([
                      'flex items-center gap-x-4',
                      (i === 0 ? 'bg-blue-900' : '') + ' rounded-full',
                      'px-4 py-2'
                    ])
                  }>
                    <a
                      href="/"
                      className={
                        listClassName([
                          'flex gap-x-2 items-center'
                        ])
                      }
                    >
                      <IoChatbubbleOutline /> {x}
                    </a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </Transition>
        <main className={
          listClassName([
            'grow',
            'p-4'
          ])
        }>
          <div className={
            listClassName([
              'flex flex-col h-full bg-chinese-black',
              'rounded-[25px]',
              'p-4'
            ])
          }>

            <header className={
              listClassName([
                'flex gap-x-4 items-center',
                'px-4 py-4',
                'text-lg'
              ])
            }>
              <button
                onClick={(e) => {
                  setShowNav(!showNav)
                }}
                className={
                  listClassName([
                    'block rounded-full',
                    'hover:bg-dark-jungle-green',
                    'p-2'
                  ])
                }
              >
                <FaBars />
              </button>
              <div>
                AI Assistant
              </div>
              <div>
                <LuDot />
              </div>
              <div className={
                listClassName([
                  'grow'
                ])
              }>
                Test Session 1
              </div>
              <button className={
                listClassName([
                  'block rounded-full',
                  'hover:bg-dark-jungle-green',
                  'p-2'
                ])
              }>
                <FaRegCircleQuestion />
              </button>
              <button className={
                listClassName([
                  'block rounded-full',
                  'hover:bg-dark-jungle-green',
                  'p-2'
                ])
              }>
                <FaPlus />
              </button>
              <div>
                <div className={
                  listClassName([
                    'bg-white rounded-full',
                    'h-8 w-8'
                  ])
                } />
              </div>
            </header>
            <div className={
              listClassName([
                'grow overflow-y-scroll'
              ])
            }>
              <div className="flex flex-col-reverse">
                {
                  chats.map((item, index) => (
                    <div key={item.id} className={chats[(index + 1)]?.username === item.username ? 'mt-1' : 'mt-4'}>
                      <div className="flex gap-2">
                        {
                          chats[(index + 1)]?.username === item.username ? (
                            <div className="w-12"></div>
                          ) : (
                            <div className="h-12 w-12 rounded-full overflow-hidden bg-dark-jungle-green">
                            </div>
                          )
                        }
                        <div className="grow text-base dark:text-gray-200 text-gray-700">
                          {
                            chats[(index + 1)]?.username === item.username ? (
                              null
                            ) : (
                              <h1 className="font-bold">{item.username}</h1>
                            )
                          }
                          {
                            item.type === 'text' ? (
                              <p className="dark:text-gray-300 text-gray-500">{item.content}</p>
                            ) : (<>
                              <img className="rounded-xl" src="/images/stickers/dance-blob.png" alt="" width={100} height={100} />
                            </>)
                          }
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className={
              listClassName([
                'flex gap-x-2 items-end',
                'px-8 py-4',
                'text-2xl'
              ])
            }>
              <button className={
                listClassName([
                  'block rounded-full',
                  'hover:bg-dark-jungle-green',
                  'p-4'
                ])
              }>
                <RiStarSLine />
              </button>
              <textarea
                ref={textareaRef}
                rows={1}
                onChange={handleInputChange}
                className={
                  listClassName([
                    'border',
                    'overflow-y-hidden resize-none bg-transparent grow rounded-[50px]',
                    'py-4 px-8',
                    'text-base'
                  ])
                }
              />
              <button className={
                listClassName([
                  'block rounded-full',
                  'hover:bg-dark-jungle-green',
                  'p-4'
                ])
              }>
                <BiSend />
              </button>
            </div>
            <div className={
              listClassName([
                'text-center text-sm'
              ])
            }>
              This project uses Google AI (Gemini Pro) - By <a href="http://lowscarlet.my.id/" target="_blank" rel="noopener noreferrer">LowScarlet</a>
            </div>
          </div>
        </main>
      </div>
    </div>
  </>)
}
