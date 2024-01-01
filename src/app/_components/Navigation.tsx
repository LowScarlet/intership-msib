import { FaLink } from "react-icons/fa";
import listClassName from "../utils/listClassName";
import Link from "next/link";

const navlist = [
  {
    id: '123',
    name: 'GGWP'
  },
  {
    id: '333',
    name: 'GGWP 3'
  }
]

export default function Navigation() {
  return (
    <div className={
      listClassName([
        'flex flex-col justify-between h-full'
      ])
    }>
      <div>
        <h1 className={
          listClassName([
            'text-base',
          ])
        }>
          Recent Chats
        </h1>
        <ul className={
          listClassName([
            'py-2',
            'list-disc text-sm truncate list-inside',
          ])
        }>
          {
            navlist.map((e, i) => (
              <Link
                key={i}
                href={"/chats/" + e.id}
              >
                <li
                  className={
                    listClassName([
                      i === 0 ? 'bg-gradient-to-r from-violet-900 to-fuchsia-600 text-white' : '',
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