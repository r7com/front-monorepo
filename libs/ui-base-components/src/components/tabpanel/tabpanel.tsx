export type TabPanelProps = {
  id: string
  tabId: string
  children: React.ReactNode
  selected?: boolean
  className?: string
}

export function TabPanel({ id, tabId, children, selected = false, className = '' }: TabPanelProps) {
  return (
    <div
      id={id}
      role="tabpanel"
      aria-labelledby={tabId}
      tab-index="0"
      hidden={!selected}
      className={`p-xxxs ${className}`}
    >
      {children}
    </div>
  )
}
