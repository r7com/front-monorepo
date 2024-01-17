import { Card } from '../../card'
import { TitleVariants, variants } from './left-photo-title.variants'

export const LeftPhotoTitle = ({
  children,
  fontSize = 'medium',
}: { children: React.ReactNode } & TitleVariants) => {
  return (
    <Card.Title className={variants({ fontSize })} fontStyle="none">
      {children}
    </Card.Title>
  )
}
