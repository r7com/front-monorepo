import { ReactNode } from 'react'

type ArticleHeaderTopbarProps = {
  children: ReactNode
}

export function ArticleHeaderTopbar({ children }: ArticleHeaderTopbarProps) {
  return (
    <div className="article-flex article-flex-col lg:article-flex-row lg:article-justify-between lg:article-items-start article-mb-xxxs lg:article-mb-xs">
      {children}
    </div>
  )
}
