import { SvgIcon } from '../svg-icon'
import { CardStatusVariants, variants } from './card-status.variants'
import { SvgIcons } from '../svg-icon/svg-icon.types'

export type CardStatusProps = {
  text: string
} & CardStatusVariants

export function CardStatus({ text, variant = 'info' }: CardStatusProps) {
  const { iconColorVariant, textVariant } = variants({ variant })

  const statusIconVariant = {
    success: 'circle-check',
    error: 'circle-error',
    helper: 'circle-info',
    info: 'check',
    waiting: 'waiting',
  }[variant]

  return (
    <div className="flex items-center p-nano">
      <SvgIcon iconName={statusIconVariant as SvgIcons} className={iconColorVariant()} />
      <p className={textVariant()}>{text}</p>
    </div>
  )
}
