import { useState } from 'react'
import { ArticleContext } from '../context/article-context'
import { MULTIPLIER, fontSizeInitial, maxSize, minSize } from '../constants'

type ArticleProviderProps = {
  children: React.ReactNode
}

export function ArticleProvider({ children }: ArticleProviderProps) {
  const [fontSize, setFontSize] = useState<number>(fontSizeInitial)

  function decreaseFontSize() {
    fontSize >= minSize && setFontSize(prev => (prev -= MULTIPLIER))
  }

  function increaseFontSize() {
    fontSize <= maxSize && setFontSize(prev => (prev += MULTIPLIER))
  }

  return (
    <ArticleContext.Provider
      value={{
        increaseFontSize,
        decreaseFontSize,
        fontSize,
      }}
    >
      {children}
    </ArticleContext.Provider>
  )
}
