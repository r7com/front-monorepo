import { Grid } from '../../grid'

type ArticleGridProps = {
  children: React.ReactNode
}

export function ArticleGrid({ children }: ArticleGridProps) {
  return <Grid>{children}</Grid>
}
