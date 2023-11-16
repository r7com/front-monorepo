import { useState, useEffect } from 'react'

type ScrollDirection = 'up' | 'down'

export function useScrollDirection() {
  // const threshold = 100
  const [scrollDir, setScrollDir] = useState<ScrollDirection>('up')

  useEffect(() => {
    let previousScrollY = window.scrollY

    const scrolledMoreThanThreshold = (currentScrollY: number) =>
      Math.abs(currentScrollY - previousScrollY) > 0

    const isScrollingUp = (currentScrollY: number) =>
      currentScrollY > previousScrollY &&
      !(previousScrollY > 0 && currentScrollY === 0) &&
      !(currentScrollY > 0 && previousScrollY === 0)

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY

      if (scrolledMoreThanThreshold(currentScrollY)) {
        const newScrollDirection = isScrollingUp(currentScrollY) ? 'down' : 'up'
        setScrollDir(() => newScrollDirection)
        previousScrollY = currentScrollY > 0 ? currentScrollY : 0
      }
    }

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollDir
}
