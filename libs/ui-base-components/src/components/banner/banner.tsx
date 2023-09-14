import { IconButton } from '../icon-button'
import { SvgIcon } from '../svg-icon'
import { variants } from './banner-variants'
import { type BannerNormalIconProps } from './components/banner-icon'
import { type SvgIcons } from '../svg-icon/svg-icon.types'

/** Temporariamente aqui  */
type CustomExtract<T, U extends T> = U

/** Temporário  */
export type MockBannerProps = {
  isVisible: BannerProps['isVisible']
  iconType: BannerNormalIconProps['type']
  customIconName: CustomExtract<SvgIcons, 'record' | 'chevron-right'>
  description: string
  imageSourceUrl: string
}

/** Temporário  */
export function MockBanner({ iconType = 'informative', isVisible = true }: MockBannerProps) {
  return <div></div>
}

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
      <div className={variants({ onClose: !!onClose })}>
        {children}
        {onClose && (
          <div className="flex h-full justify-start">
            <IconButton
              className="absolute right-nano top-right-nano [&>svg]:fill-neutral-high-400 dark:[&>svg]:fill-dark-low-400"
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
