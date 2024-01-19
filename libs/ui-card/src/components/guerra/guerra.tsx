import { Card } from '../card'
import React from 'react'
import { GuerraBullets } from './guerra-bullets'
import { GuerraTitle } from './guerra-title'
import { GuerraOverlay } from './guerra-overlay'
import { GuerraFigure } from './guerra-figure'

export type GuerraProps = {
  children: React.ReactNode
}

export function Guerra({ children }: GuerraProps) {
  return <Card className="card-relative card-@container">{children}</Card>
}

Guerra.Figure = GuerraFigure
Guerra.Overlay = GuerraOverlay
Guerra.Title = GuerraTitle
Guerra.Bullets = GuerraBullets
