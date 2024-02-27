import { TvGuideLiveTag } from '../tv-guide-live-tag'
import { liveVariants } from './variants'

type TvGuideHighlightLiveProps = {
  children: React.ReactNode
}

export function TvGuideHighlightLive({ children }: TvGuideHighlightLiveProps) {
  return (
    <div className={liveVariants()}>
      {children}
      <TvGuideLiveTag position="float" />
    </div>
  )
}
