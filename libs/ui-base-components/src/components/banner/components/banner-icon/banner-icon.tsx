import { variants, type BannerIconVariants } from './banner-icon-variants'

export type BannerIconProps = {
  type: BannerIconVariants['type']
  children: React.ReactNode
}

export function BannerIcon({ children, type = 'informative' }: BannerIconProps) {
  return <figure className={variants({ type })}>{children}</figure>
}
