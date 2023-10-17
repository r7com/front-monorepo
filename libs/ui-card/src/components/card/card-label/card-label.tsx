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
          <span className="mr-nano">Oferecido por</span>
          <img className="w-xxs h-auto" src={sponsoredByImage} alt={sponsoredByImageDesc} />
        </span>
      </a>
    )
  }

  let svgTemplate
  if (type !== 'live') {
    const iconName = {
      blog: 'quotation',
      studio: 'r7-estudio',
      voting: 'thunder',
      podcast: 'phone',
      aclr: 'acrl-r',
    }[type] as SvgIcons
    svgTemplate = <SvgIcon className={iconStyle()} size="small" iconName={iconName} />
  }

  return (
    <span data-testid="label" className={labelStyle()}>
      {svgTemplate && svgTemplate}
    </span>
  )
}
