import { FaLink } from "react-icons/fa";
import listClassName from "../utils/listClassName";

const navlist = [
  'asdasdasd',
  '123 asdasd asdasdasdasda sdasd asdasd asdasd',
  'dasd sad as sdad'
]

export default function Navigation() {
  return (
    <div className={
      listClassName([
        'flex flex-col justify-between h-full'
      ])
    }>
      <ul className={
        listClassName([
          'py-2',
          'space-y-2',
          'list-disc text-sm truncate list-inside',
        ])
      }>
        <h1 className={
          listClassName([
            'text-base',
          ])
        }>Recent Chats</h1>
        {
          navlist.map((e, i) => (
            <li
              key={i}
              className={
                listClassName([
                  i === 0 ? 'bg-gradient-to-r from-violet-900 to-fuchsia-600 text-white' : '',
                  'rounded-[25px]',
                  'px-4 py-1'
                ])
              }
            >{e}</li>
          ))
        }
      </ul>
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