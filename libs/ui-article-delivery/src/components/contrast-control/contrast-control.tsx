import { useLocalStorage } from '@uidotdev/usehooks'
import { $html, contrastClass, storageName } from './constants'
import { variants } from './contrast-control.variants'
import { SvgIcon } from '@r7/ui-base-components'

export function ContrastControl() {
  const [contrast, saveContrast] = useLocalStorage<boolean>(storageName)

  contrast ? setContrast() : removeContrast()

  function handleContrast() {
    toggleContrast()
  }

  function removeContrast() {
    $html && $html.classList.remove(contrastClass)
  }

  function toggleContrast() {
    saveContrast(prev => !prev)
    $html && $html.classList.toggle(contrastClass)
  }

  function setContrast() {
    $html && $html.classList.add(contrastClass)
  }
  return (
    <button onClick={handleContrast} title="Alto contraste" className={variants()}>
      <SvgIcon iconName="contrast" title="Alto contraste" className="dark:fill-neutral-high-400" />
    </button>
  )
}
