import { SvgIcon } from '../svg-icon'
import { SvgIcons } from '../svg-icon/svg-icon.types'

export type CardStatusProps = {
  text: string
  variant?: 'success' | 'error' | 'helper' | 'info' | 'waiting'
}

export function CardStatus({ text, variant = 'info' }: CardStatusProps) {
  const statusIconColor = {
    success: 'fill-feedback-success-400',
    error: 'fill-feedback-warning-400',
    helper: 'fill-feedback-helper-400',
    info: 'fill-brand-primary-400',
    waiting: 'fill-brand-primary-400',
  }[variant]

  const statusTextColor = {
    success: 'text-feedback-success-400',
    error: 'text-feedback-warning-400',
    helper: 'text-feedback-helper-400',
    info: 'text-brand-primary-400',
    waiting: 'text-brand-primary-400',
  }[variant]

  const statusIconVariant = {
    success: 'circle-check',
    error: 'circle-error',
    helper: 'circle-info',
    info: 'check',
    waiting: 'waiting',
  }[variant]

  return (
    <div className="flex items-center p-nano">
      <SvgIcon
        iconName={statusIconVariant as SvgIcons}
        className={`${statusIconColor} w-xxxs h-xxxs min-w-max min-h-max m-nano`}
      />
      <p className={`text-xxxs ${statusTextColor}`}>{text}</p>
    </div>
  )
}
