import { useEffect } from 'react'
import { SvgIcon } from '../svg-icon'
import { SvgIcons } from '../svg-icon/svg-icon.types'
import { variants, SnackbarVariants } from './snackbar.variants'

export type SnackbarProps = {
  message: string
  action?: React.ReactNode
  dismissTimeout?: number
  onExit?(): void
} & SnackbarVariants

export function Snackbar({
  message,
  action = null,
  type = 'informative',
  open = true,
  dismissTimeout = 4000,
  onExit,
}: SnackbarProps) {
  const { root, iconContainer } = variants({ open, type })

  useEffect(() => {
    if (onExit) {
      const timeout = setTimeout(onExit, dismissTimeout)

      return () => clearTimeout(timeout)
    }
  }, [dismissTimeout, onExit])

  const iconVariant = {
    informative: 'circle-info' as SvgIcons,
    positive: 'circle-check' as SvgIcons,
    alert: 'hand-regular' as SvgIcons,
    error: 'circle-error' as SvgIcons,
  }[type]

  return (
    <div className={root()} role="presentation" data-testid="snackbar">
      <div className={iconContainer()}>
        <SvgIcon iconName={iconVariant} size="small" />
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
