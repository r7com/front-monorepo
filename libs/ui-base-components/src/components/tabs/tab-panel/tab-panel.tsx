import { useTabs } from '../tabs/hooks/use-tabs'

export type TabPanelProps = {
  id: string
  tabId: string
  children: React.ReactNode
  className?: string
}

export function TabPanel({ id, tabId, children, className = '' }: TabPanelProps) {
  const { currentTabId } = useTabs()
  return (
    <div
      id={id}
      role="tabpanel"
      aria-labelledby={tabId}
      tab-index="0"
      hidden={currentTabId !== tabId}
      className={`p-xxxs ${className}`}
    >
      {children}
    </div>
  )
}
