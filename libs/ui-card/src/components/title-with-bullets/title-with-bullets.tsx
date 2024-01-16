import { Children, isValidElement } from 'react'
import { Card } from '../card'

export type TitleWithBulletsProps = {
  hat: string
  title: string
  renderBullets?: React.ReactNode
}
export function TitleWithBullets({ hat, title, renderBullets }: TitleWithBulletsProps) {
  const bullets = Children.toArray(renderBullets)

  return (
    <Card>
      <Card.HatWrapper>
        <Card.HatTitle>{hat}</Card.HatTitle>
      </Card.HatWrapper>

      <Card.Title fontStyle="heading-level-1">{title}</Card.Title>

      {Children.map(bullets, child => {
        if (isValidElement(child)) {
          const blocks = Children.toArray(child.props.children)

          return (
            <div className="card-flex card-flex-col card-gap-xxxs">
              {blocks.length > 0 && (
                <div className="card-flex card-flex-col card-gap-xxxs md:card-flex-row md:card-flex-wrap md:[&>*]:card-flex-grow md:[&>*]:card-flex-shrink md:[&>*]:card-basis-0">
                  {blocks.slice(0, 2).map(block => block)}
                </div>
              )}

              {blocks.length > 2 && (
                <div className="card-flex card-flex-col card-gap-xxxs md:card-flex-row md:card-flex-wrap md:[&>*]:card-flex-grow md:[&>*]:card-flex-shrink md:[&>*]:card-basis-0">
                  {blocks.slice(2, 4).map(block => block)}
                </div>
              )}
            </div>
          )
        }

        return null
      })}
    </Card>
  )
}
