import { SvgIcon, SvgIcons } from '@r7/ui-base-components'
import { CardLabelVariants, variants } from './card-label-variants'

export type CardLabelProps = {
  sponsoredByUrl?: string
  sponsoredByImage?: string
  sponsoredByImageDesc?: string
  sponsoredByTitle?: string
} & CardLabelVariants

export function CardLabel({
  type = 'live',
  sponsoredByUrl,
  sponsoredByImage,
  sponsoredByImageDesc,
  sponsoredByTitle,
}: CardLabelProps) {
  const { iconStyle, labelStyle } = variants({ type })

  if (type === 'sponsored-by') {
    return (
      <a href={sponsoredByUrl} title={sponsoredByTitle}>
        <span className={labelStyle()}>
          <span className="card-mr-nano">Oferecido por</span>
          <img
            className="card-w-xxs card-h-auto"
            src={sponsoredByImage}
            alt={sponsoredByImageDesc}
          />
        </span>
      </a>
    )
  }

  const iconName = {
    blog: 'quotation',
    studio: 'r7-estudio',
    voting: 'thunder',
    podcast: 'phone',
    aclr: 'acrl-r',
    live: null,
  }[type] as SvgIcons | null

  return (
    <span data-testid="label" className={labelStyle()}>
      {iconName && <SvgIcon className={iconStyle()} size="small" iconName={iconName} />}
    </span>
  )
}
