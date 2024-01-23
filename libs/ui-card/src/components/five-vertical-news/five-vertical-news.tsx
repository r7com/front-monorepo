import { ReactNode, Children } from 'react'
import { Typography } from '@r7/ui-base-components'
import {
  getVerticalNewsItem,
  VerticalNewsItemFigure,
  VerticalNewsItemTitle,
} from './five-vertical-news-item'
import { variants } from './five-vertical-news.variants'

export type FiveVerticalNewsProps = {
  children: ReactNode
}

export function FiveVerticalNews({ children }: FiveVerticalNewsProps) {
  const { wrapperSlot } = variants()
  return <div className={wrapperSlot()}>{children}</div>
}

FiveVerticalNews.Title = ({ children }: { children: ReactNode }) => {
  return (
    <Typography primaryTitle as="span">
      {children}
    </Typography>
  )
}

FiveVerticalNews.Cards = ({ children }: { children: ReactNode }) => {
  const blocks = Children.toArray(children).slice(0, 5)
  const { newsWrapperSlot } = variants()

  return <div className={newsWrapperSlot()}>{blocks}</div>
}

FiveVerticalNews.PrimaryItem = getVerticalNewsItem({ isMain: true })
FiveVerticalNews.SecondaryItem = getVerticalNewsItem({ isMain: false })
FiveVerticalNews.ItemFigure = VerticalNewsItemFigure
FiveVerticalNews.ItemTitle = VerticalNewsItemTitle
