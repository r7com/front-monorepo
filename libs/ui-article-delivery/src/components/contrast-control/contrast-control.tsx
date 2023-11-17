import { useLocalStorage } from '@uidotdev/usehooks'
import { $html, contrastClass, storageName } from './constants'
import { variants } from './contrast-control.variants'
import { SvgIcon } from '@r7/ui-base-components'

export function ContrastControl() {
  const [contrast, saveContrast] = useLocalStorage<boolean>(storageName)

  contrast ? addContrast() : removeContrast()

  function handleToggleContrast() {
    toggleContrast()
  }

  function removeContrast() {
    $html?.classList.remove(contrastClass)
  }

  function toggleContrast() {
    saveContrast(prev => !prev)
    $html?.classList.toggle(contrastClass)
  }

  function addContrast() {
    $html?.classList.add(contrastClass)
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
