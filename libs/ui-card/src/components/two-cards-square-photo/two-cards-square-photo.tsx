import { Card } from '../card'

export type TwoCardsSquarePhotoItemProps = {
  renderImage: React.ReactNode
  hat: string
  title: string
}

export function TwoCardsSquarePhoto({ children }: { children: React.ReactNode }) {
  return <div className="card-grid card-grid-rows-2">{children}</div>
}

TwoCardsSquarePhoto.Item = ({ renderImage, hat, title }: TwoCardsSquarePhotoItemProps) => {
  return (
    <Card className="card-@container card-flex card-pb-xxxs card-mb-xxxs card-border-b-hairline  card-border-solid card-border-b-light-high-600 md:border-none md:card-border-b-transparent">
      <Card.Figure className="card-mr-xxxs card-flex-shrink-0 card-h-fit card-mb-xxxs">
        {renderImage}
      </Card.Figure>

      <div>
        <Card.HatWrapper>
          <Card.HatTitle>{hat}</Card.HatTitle>
        </Card.HatWrapper>

        <Card.Title
          className="card-text-sm md:card-text-xxs md:@xs:card-text-xs card-leading-xs"
          fontStyle="none"
        >
          {title}
        </Card.Title>
      </div>
    </Card>
  )
}
