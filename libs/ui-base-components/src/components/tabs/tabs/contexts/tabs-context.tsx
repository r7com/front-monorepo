import { createContext } from 'react'

export type TabsContextProps = {
  currentTabId: string | undefined
  setCurrentTabId: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const TabsContext = createContext<TabsContextProps>(null as never)
