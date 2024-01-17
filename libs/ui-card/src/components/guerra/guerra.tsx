import { Card } from '../card'
import React, { Children, isValidElement } from 'react'
import { CardTitleProps } from '../card/card-title/card-title'

export type GuerraProps = {
  children: React.ReactNode
}

export function Guerra({ children }: GuerraProps) {
  return <Card className="card-relative card-@container">{children}</Card>
}

Guerra.Figure = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card.Figure
      className="card-w-full max-md:card-rounded-none [&>img]:card-w-full md:card-from-0% md:card-to-70% lg:card-from-0% lg:card-to-90%"
      format="landscape"
      shadow
    >
      {children}
    </Card.Figure>
  )
}

Guerra.Overlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full card-bg-neutral-low-600 md:card-bg-transparent md:card-absolute card-bottom-0 card-p-xxxs">
      {children}
    </div>
  )
}

Guerra.Title = ({ children, ...cardTitleProps }: CardTitleProps) => {
  return (
    <Card.Title
      className="card-text-md @[1000px]:card-text-xxl"
      color="high"
      fontStyle="none"
      {...cardTitleProps}
    >
      {children}
    </Card.Title>
  )
}

Guerra.Bullets = ({ children }: { children: React.ReactNode }) => {
  const bullets = Children.toArray(children)

  return (
    <div className="card-grid card-grid-cols-2 card-gap-xxxs card-mt-xxxs">
      {Children.map(bullets, child => {
        if (isValidElement(child)) {
          const blocks = Children.toArray(child.props.children)

          return blocks.map(block => block)
        }

        return null
      })}
    </div>
  )
}
