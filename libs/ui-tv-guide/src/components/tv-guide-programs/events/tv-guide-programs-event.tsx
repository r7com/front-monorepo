import { Children, ReactNode } from 'react'
import { SvgIcon } from '@r7/ui-base-components'
import { TvGuideLiveTag } from '../../tv-guide-live-tag/tv-guide-live-tag'
import { eventVariants, descriptionVariants } from './variants'

type TvGuideProgramsEventProps = {
  children: ReactNode
  isLive?: boolean
}

export function TvGuideProgramsEventItem({ children, isLive = false }: TvGuideProgramsEventProps) {
  const elements = Children.toArray(children)
  const description = elements.splice(-1, 1)

  const { eventSlot, iconSlot, contentSlot } = eventVariants()

  return (
    <li className={eventSlot()}>
      {isLive && <TvGuideLiveTag position="top" />}
      <details className="tv-group">
        <summary className={contentSlot()}>
          <SvgIcon className={iconSlot()} size="small" iconName="chevron-bottom" />

          {elements}
        </summary>
        {description}
      </details>
    </li>
  )
}

export function TvGuideProgramsEventItemDescription({ children }: TvGuideProgramsEventProps) {
  return <div className={descriptionVariants()}>{children}</div>
}
