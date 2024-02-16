import { TvGuideButton } from './tv-guide-button'
import { TvGuideCard } from './tv-guide-card'
import { TvGuideFigure } from './tv-guide-figure'
import { TvGuideTime } from './tv-guide-time'
import {
  TvGuideRating,
  TvGuideAudioDesctiption,
  TvGuideClosedCaption,
  TvGuideHighDefinition,
} from './tv-guide-details'

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
TvGuide.Rating = TvGuideRating
TvGuide.AudioDescription = TvGuideAudioDesctiption
TvGuide.ClosedCaption = TvGuideClosedCaption
TvGuide.HighDefinition = TvGuideHighDefinition
