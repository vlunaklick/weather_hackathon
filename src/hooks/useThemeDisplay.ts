import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export function useThemeDisplay() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const date = new Date()
    const hour = date.getHours()

    if (hour >= 18 || hour <= 6) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  return { theme }
}
