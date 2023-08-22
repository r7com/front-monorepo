import { useDynamicSvgImport } from '../../hooks/use-dynamic-svg-import'
import { SvgIcons } from './svg-icon.types'

export type SvgIconProps = {
  iconName: SvgIcons
  size?: 'default' | 'medium' | 'small'
  color?: 'primary' | 'secondary' | 'tertiary' | 'original'
  title?: string
  className?: string
} & React.SVGProps<SVGAElement>

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

  const colorsVariant = {
    primary: `
      bg-brand-primary-500 hover:bg-brand-primary-600 active:bg-brand-primary-400
      border-brand-primary-500 hover:border-brand-primary-600 active:border-brand-primary-600
    `,
    secondary: `
      bg-highlight-500 hover:bg-highlight-600 active:bg-highlight-400
      border-highlight-500 hover:border-highlight-600 active:border-highlight-600
    `,
    tertiary: `
      border-brand-primary-500 hover:border-brand-primary-600 active:border-light-low-500
      fill-brand-primary-500 hover:fill-brand-primary-600 active:fill-light-low-500
    `,
    original: `
      border-transparent
      hover:grayscale-[.2] active:grayscale-[.4]
    `,
  }[color]

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
      className={`transition-all rounded-sm border-hairline ${className} ${colorsVariant}`.trim()}
      {...rest}
    />
  )
}
