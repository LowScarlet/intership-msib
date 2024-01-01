"use client"

import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import listClassName from "../utils/listClassName";
import Navigation from "./Navigation";
import { SidebarActionType } from "../_contexts/sidebarReducers";

export default function Sidebar({
  navSidebar,
  setNavSidebar
}: {
  navSidebar: boolean,
  setNavSidebar: React.Dispatch<SidebarActionType>
}) {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setNavSidebar({
        type: 'CLOSE'
      })
    } else {
      setNavSidebar({
        type: 'CLOSE'
      })
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  return (<>
    <Transition show={navSidebar} as={Fragment}>
      <Dialog
        onClose={() => setNavSidebar({
          type: 'CLOSE'
        })}
        className="relative z-50"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
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
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition-all duration-75"
          enterFrom="opacity-0 -translate-x-6"
          enterTo="opacity-100 translate-x-0"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-6"
        >
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
        </Transition.Child>
      </Dialog>
    </Transition>
  </>);
};