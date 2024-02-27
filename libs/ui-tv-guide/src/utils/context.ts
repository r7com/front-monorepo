import { createContext } from 'react'
import { DAYS_US_TYPE, DAYS_PT_TYPE } from './days-of-week'

type TvGuideProgramsContextProps = {
  activeTab: DAYS_US_TYPE
  changeTab(tab: DAYS_US_TYPE): void
  getCurrentDayId(day: DAYS_PT_TYPE): string | undefined
}

export const TvGuideProgramsContext = createContext<TvGuideProgramsContextProps | null>(null)
