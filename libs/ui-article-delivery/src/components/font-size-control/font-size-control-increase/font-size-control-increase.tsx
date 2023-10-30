import { variants } from '../font-size-control.variants'
import { useArticleAction } from '../../../utils/hooks/use-article-actions'

export function FontSizeControlIncrease() {
  const { increaseSlot } = variants()
  const { increase } = useArticleAction()

  return (
    <button onClick={increase} title="Aumentar fonte do texto" className={increaseSlot()}>
      A+
    </button>
  )
}
