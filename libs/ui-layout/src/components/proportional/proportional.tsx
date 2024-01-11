import { Children } from 'react'
import { Grid } from '../grid'
import { variants, ProportionalVariants } from './proportional.variants'

type ProportionalsProps = {
  children: React.ReactNode
} & ProportionalVariants

function getProportionalGrids({ cols = 1 }: Pick<ProportionalsProps, 'cols'>) {
  return ({ children }: Pick<ProportionalsProps, 'children'>) => {
    const blocks = Children.toArray(children)

    return (
      blocks.length <= cols && (
        <Grid>
          {Children.map(blocks, block => (
            <div className={variants({ cols })}>{block}</div>
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
