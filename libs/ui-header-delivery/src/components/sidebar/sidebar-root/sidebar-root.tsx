import { useSidebar } from '../utils/hooks/use-sidebar'
import { variants } from './sidebar-root.variants'
import { useEffect } from 'react'

export type SidebarRootProps = {
  children: React.ReactNode
}

export function SidebarRoot({ children }: SidebarRootProps) {
  const { sidebar } = useSidebar()

  const { sidebarContaner, sidebarBackdrop, sidebarMenu } = variants({
    isSidebarOpen: sidebar.isOpen,
  })

  const closeSidebar = () => sidebar.toggle(false)

  useEffect(() => {
    document.body.classList[sidebar.isOpen ? 'add' : 'remove']('overflow-hidden')

    return () => document.body.classList.remove('overflow-hidden')
  }, [sidebar.isOpen])

  return (
    <div className={sidebarContaner()}>
      <div className={sidebarBackdrop()} role="none" onClick={closeSidebar}></div>
      <nav className={sidebarMenu()}>{children}</nav>
    </div>
  )
}
