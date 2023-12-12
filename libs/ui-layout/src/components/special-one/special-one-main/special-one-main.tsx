import { Children, ReactNode, isValidElement } from 'react'

type MainProps = {
  rowOne: ReactNode
  rowTwo: ReactNode
}

export function Main({ rowOne, rowTwo }: MainProps) {
  const childrenOne = Children.toArray(rowOne)
  const childrenTwo = Children.toArray(rowTwo)

  return (
    <>
      <div className="layout-mb-xs">
        <div className="layout-grid layout-gap-xs md:layout-grid-cols-24 lg:layout-grid-cols-17">
          {Children.map(childrenOne, child => {
            if (isValidElement(child)) {
              const blocks = Children.toArray(child.props.children)

              if (blocks.length === 2) {
                return (
                  <>
                    <div className="md:layout-col-span-16 lg:layout-col-span-12">{blocks[0]}</div>
                    <div className="md:layout-col-span-8 lg:layout-col-span-5">{blocks[1]}</div>
                  </>
                )
              }
            }

            return null
          })}
        </div>
      </div>
      <div>
        <div className="layout-grid layout-gap-xs md:layout-grid-cols-24 lg:layout-grid-cols-17">
          {Children.map(childrenTwo, child => {
            if (isValidElement(child)) {
              const blocks = Children.toArray(child.props.children)

              if (blocks.length === 3) {
                return (
                  <>
                    <div className="md:layout-col-span-8 lg:layout-col-span-6">{blocks[0]}</div>
                    <div className="md:layout-col-span-8 lg:layout-col-span-6">{blocks[1]}</div>
                    <div className="md:layout-col-span-8 lg:layout-col-span-5">{blocks[2]}</div>
                  </>
                )
              }
            }

            return null
          })}
        </div>
      </div>
    </>
  )
}
