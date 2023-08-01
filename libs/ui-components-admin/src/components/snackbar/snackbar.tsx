import { Button } from '../button'
import { SvgIcon } from '../svg-icon'

export type SnackbarProps = {
  message: string
  position?: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'
  type?: 'default' | 'alert' | 'warning' | 'success'
  onDismiss?: () => void
}

export function Snackbar({
  message,
  position = 'bottom-left',
  type = 'default',
  onDismiss,
}: SnackbarProps) {
  const positionsVariant = {
    'top-right': 'sm:top-xxs sm:right-xxs sm:left-auto left-nano right-nano top-nano',
    'bottom-right': 'sm:bottom-xxs sm:right-xxs sm:left-auto left-nano right-nano bottom-nano',
    'top-left': 'sm:top-xxs sm:left-xxs sm:right-auto left-nano right-nano top-nano',
    'bottom-left': 'sm:bottom-xxs sm:left-xxs sm:right-auto left-nano right-nano bottom-nano',
  }[position]

  const typeVariant = {
    default: { color: 'bg-[#1b1b1b]' },
    alert: { color: 'bg-feedback-helper-500', icon: 'snackbar-alert' },
    warning: { color: 'bg-feedback-warning-500', icon: 'snackbar-warning' },
    success: { color: 'bg-feedback-success-500', icon: 'snackbar-success' },
  }[type]

  return (
    <div
      className={`fixed flex justify-start items-center z-50 cursor-pointer sm:min-w-[388px] sm:min-h-[56px] ${positionsVariant}`.trim()}
      role="presentation"
      data-testid="snackbar"
    >
      <div
        className={`flex w-full h-full py-xxxs px-xxs gap-nano rounded-md ${typeVariant.color}`.trim()}
        role="alert"
      >
        {typeVariant?.icon && (
          <div className="flex items-center">
            <SvgIcon iconName={typeVariant.icon} svgProp={{ width: 20, height: 20 }} />
          </div>
        )}
        <span className="text-[#f5f6fa] text-xxxs leading-6 font-semibold items-center">
          {message}
        </span>
        <div className="ml-auto flex items-center">
          <Button size="content" color="transparent" onClick={onDismiss}>
            <SvgIcon iconName="snackbar-close" size="medium" />
          </Button>
        </div>
      </div>
    </div>
  )
}
