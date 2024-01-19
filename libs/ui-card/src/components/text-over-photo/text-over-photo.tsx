import { Card } from '../card'
import { CardFigureProps } from '../card/card-figure/card-figure'
import { CardTitleProps } from '../card/card-title/card-title'
import { TextOverPhotoVariants, variants } from './text-over-photo.variants'

export type TextOverPhotoProps = {
  children: React.ReactNode
} & TextOverPhotoVariants

export function TextOverPhoto({ children, size = 'full' }: TextOverPhotoProps) {
  const { cardSlot } = variants({ size })

  return <Card className={cardSlot()}>{children}</Card>
}

TextOverPhoto.Figure = ({
  children,
  layout = 'half',
  size = 'full',
  responsiveAfter = 'md',
  ...props
}: TextOverPhotoProps & CardFigureProps) => {
  const { figureSlot } = variants({ layout, size, responsiveAfter })

  return (
    <Card.Figure className={figureSlot()} format="custom" shadow shadowFrom="0%" {...props}>
      {children}
    </Card.Figure>
  )
}

TextOverPhoto.TextWrapper = ({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="w-full card-absolute card-bottom-0 card-p-xxxs" {...props}>
      {children}
    </div>
  )
}

TextOverPhoto.Title = ({ children, ...props }: { children: React.ReactNode } & CardTitleProps) => {
  return (
    <Card.Title
      className="card-text-sm md:card-text-xxxs md:@[300px]:card-text-sm md:@[600px]:card-text-md"
      color="high"
      fontStyle="none"
      {...props}
    >
      {children}
    </Card.Title>
  )
}
