import { useContext } from 'react'
import { ArticleContext } from '../context/article-context'

export function useArticleAction() {
  const context = useContext(ArticleContext)

  if (context === null) throw new Error('Nao foi inicializado')

  return context
}
