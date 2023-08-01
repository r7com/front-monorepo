import { SvgIcon } from '../svg-icon'

export type CardStatusProps = {
  text: string
  variant: 'success' | 'error' | 'helper' | 'info'
}

export function CardStatus({ text, variant }: CardStatusProps) {
  const statusIconVariant = {
    success: 'fill-feedback-success-400',
    error: 'fill-feedback-warning-400',
    helper: 'fill-feedback-helper-400',
    info: 'fill-brand-primary-400',
  }[variant]

  const statusTextVariant = {
    success: 'text-feedback-success-400',
    error: 'text-feedback-warning-400',
    helper: 'text-feedback-helper-400',
    info: 'text-brand-primary-400',
  }[variant]

  const compiledClasses = [statusIconVariant, statusTextVariant].join(' ').trim()

  return (
    <div className="flex items-center p-nano">
      <SvgIcon
        iconName={variant}
        className={`${compiledClasses} w-xxxs h-xxxs min-w-max min-h-max m-nano`}
      />
      <p className={`text-xxxs ${compiledClasses}`}>{text}</p>
    </div>
  )
}
