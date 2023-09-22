import { useCallback, useEffect, useRef, useState } from 'react'

export type TabsProps = {
  children: React.ReactNode
  initialTabId?: string
}

export function Tabs({ children, initialTabId = undefined }: TabsProps) {
  const [actualTabId, setActualTab] = useState('')
  const tabsRef = useRef<HTMLDivElement>(null)
  const [tabs, setTabs] = useState<NodeListOf<HTMLElement>>()
  const [panels, setPanels] = useState<NodeListOf<HTMLElement>>()

  const changeTab = useCallback(
    (activeTabId: string) => {
      tabs?.forEach(tab => {
        if (activeTabId !== tab.id) {
          tab.ariaSelected = 'false'
          tab.tabIndex = -1
        } else {
          tab.ariaSelected = 'true'
          tab.tabIndex = 0
        }
      })
      panels?.forEach(panel => {
        const relatedTab = panel.getAttribute('aria-labelledby')
        if (activeTabId !== relatedTab) {
          panel.hidden = true
          panel.classList.add('hidden')
        } else {
          panel.hidden = false
          panel.classList.remove('hidden')
        }
      })
    },
    [tabs, panels],
  )

  function handleTabClick(event: CustomEvent) {
    setActualTab(event.detail.tabId)
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    const arrayTabs: HTMLElement[] = []
    tabs?.forEach(tab => {
      arrayTabs.push(tab)
    })
    const actualTabIndex = arrayTabs.findIndex(tab => tab.id === actualTabId)

    if (event.key === 'ArrowRight') {
      if (!(actualTabIndex === arrayTabs?.length - 1)) {
        const nextTabId = arrayTabs[actualTabIndex + 1].id
        arrayTabs[actualTabIndex + 1].focus()
        setActualTab(nextTabId)
      }
    }
    if (event.key === 'ArrowLeft') {
      if (!(actualTabIndex === 0)) {
        const prevTabId = arrayTabs[actualTabIndex - 1].id
        arrayTabs[actualTabIndex - 1].focus()
        setActualTab(prevTabId)
      }
    }
  }

  useEffect(() => {
    changeTab(actualTabId)
  }, [panels, tabs, actualTabId, changeTab])

  useEffect(() => {
    const currentTabsRef = tabsRef.current
    const $tabs = currentTabsRef?.querySelectorAll('[role=tab]') as NodeListOf<HTMLElement>
    const $panels = currentTabsRef?.querySelectorAll('[role=tabpanel]') as NodeListOf<HTMLElement>
    setTabs($tabs)
    setPanels($panels)
    currentTabsRef?.addEventListener('onTabClick', handleTabClick as EventListener)
    setActualTab(initialTabId || $tabs[0].id)

    return () => {
      currentTabsRef?.removeEventListener('onTabClick', handleTabClick as EventListener)
    }
  }, [initialTabId])

  return (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
    <div data-testid="tabs" ref={tabsRef} onKeyDown={handleKeyDown}>
      {children}
    </div>
  )
}
