import { Children, ReactNode, isValidElement } from 'react'
import { Grid } from '../grid'

type SpecialOneProps = {
  renderMain: ReactNode
  renderSidebar: ReactNode
}

type MainProps = {
  rowOne: ReactNode
  rowTwo: ReactNode
}

type SidebarProps = {
  children: ReactNode
}

function Main({ rowOne, rowTwo }: MainProps) {
  const childrenOne = Children.toArray(rowOne)
  const childrenTwo = Children.toArray(rowTwo)

  return (
    <>
      <div className="layout-mb-xs">
        <div className="layout-grid layout-gap-xs lg:layout-grid-cols-17">
          {Children.map(childrenOne, child => {
            if (isValidElement(child)) {
              const blocks = Children.toArray(child.props.children)

              if (blocks.length === 2) {
                return (
                  <>
                    <div className="lg:layout-col-span-12">{blocks[0]}</div>
                    <div className="lg:layout-col-span-5">{blocks[1]}</div>
                  </>
                )
              }
            }

            return null
          })}
        </div>
      </div>
      <div>
        <div className="layout-grid layout-gap-xs lg:layout-grid-cols-17">
          {Children.map(childrenTwo, child => {
            if (isValidElement(child)) {
              const blocks = Children.toArray(child.props.children)

              if (blocks.length === 3) {
                return (
                  <>
                    <div className="lg:layout-col-span-6">{blocks[0]}</div>
                    <div className="lg:layout-col-span-6">{blocks[1]}</div>
                    <div className="lg:layout-col-span-5">{blocks[2]}</div>
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

function Sidebar({ children }: SidebarProps) {
  return <div>{children}</div>
}

export function SpecialOne({ renderMain, renderSidebar }: SpecialOneProps) {
  return (
    <Grid>
      <div className="lg:layout-col-span-17">{renderMain}</div>
      <div className="lg:layout-col-span-7">{renderSidebar}</div>
    </Grid>
  )
}

SpecialOne.Main = Main
SpecialOne.Sidebar = Sidebar
