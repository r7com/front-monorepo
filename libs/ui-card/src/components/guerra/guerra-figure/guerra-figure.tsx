import { Card } from '../../card'

export const GuerraFigure = ({ children }: { children: React.ReactNode }) => {
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
