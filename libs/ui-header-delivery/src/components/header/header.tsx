import { useWindowScroll } from '@uidotdev/usehooks'
import { variants } from './header.variants'

export type HeaderProps = {
  children: React.ReactNode
  className?: string
  editorialColor?: string
}

export function Header({ children, className = '', editorialColor = '' }: HeaderProps) {
  const [{ y: axisY }] = useWindowScroll()

  // O header fica 'fixed' depois de 50px na regra atual
  const isFixed = axisY !== null && axisY >= 50

  return (
    <header
      className={variants({ fixed: isFixed, className })}
      style={{ backgroundColor: editorialColor ?? undefined }}
    >
      {children}
    </header>
  )
}
