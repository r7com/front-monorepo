import { useState } from 'react'
import { TvGuideProgramsContext } from './context'
import { DAYS_PT_TYPE, DAYS_US_TYPE, DAYS } from './days-of-week'

type TvGuideProgramsProviderProps = {
  children: React.ReactNode
  currentDay: DAYS_US_TYPE
}

export function TvGuideProgramsProvider({ children, currentDay }: TvGuideProgramsProviderProps) {
  const [activeTab, setActiveTab] = useState(currentDay)

  const changeTabHandler = (tab: DAYS_US_TYPE) => setActiveTab(tab)

  const getCurrentDayId = (day: DAYS_PT_TYPE) => {
    return Object.keys(DAYS).find(key => DAYS[key as DAYS_US_TYPE] === day)
  }

  return (
    <TvGuideProgramsContext.Provider
      value={{ activeTab, changeTab: changeTabHandler, getCurrentDayId }}
    >
      {children}
    </TvGuideProgramsContext.Provider>
  )
}
