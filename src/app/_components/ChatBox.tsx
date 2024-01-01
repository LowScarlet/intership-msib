"use client"

import { useEffect, useRef } from "react";
import listClassName from "../utils/listClassName";
import Image from "next/image";
import { RoomInterface } from "../page";

export default function ChatBox({
  room
}: {
  room: RoomInterface | null
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  return (
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
      {
        room && room.chats.length ? (
          <div className={
            listClassName([
              'flex flex-col-reverse gap-y-2 sm:gap-y-4',
              'text-sm sm:text-base'
            ])
          }>
            {
              room.chats.map((item, index) => (
                <div key={item.id} className={
                  listClassName([
                    'flex flex-col gap-y-4'
                  ])
                }>
                  <div className="flex gap-2">
                    <div className="h-5 w-5 sm:h-10 sm:w-10 rounded-full overflow-hidden bg-dark-jungle-green">
                      <Image src={"/no-profile-picture.jpg"} alt={""} width={100} height={100} quality={50} />
                    </div>
                    <div className="grow dark:text-gray-200 text-gray-700">
                      <h1 className="font-bold">Me</h1>
                      <p className="dark:text-gray-300 text-gray-500">{item.question}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="h-5 w-5 sm:h-10 sm:w-10">
                      <Image src={"/bard-logo.png"} alt={""} width={100} height={100} quality={50} />
                    </div>
                    <div className="grow dark:text-gray-200 text-gray-700">
                      <h1 className="font-bold">Google AI Assistant</h1>
                      <p className="dark:text-gray-300 text-gray-500">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          <div className={
            listClassName([
              'py-8',
              'space-y-4'
            ])
          }>
            <h1 className={
              listClassName([
                'text-4xl font-bold'
              ])
            }>
              Hello World
            </h1>
            <h2 className={
              listClassName([
                'text-2xl'
              ])
            }>
              Tell me what’s on your mind, or pick a suggestion.
            </h2>
          </div>
        )
      }
    </div>
  )
}
