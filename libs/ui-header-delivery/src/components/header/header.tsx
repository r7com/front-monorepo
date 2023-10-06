import { useWindowScroll } from '@uidotdev/usehooks'
import { variants } from './header.variants'

import { SidebarProvider } from '../sidebar/utils/provider/sidebar-provider'

export type HeaderProps = {
  children: React.ReactNode
  className?: string
  bgColor?: string
}

export function Header({ children, className = '', bgColor = '' }: HeaderProps) {
  const [{ y: axisY }] = useWindowScroll()

  // O header fica 'fixed' depois de 50px na regra atual
  const isFixed = axisY !== null && axisY >= 50

  return (
    <SidebarProvider>
      <header
        className={variants({ fixed: isFixed, className })}
        style={{ backgroundColor: bgColor || undefined }}
      >
        {children}
      </header>
    </SidebarProvider>
  )
}
