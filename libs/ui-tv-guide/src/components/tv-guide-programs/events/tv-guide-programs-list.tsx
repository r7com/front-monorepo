import { DAYS_PT_TYPE } from '../../../utils/days-of-week'
import { useTvGuidePrograms } from '../../../utils/hook'
import { listVariants } from './variants'

type TvGuideProgramsListProps = {
  children: React.ReactNode
  id: DAYS_PT_TYPE
}

export function TvGuideProgramsEventsList({ children, id }: TvGuideProgramsListProps) {
  const { activeTab, getCurrentDayId } = useTvGuidePrograms()

  const isCurrentActive = getCurrentDayId(id) === activeTab

  return <ol className={listVariants({ activeTab: isCurrentActive })}>{children}</ol>
}
