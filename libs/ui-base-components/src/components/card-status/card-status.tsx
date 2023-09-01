import { SvgIcon } from '../svg-icon'
import { CardStatusVariants, variants } from './card-status.variants'

export type CardStatusProps = {
  text: string
} & CardStatusVariants

export function CardStatus({ text, variant = 'info' }: CardStatusProps) {
  const { iconVariant, textVariant } = variants({ variant })

  return (
    <div data-testid="card-status" className="flex items-center p-nano">
      <SvgIcon iconName={variant} className={iconVariant()} />
      trigger card
      <p className={textVariant()}>{text}</p>
    </div>
  )
}
