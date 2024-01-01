"use client"

import { useEffect, useState } from "react";
import listClassName from "../utils/listClassName";
import React from "react";
import { IoClose } from "react-icons/io5";
import { Dialog } from "@headlessui/react";
import Navigation from "./Navigation";

export default function Sidebar({
  navSidebar,
  setNavSidebar
}: {
  navSidebar: boolean,
  setNavSidebar: React.Dispatch<React.SetStateAction<boolean>>
}) {
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
              <Navigation />
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