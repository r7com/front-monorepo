import { getElements, numberFontSize } from '../utils'
import { FontSizeControlVariants, variants } from '../font-size-control.variants'

export type FontSizeControlDecreaseProps = {
  minSize?: number
} & FontSizeControlVariants

export function FontSizeControlDecrease({ minSize = 10 }: FontSizeControlDecreaseProps) {
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
