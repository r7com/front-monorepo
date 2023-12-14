import { Children } from 'react'
import { Grid } from '../grid'

type MagazineProps = {
  children: React.ReactNode
}

function MagazineOne({ children }: MagazineProps) {
  const blocks = Children.toArray(children)

  return (
    <Grid>
      <div className="lg:layout-col-span-12">{blocks[0]}</div>
      <div className="lg:layout-col-span-5">{blocks[1]}</div>
      <div className="lg:layout-col-span-7">{blocks[2]}</div>
    </Grid>
  )
}

function MagazineTwo({ children }: MagazineProps) {
  const blocks = Children.toArray(children)

  return (
    <Grid>
      <div className="lg:layout-col-span-17">{blocks[0]}</div>
      <div className="lg:layout-col-span-7">{blocks[1]}</div>
    </Grid>
  )
}

export const Magazine = {
  One: MagazineOne,
  Two: MagazineTwo,
}
