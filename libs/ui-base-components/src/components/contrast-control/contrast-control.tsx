import { useLocalStorage } from '@uidotdev/usehooks'
import { $body, contrastClass, storageName } from './constants'
import { variants } from './contrast-control.variants'
import { SvgIcon } from '../svg-icon'

import './css/contrast.css'

export function ContrastControl() {
  const [contrast, saveContrast] = useLocalStorage<boolean>(storageName)

  contrast ? setContrast() : removeContrast()

  function handleContrast() {
    toggleContrast()
  }

  function removeContrast() {
    $body && $body.classList.remove(contrastClass)
  }

  function toggleContrast() {
    saveContrast(prev => !prev)
    $body && $body.classList.toggle(contrastClass)
  }

  function setContrast() {
    $body && $body.classList.add(contrastClass)
  }
  return (
    <button onClick={handleContrast} title="Alto contraste" className={variants()}>
      <SvgIcon iconName="contrast" title="Alto contraste" />
    </button>
  )
}
