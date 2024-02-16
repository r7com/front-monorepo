import { Button } from '@r7/ui-base-components'
import { dayVariants } from './variants'
import { useTvGuidePrograms } from '../../../utils/hook'
import { DAYS_PT_TYPE, DAYS_US_TYPE } from '../../../utils/days-of-week'

type TvGuideProgramsDayProps = {
  children: React.ReactNode
  id: DAYS_PT_TYPE
}

export function TvGuideProgramsDay({ children, id }: TvGuideProgramsDayProps) {
  const { activeTab, changeTab, getCurrentDayId } = useTvGuidePrograms()

  const currentDay = new Date().toLocaleString('default', { weekday: 'long' })
  const tabId = getCurrentDayId(id)

  const { buttonSlot, itemSlot } = dayVariants({
    currentSelected: activeTab === tabId,
    currentDay: currentDay === tabId,
  })

  return (
    <li className={itemSlot()}>
      <Button
        color="ghost"
        role="tab"
        id={`tab-${id}`}
        className={buttonSlot()}
        aria-controls={`tabpanel-${id}`}
        aria-selected={activeTab === tabId}
        disabled={activeTab === tabId}
        onClick={() => changeTab(tabId as DAYS_US_TYPE)}
      >
        {children}
      </Button>
    </li>
  )
}
