import { TvGuideButton } from './tv-guide-button'
import { TvGuideCard } from './tv-guide-card'
import { TvGuideFigure } from './tv-guide-figure'
import { TvGuideTime } from './tv-guide-time'

type TvGuideProps = {
  children: React.ReactNode
}

export function TvGuide({ children }: TvGuideProps) {
  return <div className="tv-flex tv-flex-col tv-gap-xxxs">{children}</div>
}

TvGuide.Figure = TvGuideFigure
TvGuide.Time = TvGuideTime
TvGuide.Button = TvGuideButton
TvGuide.Card = TvGuideCard
