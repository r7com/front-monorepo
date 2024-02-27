import { Children, ReactNode } from 'react'
import { nextVariants } from './variants'

type TvGuideHighlightNextProps = {
  children: ReactNode
}

export function TvGuideHighlightNext({ children }: TvGuideHighlightNextProps) {
  const [nextProgram, afterProgram] = Children.toArray(children)
  const { wrapperSlot, eventSlot } = nextVariants()

  return (
    <div className={wrapperSlot()}>
      <div className={eventSlot()}>{nextProgram}</div>
      <div className={eventSlot()}>{afterProgram}</div>
    </div>
  )
}
