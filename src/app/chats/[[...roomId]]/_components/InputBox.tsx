"use client"

import { BiSend } from "react-icons/bi";
import { FaBook } from "react-icons/fa";

import { ChangeEvent, useContext, useEffect, useRef } from "react";
import listClassName from "../../../utils/listClassName";
import RoomContext from "@/app/_contexts/roomContext";
import { RoomStateInterface } from "@/app/_contexts/roomReducers";

export default function InputBox({
  room
}: {
  room?: RoomStateInterface
}) {
  const { roomState, roomAction } = useContext(RoomContext)

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const maxTextAreaHeight = 200;

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

  const sendButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  return (<>
    <div className={
      listClassName([
        'flex gap-x-4 items-center',
        'px-4 py-4',
        'text-sm sm:text-lg'
      ])
    }>
      <button
        onClick={(e) => {
          e.preventDefault()
        }}
        className={
          listClassName([
            'block rounded-full',
            'hover:bg-dark-jungle-green',
            'p-1 sm:p-4'
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
          'px-4 py-2 sm:px-8 sm:py-4'
        ])
      }>
        <textarea
          ref={textareaRef}
          onChange={handleInputChange}
          cols={30}
          rows={1}
          placeholder="Say Something! 👋"
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

        </textarea>
      </div>
      <button
        onClick={(e) => sendButton(e)}
        className={
          listClassName([
            'block rounded-full',
            'hover:bg-dark-jungle-green',
            'p-1 sm:p-4'
          ])
        }
      >
        <BiSend />
      </button>
    </div>
    <p className={
      listClassName([
        'text-center text-xs'
      ])
    }>
      Google AI may display inaccurate info, including about people, so double-check its responses.
    </p>
  </>)
}


