import { useState } from 'react'
import { TabsContext } from './contexts/tabs-context'

export type TabsProps = {
  children: React.ReactNode
  initialTabId?: string
}

export function Tabs({ children, initialTabId = undefined }: TabsProps) {
  const [currentTabId, setCurrentTabId] = useState(initialTabId)

  return (
    <TabsContext.Provider value={{ currentTabId, setCurrentTabId }}>
      <div data-testid="tabs">{children}</div>
    </TabsContext.Provider>
  )
}
