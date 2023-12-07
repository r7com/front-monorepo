import { ReactNode } from 'react'

type ArticleHeadingsProps = {
  children: ReactNode
}

export function ArticleHeaderHeading({ children }: ArticleHeadingsProps) {
  return (
    <div className="article-border-b-hairline article-border-neutral-low-400 article-pb-xxxs article-mb-xxxs lg:article-mb-xxs">
      {children}
    </div>
  )
}
