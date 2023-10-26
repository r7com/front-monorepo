import { getElements, numberFontSize } from '../utils'
import { FontSizeChangerVariants, variants } from '../font-size-changer.variants'

export type FontSizeChangerDecreaseProps = {
  minSize?: number
} & FontSizeChangerVariants

export function FontSizeChangerDecrease({ minSize = 10 }: FontSizeChangerDecreaseProps) {
  const { decrease } = variants()
  const handleDecrease = () => {
    const elements = getElements()

    elements.forEach($item => {
      const fontSize = numberFontSize($item)

      if (fontSize <= minSize) return

      $item.style.fontSize = `${fontSize - 2}px`
    })
  }

  return (
    <button onClick={handleDecrease} className={decrease()} title="Diminuir fonte do texto">
      A-
    </button>
  )
}
