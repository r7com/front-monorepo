import { useEffect } from 'react'
import { SvgIcon, SvgIcons } from '../svg-icon'
import { variants, SnackbarVariants } from './snackbar.variants'

export type SnackbarProps = {
  message: string
  action?: React.ReactNode
  dismissTimeout?: number
  onDismiss?(): void
} & SnackbarVariants

export function Snackbar({
  message,
  action = null,
  type = 'informative',
  open = false,
  dismissTimeout = 4000,
  onDismiss,
}: SnackbarProps) {
  const { root, iconContainer } = variants({ open, type })

  useEffect(() => {
    if (onDismiss) {
      const timeout = setTimeout(onDismiss, dismissTimeout)

      return () => clearTimeout(timeout)
    }
  }, [dismissTimeout, onDismiss])

  const iconVariant: Record<typeof type, SvgIcons> = {
    informative: 'circle-info',
    positive: 'circle-check',
    alert: 'hand-regular',
    error: 'circle-error',
  }

  const role = type === 'error' ? 'alert' : 'status'

  return (
    <div className={root()} role={role}>
      <div className={iconContainer()}>
        <SvgIcon iconName={iconVariant[type]} size="small" />
      </div>
      <div className="flex justify-center flex-col sm:flex-row w-full mx-xxxs">
        <span className="w-full flex items-center mr-nano !text-light-high-600 text-xxxs leading-[22px] font-semibold">
          {message}
        </span>
        <div className="flex items-center">{action}</div>
      </div>
    </div>
  )
}
