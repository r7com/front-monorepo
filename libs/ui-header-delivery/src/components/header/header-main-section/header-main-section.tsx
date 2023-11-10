import { useEffect, useState } from 'react'
import { variants } from './header-main-section.variants'
import { useScrollDirection } from '../utils/hooks/use-scroll-direction'

export type HeaderMainSectionProps = {
  children: React.ReactNode
  bgColor?: string
}

export function HeaderMainSection({ children, bgColor = '' }: HeaderMainSectionProps) {
  const [isFixed, setIsFixed] = useState(false)
  const scrollDirection = useScrollDirection()

  useEffect(() => {
    const updateIsFixedValue = () => {
      window.requestAnimationFrame(() => {
        if (window.innerWidth >= 640) setIsFixed(() => window.scrollY >= 50)
        else setIsFixed(() => scrollDirection === 'up')
      })
    }

    window.addEventListener('scroll', updateIsFixedValue)

    return () => window.removeEventListener('scroll', updateIsFixedValue)
  }, [scrollDirection])

  return (
    <div className={variants({ fixed: isFixed })} style={{ backgroundColor: bgColor || undefined }}>
      {children}
    </div>
  )
}
