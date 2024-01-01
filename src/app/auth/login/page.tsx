/* eslint-disable react/no-unescaped-entities */
"use client"

import UserContext from "@/app/_contexts/userContext"
import listClassName from "@/app/utils/listClassName"
import { redirect } from "next/navigation"
import { useContext, useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { v4 as uuidv4 } from 'uuid';

export default function Login() {
  const { userState, userAction } = useContext(UserContext)

  if (userState.id) {
    redirect('/chats/')
  }

  const [username, setUsername] = useState('')

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const loginButton = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    userAction({
      type: 'UPDATE',
      payload: {
        id: uuidv4(),
        username: username
      },
    });
  }

  return (
    <div className={
      listClassName([
        'flex items-center justify-center',
        'h-screen',
        'text-center'
      ])
    }>
      <div className={
        listClassName([
          'space-y-2'
        ])
      }>
        <div className={
          listClassName([
            'py-2'
          ])
        }>
          <div className={
            listClassName([
              'flex items-center gap-x-2 py-1'
            ])
          }>
            <FcGoogle /><span className={
              listClassName([
                'block'
              ])
            }>AI Assistant</span>
          </div>
          <input
            value={username} onChange={handleUsernameChange}
            type="text"
            placeholder="Username"
            className={
              listClassName([
                'rounded-xl',
                'py-2 px-4',
              ])
            }
          />
        </div>
        <button
          onClick={loginButton}
          className={
            listClassName([
              'border rounded-xl',
              'w-full',
              'py-2 px-4'
            ])
          }
        >
          Login
        </button>
      </div>
    </div>
  )
}
