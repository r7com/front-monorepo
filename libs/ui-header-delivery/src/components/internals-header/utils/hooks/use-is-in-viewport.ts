import { useMemo, useState, useEffect } from 'react'

export function useIsInViewport(elSelector: string) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), {
        rootMargin: '-50px',
      }),
    [],
  )

  useEffect(() => {
    const $el = document.querySelector(elSelector)

    $el && observer.observe($el)

    return () => observer.disconnect()
  }, [observer, elSelector])

  return isIntersecting
}
