import { Card } from '../card'
import { TextOverPhotoVariants, variants } from './text-over-photo.variants'

export type TextOverPhotoProps = {
  renderImage: React.ReactNode
  renderHat: React.ReactNode
  title: string
} & TextOverPhotoVariants

export function TextOverPhoto({
  renderImage,
  renderHat,
  title,
  type = 'half',
}: TextOverPhotoProps) {
  const { figure } = variants({ type })

  return (
    <Card className="card-@container card-relative">
      <Card.Figure className={figure()} format="custom">
        {renderImage}
      </Card.Figure>

      <div className="w-full card-absolute card-bottom-0 card-p-xxxs">
        {renderHat}

        <Card.Title
          color="high"
          fontStyle="none"
          className="card-text-sm md:card-text-xxxs md:@[300px]:card-text-sm md:@[600px]:card-text-md"
        >
          {title}
        </Card.Title>
      </div>
    </Card>
  )
}
