import { createContext } from 'react'

type ArticleContextProps = {
  decreaseFontSize(): void
  increaseFontSize(): void
  fontSize: number
}

export const ArticleContext = createContext<ArticleContextProps | null>(null)
