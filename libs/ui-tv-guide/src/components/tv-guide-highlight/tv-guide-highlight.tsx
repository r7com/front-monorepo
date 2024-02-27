import { wrapperVariants } from './variants'
import { TvGuideHighlightLive } from './tv-guide-highlight-live'
import { TvGuideHighlightNext } from './tv-guide-highlight-next'

type TvGuideHighlightProps = {
  children: React.ReactNode
}

export function TvGuideHighlight({ children }: TvGuideHighlightProps) {
  return <div className={wrapperVariants()}>{children}</div>
}

TvGuideHighlight.Live = TvGuideHighlightLive
TvGuideHighlight.Next = TvGuideHighlightNext
