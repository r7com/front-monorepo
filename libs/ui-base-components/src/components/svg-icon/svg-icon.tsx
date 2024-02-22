import { SvgIcons } from './svg-icon.types'
import { variants, SvgIconVariants } from './svg-icon.variants'

export type SvgIconProps = {
  iconName: SvgIcons
  size?: 'default' | 'medium' | 'small'
  title?: string
  className?: string
} & SvgIconVariants &
  React.SVGProps<SVGSVGElement>

export function SvgIcon({
  iconName,
  size = 'default',
  color = 'original',
  className = '',
  title = '',
  ...rest
}: SvgIconProps) {
  const sizesVariant = {
    default: { width: 32, height: 32 },
    medium: { width: 24, height: 24 },
    small: { width: 16, height: 16 },
  }[size]

  return (
    <svg
      width={sizesVariant.width}
      height={sizesVariant.height}
      aria-hidden={!title ? 'true' : undefined}
      className={variants({ color, className })}
      {...rest}
    >
      {title && <title>{title}</title>}
      <use href={`#${iconName}`} />
    </svg>
  )
}
