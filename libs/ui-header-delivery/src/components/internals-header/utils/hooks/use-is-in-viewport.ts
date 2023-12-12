import { useMemo, useState, useEffect } from 'react'

export function useIsInViewport(elSelector?: string, rootMargin = '-56px') {
  const [isInViewport, setIsInViewport] = useState(false)
  const [elSelectorExists, setElSelectorExists] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => setIsInViewport(entry.isIntersecting), {
        rootMargin,
      }),
    [rootMargin],
  )

  useEffect(() => {
    if (elSelector) {
      const $el = document.querySelector(elSelector)
      $el && observer.observe($el)
      $el && setElSelectorExists(true)
    } else {
      setElSelectorExists(false)
    }

    return () => observer.disconnect()
  }, [observer, elSelector])

  return [isInViewport, elSelectorExists]
}
