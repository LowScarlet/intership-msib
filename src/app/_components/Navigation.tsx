import { FaLink } from "react-icons/fa";
import listClassName from "../utils/listClassName";
import Link from "next/link";
import { useContext } from "react";
import UserContext from "../_contexts/userContext";
import RoomContext from "../_contexts/roomContext";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const currentPath = usePathname();

  const { userState, userAction } = useContext(UserContext)
  const { roomState, roomAction } = useContext(RoomContext)

  return (
    <div className={
      listClassName([
        'flex flex-col justify-between h-full'
      ])
    }>
      <div>
        <h1 className={
          listClassName([
            'text-xs',
          ])
        }>
          Welcome back, {userState.username}
        </h1>
        <h2 className={
          listClassName([
            'text-base',
          ])
        }>
          {
            roomState.length ? 'Recent Chats' : 'This is your new journey'
          }
        </h2>
        <ul className={
          listClassName([
            'py-2',
            'list-disc text-sm truncate list-inside',
          ])
        }>
          {
            roomState.map((e, i) => (
              <Link
                key={i}
                href={"/chats/" + e.id}
              >
                <li
                  className={
                    listClassName([
                      currentPath.endsWith(e.id || '') ? 'bg-gradient-to-r from-violet-900 to-fuchsia-600 text-white' : '',
                      'rounded-[25px]',
                      'px-4 py-1'
                    ])
                  }
                >
                  {e.name}
                </li>
              </Link>
            ))
          }
        </ul>
      </div>
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