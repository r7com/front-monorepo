import { Card } from '../../card'
import { CardFigureProps } from '../../card/card-figure/card-figure'
import { CardTitleProps } from '../../card/card-title/card-title'
import { variants, FiveVerticalNewsItemVariants } from './five-vertical-news-item.variants'
import { useFiveVerticalNewsItem } from './utils/hook'
import { FiveVerticalNewsItemProvider } from './utils/provider'

type FiveVerticalNewsItemProps = FiveVerticalNewsItemVariants

export function getVerticalNewsItem({ isMain = false }: FiveVerticalNewsItemProps) {
  return ({ children }: { children: React.ReactNode }) => {
    const { articleSlot } = variants({ isMain })

    return (
      <FiveVerticalNewsItemProvider isMain={isMain}>
        <Card className={articleSlot()}>{children}</Card>
      </FiveVerticalNewsItemProvider>
    )
  }
}

export function VerticalNewsItemFigure({
  children,
  ...figureProps
}: { children: React.ReactNode } & CardFigureProps) {
  const { isMain } = useFiveVerticalNewsItem()

  const { imageSlot } = variants({ isMain })

  return (
    <Card.Figure format="landscape" shadow className={imageSlot()} {...figureProps}>
      {children}
    </Card.Figure>
  )
}

export function VerticalNewsItemTitle({
  children,
  ...titleProps
}: { children: React.ReactNode } & CardTitleProps) {
  const { isMain } = useFiveVerticalNewsItem()

  const { titleSlot } = variants({ isMain })

  return (
    <Card.Title
      fontStyle="none"
      color="low"
      as={isMain ? 'h5' : 'h6'}
      className={titleSlot()}
      {...titleProps}
    >
      {children}
    </Card.Title>
  )
}
