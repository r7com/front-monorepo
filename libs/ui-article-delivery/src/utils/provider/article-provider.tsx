import { useRef } from 'react'
import { ArticleContext } from '../context/article-context'

type ArticleProviderProps = {
  children: React.ReactNode
}

export function ArticleProvider({ children }: ArticleProviderProps) {
  const articleRef = useRef<HTMLElement | null>(null)
  let fontSize = 1

  function decrease() {
    fontSize -= 0.1
    articleRef.current?.style.setProperty('--font-size', `${fontSize}`)
  }

  function increase() {
    fontSize += 0.1
    articleRef.current?.style.setProperty('--font-size', `${fontSize}`)
  }

  return (
    <ArticleContext.Provider
      value={{
        increase,
        decrease,
      }}
    >
      <article ref={articleRef} style={{ '--font-size': '1' } as React.CSSProperties}>
        {children}
      </article>
    </ArticleContext.Provider>
  )
}
