import { useWindowScroll } from '@uidotdev/usehooks'
import { variants } from './header-main-section.variants'

export type HeaderMainSectionProps = {
  children: React.ReactNode
  className?: string
  bgColor?: string
}

export function HeaderMainSection({
  children,
  className = '',
  bgColor = '',
}: HeaderMainSectionProps) {
  const [{ y: axisY }] = useWindowScroll()

  // O header fica 'fixed' depois de 50px na regra atual
  const isFixed = axisY !== null && axisY >= 50

  return (
    <div
      className={variants({ fixed: isFixed, className })}
      style={{ backgroundColor: bgColor || undefined }}
    >
      {children}
    </div>
  )
}
