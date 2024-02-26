import { Children, ReactNode } from 'react'
import {
  TvGuideProgramsEventsList,
  TvGuideProgramsEventItem,
  TvGuideProgramsEventItemDescription,
} from './events'
import { TvGuideProgramsDay, TvGuideProgramsWeek } from './tabs'
import { TvGuideProgramsProvider } from '../../utils/provider'
import { DAYS_US_TYPE } from '../../utils/days-of-week'

type TvGuideProgramsProps = {
  children: ReactNode
}

export function TvGuidePrograms({ children }: TvGuideProgramsProps) {
  const [tabs, ...events] = Children.toArray(children)
  const currentDay = new Date().toLocaleString('default', { weekday: 'long' })

  return (
    <TvGuideProgramsProvider currentDay={currentDay as DAYS_US_TYPE}>
      <div>{tabs}</div>
      <div>{events}</div>
    </TvGuideProgramsProvider>
  )
}

TvGuidePrograms.EventsList = TvGuideProgramsEventsList
TvGuidePrograms.EventItem = TvGuideProgramsEventItem
TvGuidePrograms.EventDescription = TvGuideProgramsEventItemDescription
TvGuidePrograms.WeekList = TvGuideProgramsWeek
TvGuidePrograms.WeekDay = TvGuideProgramsDay
