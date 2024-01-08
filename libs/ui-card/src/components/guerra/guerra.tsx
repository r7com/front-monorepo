import { Card } from '../card'
import React, { Children, isValidElement } from 'react'

export type GuerraProps = {
  renderImage: React.ReactNode
  hat: string
  title: string
  renderBullets: React.ReactNode
}

export function Guerra({ renderImage, hat, title, renderBullets }: GuerraProps) {
  const bullets = Children.toArray(renderBullets)

  return (
    <Card className="card-relative">
      <Card.Figure
        className="card-w-full max-md:card-rounded-none [&>img]:card-w-full md:card-from-0% md:card-to-70% lg:card-from-0% lg:card-to-90%"
        format="landscape"
        shadow
      >
        {renderImage}
      </Card.Figure>

      <div className="w-full card-bg-neutral-low-600 md:card-bg-transparent md:card-absolute card-bottom-0 card-p-xxxs">
        {hat && (
          <Card.HatWrapper type="warning">
            <Card.HatTitle color="high">{hat}</Card.HatTitle>
          </Card.HatWrapper>
        )}

        <Card.Title color="high">{title}</Card.Title>

        <div className="card-grid card-grid-cols-2 card-gap-xxxs card-mt-xxxs">
          {Children.map(bullets, child => {
            if (isValidElement(child)) {
              const blocks = Children.toArray(child.props.children)

              return (
                <>
                  {blocks.length > 0 && (
                    <div className="card-w-full card-flex card-flex-col card-gap-xxxs">
                      {blocks.slice(0, 4).map(block => block)}
                    </div>
                  )}

                  {blocks.length > 4 && (
                    <div className="card-w-full card-flex card-flex-col card-gap-xxxs">
                      {blocks.slice(4, 8).map(block => block)}
                    </div>
                  )}
                </>
              )
            }

            return null
          })}
        </div>
      </div>
    </Card>
  )
}
