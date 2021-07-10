import { useState, useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useDarkMode() {
  const [theme, setTheme] = useState(null)

  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    document.documentElement.classList.remove(colorTheme)
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])

  return [colorTheme, setTheme] as const
}
