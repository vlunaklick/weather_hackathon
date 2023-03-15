import Link from 'next/link'
import { TbSunLow, TbMoon } from 'react-icons/tb'

import { useThemeDisplay } from '@/hooks/useThemeDisplay'
import { useMounted } from '@/hooks/useMounted'

export default function Header() {
  const { theme } = useThemeDisplay()
  const { mounted } = useMounted()

  return (
    <header className="mx-auto w-full p-3">
      <h1 className="text-2xl font-bold dark:text-slate-50 text-slate-800 w-min">
        <Link className="hover:opacity-80 transition-opacity flex items-center" href="/">
          Tempcast
          {mounted &&
            (theme === 'dark' ? (
              <TbMoon className="ml-2 text-2xl text-slate-400 dark:text-slate-300" />
            ) : (
              <TbSunLow className="ml-2 text-2xl text-yellow-400 dark:text-yellow-300" />
            ))}
        </Link>
      </h1>
    </header>
  )
}
