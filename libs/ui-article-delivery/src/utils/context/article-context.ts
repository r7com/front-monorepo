import { createContext } from 'react'

type ArticleContextProps = {
  decrease(): void
  increase(): void
}

export const ArticleContext = createContext<ArticleContextProps | null>(null)
