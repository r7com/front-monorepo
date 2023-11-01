import { createContext } from 'react'

type ArticleContextProps = {
  decreaseFontSize(): void
  increaseFontSize(): void
}

export const ArticleContext = createContext<ArticleContextProps | null>(null)
