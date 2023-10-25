import { getElements, numberFontSize } from '../utils'
import { FontSizeChangerVariants, variants } from '../font-size-changer.variants'

export type FontSizeChangerIncreaseProps = {
  maxSize?: number
} & FontSizeChangerVariants

export function FontSizeChangerIncrease({ maxSize = 24 }: FontSizeChangerIncreaseProps) {
  const increase = () => {
    const elements = getElements()

    elements.forEach($item => {
      const fontSize = numberFontSize($item)

      if (fontSize >= maxSize) return

      $item.style.fontSize = `${fontSize + 2}px`
    })
  }

  return (
    <button onClick={increase} title="Aumentar fonte do texto" className={variants()}>
      A+
    </button>
  )
}
