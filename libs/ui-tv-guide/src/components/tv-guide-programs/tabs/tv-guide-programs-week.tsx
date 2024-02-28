import { useTvGuidePrograms } from '../../../utils/hook'
import { DAYS_US_TYPE } from '../../../utils/days-of-week'

type TvGuideProgramsWeekProps = {
  children: React.ReactNode
  onTabChange?: (activeDay: DAYS_US_TYPE) => void
}

export function TvGuideProgramsWeek({ children, onTabChange }: TvGuideProgramsWeekProps) {
  const { activeTab } = useTvGuidePrograms()

  onTabChange && onTabChange(activeTab)

  return (
    <ol
      role="tablist"
      className="tv-flex tv-overflow-x-auto tv-border-t-[3px] tv-border-solid tv-border-t-neutral-high-600"
    >
      {children}
    </ol>
  )
}
