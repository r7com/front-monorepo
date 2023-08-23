import { useDynamicSvgImport } from '../../hooks/use-dynamic-svg-import'
import { SvgIcons } from './svg-icon.types'
import { variants, SvgIconVariants } from './variants'

export type SvgIconProps = {
  iconName: SvgIcons
  size?: 'default' | 'medium' | 'small'
  title?: string
  className?: string
} & SvgIconVariants &
  React.SVGProps<SVGAElement>

export function SvgIcon({
  iconName,
  size = 'default',
  color = 'original',
  className = '',
  title = '',
  ...rest
}: SvgIconProps) {
  const { loading, error, SvgIconEl } = useDynamicSvgImport(iconName)

  const sizesVariant = {
    default: { width: 32, height: 32 },
    medium: { width: 24, height: 24 },
    small: { width: 16, height: 16 },
  }[size]

  if (!SvgIconEl || error) return null

  if (loading) {
    /** componente loading */
    return <div aria-hidden="true">...</div>
  }

  return (
    <SvgIconEl
      data-testid="svg-icon"
      width={sizesVariant.width}
      height={sizesVariant.height}
      title={title}
      className={variants({ color, className })}
      {...rest}
    />
  )
}
