import { Card } from '../card'
import { ProportionalPhotoFigure } from './proportional-photo-figure'
import { ProportionalPhotoTextWrapper } from './proportional-photo-text-wrapper'
import { ProportionalPhotoTitle } from './proportional-photo-title'

export type ProportionalPhotoProps = {
  children: React.ReactNode
}

export function ProportionalPhoto({ children }: ProportionalPhotoProps) {
  return <Card className="card-@container card-relative">{children}</Card>
}

ProportionalPhoto.Figure = ProportionalPhotoFigure
ProportionalPhoto.TextWrapper = ProportionalPhotoTextWrapper
ProportionalPhoto.Title = ProportionalPhotoTitle
