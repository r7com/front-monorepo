import { IconButton } from '../icon-button'
import { SvgIcon } from '../svg-icon'
import { variants } from './banner-variants'

export type BannerProps = {
  children?: React.ReactNode
  /** Mostra ou não o banner */
  isVisible: boolean
  /** Callback ao fechar */
  onClose?: (isVisible: boolean) => void
}

export function Banner({ children, isVisible, onClose }: BannerProps) {
  function handleClose() {
    if (onClose) {
      onClose(!isVisible)
    }
  }

  return (
    isVisible && (
      <div
        data-testid="banner-root"
        aria-hidden={!isVisible}
        className={variants({ onClose: !!onClose })}
      >
        {children}
        {onClose && (
          <div className="flex h-full justify-start">
            <IconButton
              aria-label="Fechar"
              className="absolute right-nano top-right-nano [&>svg]:fill-dark-low-400 dark:[&>svg]:fill-neutral-high-400"
              onClick={handleClose}
            >
              <SvgIcon iconName="close" size="small" />
            </IconButton>
          </div>
        )}
      </div>
    )
  )
}
