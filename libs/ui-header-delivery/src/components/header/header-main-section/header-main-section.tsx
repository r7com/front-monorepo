import { useWindowScroll, useWindowSize } from '@uidotdev/usehooks'
import { variants } from './header-main-section.variants'
import { useScrollDirection } from '../utils/hooks/use-scroll-direction'

export type HeaderMainSectionProps = {
  children: React.ReactNode
  bgColor?: string
}

export function HeaderMainSection({ children, bgColor = '' }: HeaderMainSectionProps) {
  const [{ y: axisY }] = useWindowScroll()
  const size = useWindowSize()
  const direction = useScrollDirection()

  let isFixed

  // O header fica 'fixed' depois de 50px na regra atual desktop
  if (size.width && size.width >= 640) isFixed = axisY !== null && axisY >= 50
  // O header fica 'fixed' quando o scroll da página é pra cima no mobile
  else isFixed = direction === 'up'

  return (
    <div className={variants({ fixed: isFixed })} style={{ backgroundColor: bgColor || undefined }}>
      {children}
    </div>
  )
}
