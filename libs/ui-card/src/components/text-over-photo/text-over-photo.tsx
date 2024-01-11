import { Card } from '../card'
import { TextOverPhotoVariants, variants } from './text-over-photo.variants'
import { ConditionalLink } from '@r7/ui-base-components'

export type TextOverPhotoProps = {
  renderImage: React.ReactNode
  renderHat: React.ReactNode
  renderTitle: ({ CardTitle }: { CardTitle: typeof Card.Title }) => JSX.Element
  url?: React.AnchorHTMLAttributes<HTMLAnchorElement>
  urlFigure?: React.AnchorHTMLAttributes<HTMLAnchorElement>
  urlHat?: React.AnchorHTMLAttributes<HTMLAnchorElement>
  urlTitle?: React.AnchorHTMLAttributes<HTMLAnchorElement>
} & TextOverPhotoVariants

export function TextOverPhoto({
  renderImage,
  renderHat,
  layout = 'half',
  responsiveOn = 'md',
  size = 'full',
  url,
  urlFigure,
  urlHat,
  urlTitle,
  renderTitle,
}: TextOverPhotoProps) {
  const { figureSlot, cardSlot } = variants({ layout, size, responsiveOn })

  return (
    <Card className={cardSlot()}>
      <ConditionalLink {...url}>
        <Card.Figure className={figureSlot()} format="custom" shadow shadowFrom="0%">
          <ConditionalLink {...urlFigure}>{renderImage}</ConditionalLink>
        </Card.Figure>

        <div className="w-full card-absolute card-bottom-0 card-p-xxxs">
          <ConditionalLink {...urlHat}>{renderHat}</ConditionalLink>

          {/** Gives the ability to get the `Card.Title` component already styled  on the Arc */}
          {renderTitle({
            CardTitle: ({ children, ...props }) => (
              <Card.Title
                color="high"
                fontStyle="none"
                className="card-text-sm md:card-text-xxxs md:@[300px]:card-text-sm md:@[600px]:card-text-md"
                {...props}
              >
                <ConditionalLink {...urlTitle}>{children}</ConditionalLink>
              </Card.Title>
            ),
          })}
        </div>
      </ConditionalLink>
    </Card>
  )
}
