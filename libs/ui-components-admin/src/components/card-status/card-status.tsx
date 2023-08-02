import { SvgIcon } from '../svg-icon'

export type CardStatusProps = {
  text: string
  variant?: 'success' | 'error' | 'helper' | 'info' | 'waiting'
}

export function CardStatus({ text, variant = 'info' }: CardStatusProps) {
  const statusIconVariant = {
    success: 'fill-feedback-success-400',
    error: 'fill-feedback-warning-400',
    helper: 'fill-feedback-helper-400',
    info: 'fill-brand-primary-400',
    waiting: 'fill-brand-primary-400',
  }[variant]

  const statusTextVariant = {
    success: 'text-feedback-success-400',
    error: 'text-feedback-warning-400',
    helper: 'text-feedback-helper-400',
    info: 'text-brand-primary-400',
    waiting: 'text-brand-primary-400',
  }[variant]

  return (
    <div className="flex items-center p-nano">
      <SvgIcon
        iconName={variant}
        className={`${statusIconVariant} w-xxxs h-xxxs min-w-max min-h-max m-nano`}
      />
      <p className={`text-xxxs ${statusTextVariant}`}>{text}</p>
    </div>
  )
}
