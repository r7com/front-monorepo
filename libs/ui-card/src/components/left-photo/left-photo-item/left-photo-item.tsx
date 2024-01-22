import { Card } from '../../card'

export const LeftPhotoItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="card-@container card-flex card-flex-col card-border-b-hairline card-border-solid card-border-b-light-high-600 md:border-none md:card-border-b-transparent">
      {children}
    </Card>
  )
}
