import { Children } from 'react'
import { Grid } from '../grid'

type MagazineProps = {
  children: React.ReactNode
}

function MagazineOne({ children }: MagazineProps) {
  const [block1, block2, block3] = Children.toArray(children)

  return (
    <Grid>
      <div className="md:layout-col-span-24 lg:layout-col-span-12">{block1}</div>
      <div className="md:layout-col-span-11 lg:layout-col-span-5">{block2}</div>
      <div className="md:layout-col-span-13 lg:layout-col-span-7">{block3}</div>
    </Grid>
  )
}

function MagazineTwo({ children }: MagazineProps) {
  const [block1, block2] = Children.toArray(children)

  return (
    <Grid>
      <div className="md:layout-col-span-17">{block1}</div>
      <div className="md:layout-col-span-7">{block2}</div>
    </Grid>
  )
}

export const Magazine = {
  One: MagazineOne,
  Two: MagazineTwo,
}
