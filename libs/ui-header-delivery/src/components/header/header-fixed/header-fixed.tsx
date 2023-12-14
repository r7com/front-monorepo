import { useState, useEffect, useRef } from 'react'
import { HeaderProvider } from '../utils/provider/header-provider'
import { useScrollDirection } from '../utils/hooks/use-scroll-direction'
import { variants } from './header-fixed.variants'

export type HeaderFixedProps = {
  children: React.ReactNode
}

export function HeaderFixed({ children }: HeaderFixedProps) {
  const [isFixed, setIsFixed] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  const scrollDirection = useScrollDirection()

  useEffect(() => {
    setIsFixed(() => window.innerWidth >= 640 || scrollDirection === 'up')
  }, [scrollDirection])

  return (
    <HeaderProvider headerRef={headerRef.current}>
      <div
        className="header-w-full relative header-h-lg"
        style={{ minHeight: headerRef.current?.clientHeight }}
      >
        <div ref={headerRef} className={variants({ fixed: isFixed })}>
          {children}
        </div>
      </div>
    </HeaderProvider>
  )
}
