import { useContext } from 'react'
import { ArticleContext } from '../context/article-context'

export function useArticleAction() {
  const context = useContext(ArticleContext)

  if (context === null) throw new Error('ArticleContext has not been initialized yet')

  return context
}
