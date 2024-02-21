import { useTvGuidePrograms } from '../../../utils/hook'
import { DAYS_US_TYPE } from '../../../utils/days-of-week'
import { useEffect } from 'react'

type TvGuideProgramsWeekProps = {
  children: React.ReactNode
  onTabChange?: (activeDay: DAYS_US_TYPE) => void
}

export function TvGuideProgramsWeek({ children, onTabChange }: TvGuideProgramsWeekProps) {
  const { activeTab } = useTvGuidePrograms()

  useEffect(() => {
    onTabChange && onTabChange(activeTab)
  }, [activeTab, onTabChange])

  return (
    <ol
      role="tablist"
      className="tv-flex tv-overflow-x-auto tv-border-t-[3px] tv-border-t-neutral-high-600"
    >
      {children}
    </ol>
  )
}
