import { Card } from '../card'

export type ProportionalPhotoProps = {
  renderImage: React.ReactNode
  hat: string
  title: string
}

export function ProportionalPhoto({ renderImage, hat, title }: ProportionalPhotoProps) {
  return (
    <Card className="card-@container card-relative">
      <Card.Figure className="card-mb-xxxs" format="landscape">
        {renderImage}
      </Card.Figure>

      <div>
        <Card.HatWrapper>
          <Card.HatTitle>{hat}</Card.HatTitle>
        </Card.HatWrapper>

        <Card.Title
          className="card-text-xs card-leading-md md:card-text-xxxs md:card-leading-pill md:@[220px]:card-text-xxs md:@[350px]:card-text-xs md:@[350px]:card-leading-md"
          fontStyle="none"
        >
          {title}
        </Card.Title>
      </div>
    </Card>
  )
}
