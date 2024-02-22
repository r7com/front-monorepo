import { ReactNode } from 'react'
import { Grid } from '../grid'
import { Sidebar } from './latest-news-sidebar'

type LatestNewsProps = {
  renderMain: ReactNode
  renderSidebar: ReactNode
}

export function LatestNews({ renderMain, renderSidebar }: LatestNewsProps) {
  return (
    <Grid>
      <div className="md:layout-col-span-24 lg:layout-col-span-17 layout-order-2 lg:layout-order-1">
        {renderMain}
      </div>
      <div className="md:layout-col-span-24 lg:layout-col-span-7 layout-order-1 lg:layout-order-2">
        {renderSidebar}
      </div>
    </Grid>
  )
}

LatestNews.Sidebar = Sidebar
