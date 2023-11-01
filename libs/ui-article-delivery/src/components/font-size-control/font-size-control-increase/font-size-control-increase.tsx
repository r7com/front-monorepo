import { variants } from '../font-size-control.variants'
import { useArticleAction } from '../../../utils/hooks/use-article-actions'

export function FontSizeControlIncrease() {
  const { increaseSlot } = variants()
  const { increaseFontSize } = useArticleAction()

  return (
    <button onClick={increaseFontSize} title="Aumentar fonte do texto" className={increaseSlot()}>
      A+
    </button>
  )
}
