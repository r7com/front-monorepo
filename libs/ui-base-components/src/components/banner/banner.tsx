import { variants } from './banner-variants'

export type BannerProps = {
  children?: React.ReactNode
  /** Mostra ou não o banner */
  isVisible?: boolean
}

export function Banner({ children, isVisible = true }: BannerProps) {
  return (
    isVisible && (
      <div data-testid="banner-root" aria-hidden={!isVisible} className={variants()}>
        {children}
      </div>
    )
  )
}
