import React, { FC } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import useDarkMode from '../lib/useDarkMode'

interface Props {}

const ToggleDark: FC<Props> = () => {
  const [colorTheme, setTheme] = useDarkMode()

  return (
    <div className="absolute top-5 right-5 transition duration-1000">
      <button onClick={() => setTheme(colorTheme)}>
        {colorTheme === 'light' ? (
          <SunIcon className="h-7 w-7 text-yellow-500" />
        ) : (
          <MoonIcon className="h-7 w-7 text-blue-600" />
        )}
      </button>
    </div>
  )
}

export default ToggleDark
