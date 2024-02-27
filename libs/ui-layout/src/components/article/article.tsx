import { ArticleGrid } from './article-grid'
import { ArticleAside } from './article-aside'
import { ArticleMain } from './article-main'

type ArticleProps = {
  children: React.ReactNode
}

export function Article({ children }: ArticleProps) {
  return <div className="lg:layout-gap-xs layout-gap-xxxs layout-grid">{children}</div>
}

Article.Main = ArticleMain
Article.Aside = ArticleAside
Article.Grid = ArticleGrid
