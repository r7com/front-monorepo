import { variants } from '../font-size-control.variants'
import { useArticleAction } from '../../../utils/hooks/use-article-actions'

export function FontSizeControlDecrease() {
  const { decreaseSlot } = variants()
  const { decrease } = useArticleAction()

  return (
    <button onClick={decrease} className={decreaseSlot()} title="Diminuir fonte do texto">
      A-
    </button>
  )
}
