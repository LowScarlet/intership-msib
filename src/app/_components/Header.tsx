"use client"

import { FaPlus } from "react-icons/fa";
import { FaBars, FaBarsStaggered, FaGear } from "react-icons/fa6";

import { FcGoogle } from "react-icons/fc";

import Image from "next/image";

import listClassName from "../utils/listClassName";
import Link from "next/link";
import { RoomInterface } from "../page";

export default function Header({
  room,
  navSidebar,
  setNavSidebar,
}: {
  room: RoomInterface | null,
  navSidebar: boolean,
  setNavSidebar: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <header className={
      listClassName([
        'flex gap-x-2 items-center',
        'px-4 py-4',
        'text-lg'
      ])
    }>
      <button
        onClick={(e) => {
          e.preventDefault()
          setNavSidebar(!navSidebar)
        }}
        className={
          listClassName([
            'block rounded-full',
            'hover:bg-dark-jungle-green',
            'p-2'
          ])
        }
      >
        {
          navSidebar ? (
            <FaBarsStaggered />
          ) : (
            <FaBars />
          )
        }
      </button>
      <div className={
        listClassName([
          'flex gap-x-2 items-center'
        ])
      }>
        <FcGoogle /><span className={
          listClassName([
            'hidden sm:block'
          ])
        }>AI Assistant</span>
      </div>
      <div className={
        listClassName([
          'grow',
          'dark:text-gray-300 text-gray-500'
        ])
      }>
        / {room && room.name ? room.name : "New Chat.."}
      </div>
      <Link
        className={listClassName([
          `${room ? 'block' : 'hidden'} rounded-full`,
          'hover:bg-dark-jungle-green',
          'p-2'
        ])}
        href={"/"}
      >
        <FaPlus />
      </Link>
      <button
        className={
          listClassName([
            'hidden sm:inline',
            'block rounded-full',
            'hover:bg-dark-jungle-green',
            'p-2'
          ])
        }
      >
        <FaGear />
      </button>
      <button>
        <div
          className={
            listClassName([
              'rounded-full overflow-hidden bg-dark-jungle-green',
              'h-8 w-8'
            ])
          }>
          <Image src={"/no-profile-picture.jpg"} alt={""} width={100} height={100} quality={50} />
        </div>
      </button>
    </header>
  )
}
