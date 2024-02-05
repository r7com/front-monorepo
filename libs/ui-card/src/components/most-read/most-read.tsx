import { MostReadDescription } from './most-read-description'
import { MostReadFigure } from './most-read-figure'
import { MostReadItem } from './most-read-item'
import { MostReadList } from './most-read-list'
import { MostReadOrder } from './most-read-order'
import { MostReadTitle } from './most-read-title'

export type MostReadProps = {
  children: React.ReactNode
}

export function MostRead({ children }: MostReadProps) {
  return (
    <section className="card-bg-neutral-high-500 card-p-xxxs rounded-md card-font-primary">
      {children}
    </section>
  )
}

MostRead.Item = MostReadItem
MostRead.List = MostReadList
MostRead.Description = MostReadDescription
MostRead.Title = MostReadTitle
MostRead.Figure = MostReadFigure
MostRead.Order = MostReadOrder
