import { useRef } from 'react'
import { useTabs } from '../tabs/hooks/use-tabs'

export type TabListProps = {
  children: React.ReactNode
  ariaLabel: string
}

export function TabList({ children, ariaLabel }: TabListProps) {
  const { setCurrentTabId } = useTabs()
  const ref = useRef<HTMLDivElement>(null)

  function handleKeyDown(event: React.KeyboardEvent) {
    const tabListRef = ref.current
    const currentFocus = tabListRef?.ownerDocument.activeElement
    if (event.key === 'ArrowRight') {
      const nextElement = currentFocus?.nextElementSibling as HTMLElement
      if (currentFocus && nextElement) {
        const nextTabId = nextElement.id
        setCurrentTabId(nextTabId)
        nextElement.focus()
      }
    }
    if (event.key === 'ArrowLeft') {
      const prevElement = currentFocus?.previousElementSibling as HTMLElement
      if (currentFocus && prevElement) {
        const prevTabId = prevElement.id
        setCurrentTabId(prevTabId)
        prevElement.focus()
      }
    }
  }
  return (
    <div
      ref={ref}
      className="flex"
      tabIndex={-1}
      role="tablist"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  )
}
