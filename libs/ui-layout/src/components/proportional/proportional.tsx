import { Children } from 'react'
import { Grid } from '../grid'

type ProportionalsProps = {
  grid: 1 | 2 | 3 | 4
  children: React.ReactNode
}

function getProportionalGrids({ grid }: Pick<ProportionalsProps, 'grid'>) {
  const gridLayout = {
    1: 'md:layout-col-span-24',
    2: 'md:layout-col-span-12',
    3: 'md:layout-col-span-8',
    4: 'md:layout-col-span-6',
  }[grid]

  return ({ children }: Pick<ProportionalsProps, 'children'>) => {
    const blocks = Children.toArray(children)

    return (
      blocks.length <= grid && (
        <Grid>
          {Children.map(blocks, block => (
            <div className={gridLayout}>{block}</div>
          ))}
        </Grid>
      )
    )
  }
}

export const Proportional = {
  One: getProportionalGrids({ grid: 1 }),
  Two: getProportionalGrids({ grid: 2 }),
  Three: getProportionalGrids({ grid: 3 }),
  Four: getProportionalGrids({ grid: 4 }),
}
