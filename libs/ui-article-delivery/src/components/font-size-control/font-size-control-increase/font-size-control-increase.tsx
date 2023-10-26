import { getElements, numberFontSize } from '../utils'
import { FontSizeControlVariants, variants } from '../font-size-control.variants'

export type FontSizeControlIncreaseProps = {
  maxSize?: number
} & FontSizeControlVariants

export function FontSizeControlIncrease({ maxSize = 24 }: FontSizeControlIncreaseProps) {
  const { increase } = variants()

  const handleIncrease = () => {
    const elements = getElements()

    elements.forEach($item => {
      const fontSize = numberFontSize($item)

      if (fontSize >= maxSize) return

      $item.style.fontSize = `${fontSize + 2}px`
    })
  }

  return (
    <button onClick={handleIncrease} title="Aumentar fonte do texto" className={increase()}>
      A+
    </button>
  )
}
