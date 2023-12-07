import { useMemo, useState, useEffect } from 'react'

export function useIsInViewport(elSelector: string, rootMargin = '-56px') {
  const [isInViewport, setIsInViewport] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => setIsInViewport(entry.isIntersecting), {
        rootMargin,
      }),
    [rootMargin],
  )

  useEffect(() => {
    const $el = document.querySelector(elSelector)

    $el && observer.observe($el)

    return () => observer.disconnect()
  }, [observer, elSelector])

  console.log(isInViewport)

  return isInViewport
}
