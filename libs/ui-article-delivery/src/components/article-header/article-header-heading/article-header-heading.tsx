import { ReactNode } from 'react'

type ArticleHeadingsProps = {
  children: ReactNode
}

export function ArticleHeaderHeading({ children }: ArticleHeadingsProps) {
  return (
    <div className="dark:article-border-neutral-high-400 article-border-b-hairline article-border-neutral-low-400 article-border-solid article-pb-xxxs article-mb-xxxs lg:article-mb-xxs">
      {children}
    </div>
  )
}
