import { useEffect, useRef, useState } from 'react'

export type TabsProps = {
  children: React.ReactNode
  initialTab: string
}

export function Tabs({ children, initialTab }: TabsProps) {
  const ref = useRef<HTMLDivElement>(null)

  function changeTab(
    tabs: NodeListOf<HTMLElement> | undefined,
    activeTabId: string,
    panels: NodeListOf<HTMLElement> | undefined,
  ) {
    console.log('qewqw', tabs)
    console.log('qewqw', activeTabId)
    console.log('qewqw', panels)
    tabs?.forEach(tab => {
      if (activeTabId !== tab.id) {
        tab.ariaSelected = 'false'
        tab.tabIndex = -1
      }
    })
    panels?.forEach(panel => {
      const relatedTab = panel.getAttribute('aria-labelledby')
      console.log(relatedTab)
      if (activeTabId !== relatedTab) {
        panel.hidden = true
        panel.classList.add('hidden')
      } else {
        panel.hidden = false
        panel.classList.remove('hidden')
      }
    })
  }

  useEffect(() => {
    function handleTabClick(event: CustomEvent) {
      const tabs = ref.current?.querySelectorAll('[role=tab]') as NodeListOf<HTMLElement>
      const panels = ref.current?.querySelectorAll('[role=tabpanel]') as NodeListOf<HTMLElement>
      console.log(event)
      changeTab(tabs, event.detail.tabId, panels)
    }

    const element = ref.current
    element?.addEventListener('onTabClick', handleTabClick as EventListener)
    return () => {
      element?.removeEventListener('onTabClick', handleTabClick as EventListener)
    }
  }, [])

  return <div ref={ref}>{children}</div>
}
