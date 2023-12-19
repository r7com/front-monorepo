import { useState } from 'react'
import { ArticleContext } from '../context/article-context'
import { MULTIPLIER } from '../constants'

type ArticleProviderProps = {
  children: React.ReactNode
}

export function ArticleProvider({ children }: ArticleProviderProps) {
  const fontSizeInitial = 1
  const [fontSize, setFontSize] = useState(fontSizeInitial)

  function decreaseFontSize() {
    setFontSize(prev => (prev -= MULTIPLIER))
  }

  function increaseFontSize() {
    setFontSize(prev => (prev += MULTIPLIER))
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
