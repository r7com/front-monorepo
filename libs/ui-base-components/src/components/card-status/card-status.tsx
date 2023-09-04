import { SvgIcon } from '../svg-icon'
import { CardStatusVariants, variants } from './card-status.variants'
import { SvgIcons } from '../svg-icon/svg-icon.types'

export type CardStatusProps = {
  text: string
} & CardStatusVariants

export function CardStatus({ text, variant = 'info' }: CardStatusProps) {
  const { iconColor, textColor } = variants({ variant })

  const statusIconVariant: Record<typeof variant, SvgIcons> = {
    success: 'circle-check',
    error: 'circle-error',
    helper: 'circle-info',
    info: 'check',
    waiting: 'waiting',
  }

  return (
    <div role="status" className="flex items-center p-nano">
      <SvgIcon iconName={statusIconVariant[variant]} className={iconColor()} />
      <p className={textColor()}>{text}</p>
    </div>
  )
}
