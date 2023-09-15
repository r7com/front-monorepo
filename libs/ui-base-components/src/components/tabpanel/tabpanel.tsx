export type TabPanelProps = {
  id: string
  tabId: string
  children: React.ReactNode
  className?: string
}

export function TabPanel({ id, tabId, children, className = '' }: TabPanelProps) {
  return (
    <div
      id={id}
      role="tabpanel"
      aria-labelledby={tabId}
      tab-index="0"
      hidden={true}
      className={`p-xxxs hidden ${className}`}
    >
      {children}
    </div>
  )
}
