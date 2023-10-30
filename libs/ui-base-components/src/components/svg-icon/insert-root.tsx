import { renderToString } from 'react-dom/server'
import { ReactComponent as SvgSpriteList } from '../../svg/compiled/symbol/svg/sprite.css.svg'

export function insertSvgSpriteRoot() {
  const id = 'rootSvgSprite'
  const $root = document.querySelector(`#${id}`)

  if ($root) return

  const div = document.createElement('div')
  // div.innerHTML = renderToString('')

  document.body.appendChild(div)
}
