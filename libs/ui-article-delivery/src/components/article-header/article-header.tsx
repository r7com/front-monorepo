import { ReactNode } from 'react'
import { ArticleHeaderHeading } from './article-header-heading/article-header-heading'
import { ArticleHeaderTopbar } from './article-header-topbar/article-header-topbar'

type ArticleHeaderProps = {
  children: ReactNode
}

export function ArticleHeader({ children }: ArticleHeaderProps) {
  return <header>{children}</header>
}

ArticleHeader.Heading = ArticleHeaderHeading
ArticleHeader.Topbar = ArticleHeaderTopbar
