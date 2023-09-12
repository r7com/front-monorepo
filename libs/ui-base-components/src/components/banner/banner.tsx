import { useState, type ReactNode } from 'react'
import { IconButton } from '../icon-button'
import { SvgIcon } from '../svg-icon'

export type BannerProps = {
  children?: ReactNode
  /** Repassa a função de fechar o banner */
  renderBanner?: ({ close }: { close: () => void }) => ReactNode
  /** Callback ao fechar */
  onClose?: () => void
}

export function Banner({ children, renderBanner, onClose }: BannerProps) {
  const [isOpen, setIsOpen] = useState(true)

  function close() {
    setIsOpen(false)
    onClose && onClose()
  }

  return (
    isOpen && (
      <div className="relative bg-dark-low-400 text-light-high-400 rounded-lg p-nano flex gap-xxs flex-wrap">
        {children}
        {renderBanner && renderBanner({ close })}
        {children && (
          <IconButton className="absolute right-nano top-right-nano" onClick={close}>
            <SvgIcon iconName="close" size="small" />
          </IconButton>
        )}
      </div>
    )
  )
}
