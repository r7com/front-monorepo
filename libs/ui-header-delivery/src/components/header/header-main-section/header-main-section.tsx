import { useEffect, useState } from 'react'
import { variants } from './header-main-section.variants'
import { useScrollDirection } from '../utils/hooks/use-scroll-direction'

export type HeaderMainSectionProps = {
  children: React.ReactNode
  bgColor?: string
}

export function HeaderMainSection({ children, bgColor = '' }: HeaderMainSectionProps) {
  const [isFixed, setIsFixed] = useState(false)
  const [scrollYThreshold, setScrollYThreshold] = useState(false)

  const scrollDirection = useScrollDirection()

  useEffect(() => {
    const windowOnScroll = () =>
      window.requestAnimationFrame(() => setScrollYThreshold(() => window.scrollY >= 50))

    window.addEventListener('scroll', windowOnScroll)

    return () => window.removeEventListener('scroll', windowOnScroll)
  }, [])

  useEffect(() => {
    if (window.innerWidth >= 640) setIsFixed(() => scrollYThreshold)
    else setIsFixed(() => scrollDirection === 'up')
  }, [scrollDirection, scrollYThreshold])

  return (
    <div className={variants({ fixed: isFixed })} style={{ backgroundColor: bgColor || undefined }}>
      {children}
    </div>
  )
}
