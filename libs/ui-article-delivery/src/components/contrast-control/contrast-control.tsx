import { contrastClass, storageName } from './constants'
import { useEffect, useState } from 'react'
import { variants } from './contrast-control.variants'
import { SvgIcon } from '@r7/ui-base-components'

export function ContrastControl() {
  const [contrast, saveContrast] = useState<boolean>(
    JSON.parse(window?.localStorage?.getItem(storageName) || 'false'),
  )

  useEffect(() => {
    contrast ? addContrast() : removeContrast()

    window?.localStorage.setItem(storageName, String(contrast))
  }, [contrast])

  function handleToggleContrast() {
    toggleContrast()
  }

  function removeContrast() {
    document?.documentElement.classList.remove(contrastClass)
  }

  function toggleContrast() {
    saveContrast(prev => !prev)
    document?.documentElement.classList.toggle(contrastClass)
  }

  function addContrast() {
    document?.documentElement.classList.add(contrastClass)
  }

  return (
    <button onClick={handleToggleContrast} title="Alto contraste" className={variants()}>
      <SvgIcon
        iconName="contrast"
        title="Alto contraste"
        className="dark:article-fill-neutral-high-400"
      />
    </button>
  )
}
