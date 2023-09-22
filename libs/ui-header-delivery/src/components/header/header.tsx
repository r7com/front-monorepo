import { variants, HeaderVariants } from './header.variants'
import { useWindowScroll } from '@uidotdev/usehooks'

export type HeaderProps = {
  children: React.ReactNode
  className?: string
  editorialColor?: string
} & HeaderVariants

export function Header({ children, className = '', editorialColor = '' }: HeaderProps) {
  const [{ y: axisY }] = useWindowScroll()

  // O header fica 'fixed' depois de 50px na regra atual
  const isFixed = axisY !== null && axisY >= 50

  return (
    <header
      className={variants({ className, fixed: isFixed })}
      style={{ backgroundColor: editorialColor ?? undefined }}
    >
      {children}
    </header>
  )
}