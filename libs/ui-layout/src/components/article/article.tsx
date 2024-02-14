import { Grid } from '../grid'
import { Aside } from './aside'
import { Main } from './main'

type ArticleProps = {
  children: React.ReactNode
}

export function Article({ children }: ArticleProps) {
  return <Grid>{children}</Grid>
}

Article.Main = Main
Article.Aside = Aside
