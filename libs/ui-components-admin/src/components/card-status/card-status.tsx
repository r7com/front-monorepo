import { SvgIcon } from '../svg-icon'
import { SvgIcons } from '../svg-icon/svg-icon.types'
import { CardStatusVariants, variants } from './card-status.variants'

export type CardStatusProps = {
  text: string
} & CardStatusVariants

export function CardStatus({ text, variant = 'info' }: CardStatusProps) {
  const { iconVariant, iconColorVariant, textVariant } = variants({ variant })

  return (
    <div className="flex items-center p-nano">
      <SvgIcon iconName={iconVariant as unknown as SvgIcons} className={iconColorVariant()} />
      <p className={textVariant()}>{text}</p>
    </div>
  )
}
