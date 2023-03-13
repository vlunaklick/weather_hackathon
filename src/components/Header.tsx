import Link from 'next/link'
import { TbSunLow, TbMoon } from 'react-icons/tb'

import { useThemeDisplay } from '@/hooks/useThemeDisplay'

export default function Header() {
  const { theme } = useThemeDisplay()

  return (
    <header className="mx-auto w-full p-3">
      <h1 className="text-2xl font-bold dark:text-slate-50 text-slate-800 w-min">
        <Link className="hover:opacity-80 transition-opacity flex items-center" href="/">
          Tempcast
          {theme === 'light' ? (
            <TbSunLow className="text-2xl ml-2 text-yellow-400 dark:text-yellow-300" />
          ) : (
            <TbMoon className="text-2xl ml-2 text-slate-800 dark:text-slate-50" />
          )}
        </Link>
      </h1>
    </header>
  )
}
