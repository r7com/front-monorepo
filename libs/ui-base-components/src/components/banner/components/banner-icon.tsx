import { SvgIcon } from '../../svg-icon'
import { SvgIcons } from '../../svg-icon/svg-icon.types'
import { variants, type BannerIconVariants } from './banner-icon-variants'

export type BannerNormalIconProps = {
  type: Exclude<BannerIconVariants['type'], 'custom'>
  children?: React.ReactNode
}

export type BannerCustomIconProps = {
  type: 'custom'
  children: React.ReactNode
}

export type BannerIconProps = BannerNormalIconProps | BannerCustomIconProps

export function BannerIcon({ children, type = 'informative' }: BannerIconProps) {
  const iconVariant: Record<Exclude<typeof type, 'custom'>, SvgIcons> = {
    informative: 'bell',
    positive: 'archive',
    alert: 'circle-add',
    error: 'info',
  }

  return (
    <div className={variants({ type })}>
      {type === 'custom' ? children : <SvgIcon iconName={iconVariant[type]} />}
    </div>
  )
}
