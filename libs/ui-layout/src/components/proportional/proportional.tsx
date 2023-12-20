import { Children } from 'react'
import { Grid } from '../grid'

type ProportionalsProps = {
  cols: 1 | 2 | 3 | 4
  children: React.ReactNode
}

function getProportionalGrids({ cols }: Pick<ProportionalsProps, 'cols'>) {
  const colsLayout = {
    1: 'md:layout-col-span-24',
    2: 'md:layout-col-span-12',
    3: 'md:layout-col-span-8',
    4: 'md:layout-col-span-6',
  }[cols]

  return ({ children }: Pick<ProportionalsProps, 'children'>) => {
    const blocks = Children.toArray(children)

    return (
      blocks.length <= cols && (
        <Grid>
          {Children.map(blocks, block => (
            <div className={colsLayout}>{block}</div>
          ))}
        </Grid>
      )
    )
  }
}

export const Proportional = {
  One: getProportionalGrids({ cols: 1 }),
  Two: getProportionalGrids({ cols: 2 }),
  Three: getProportionalGrids({ cols: 3 }),
  Four: getProportionalGrids({ cols: 4 }),
}
