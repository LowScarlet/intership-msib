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
import { FaGear } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";

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

  const containerRef = useRef<HTMLDivElement>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxTextAreaHeight)}px`;
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

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
        'h-screen'
      ])
    }>
      <main className={
        listClassName([
          'w-full h-full',
          'p-4'
        ])
      }>
        <div className={
          listClassName([
            'h-full flex flex-col bg-chinese-black',
            'rounded-[25px]',
            'p-4'
          ])
        }>
          <header className={
            listClassName([
              'flex gap-x-2 items-center',
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
            <div className={
              listClassName([
                'grow',
                'dark:text-gray-300 text-gray-500'
              ])
            }>
              / Test Session 1
            </div>
            <button className={
              listClassName([
                'block rounded-full',
                'hover:bg-dark-jungle-green',
                'p-2'
              ])
            }>
              <FaPlus />
            </button>
            <button className={
              listClassName([
                'block rounded-full',
                'hover:bg-dark-jungle-green',
                'p-2'
              ])
            }>
              <FaGear />
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
          <div
            ref={containerRef}
            className={
              listClassName([
                'grow overflow-y-scroll',
                'rounded-[25px]',
                'px-4',
              ])
            }
          >
            <div className="flex flex-col-reverse">
              {
                chats.map((item, index) => (
                  <div key={item.id} className={chats[(index + 1)]?.username === item.username ? 'mt-1' : 'mt-4'}>
                    <div className="flex gap-2">
                      {
                        chats[(index + 1)]?.username === item.username ? (
                          <div className="w-10"></div>
                        ) : (
                          <div className="h-10 w-10 rounded-full overflow-hidden bg-dark-jungle-green">
                          </div>
                        )
                      }
                      <div className="grow dark:text-gray-200 text-gray-700">
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
                  'p-4'
                ])
              }
            >
              <FaBook />
            </button>
            <div className={
              listClassName([
                'grow flex items-center overflow-hidden',
                'rounded-[25px]',
                'ring-1 ring-white',
                'px-8 py-4'
              ])
            }>
              <textarea
                ref={textareaRef}
                onChange={handleInputChange}
                cols={30}
                rows={1}
                className={
                  listClassName([
                    'w-full',
                    'resize-none',
                    'focus:outline-none focus:ring-0',
                    'bg-transparent',
                    'text-base dark:text-gray-300 text-gray-500'
                  ])
                }
              >
                Say Something! 👋
              </textarea>
            </div>
            <button className={
              listClassName([
                'block rounded-full',
                'hover:bg-dark-jungle-green',
                'p-4'
              ])
            }>
              <BiSend />
            </button>
          </header>
        </div>
      </main>
    </div>
  </>)
}
