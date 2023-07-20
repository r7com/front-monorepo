import { useDynamicSvgImport } from '../../hooks/use-dynamic-svg-import'

export type IconProps = {
  iconName: string
  size?: 'default' | 'medium' | 'small'
  className?: string
  svgProp?: React.SVGProps<SVGAElement>
}

export function SvgIcon({ iconName, size = 'default', className = '', svgProp }: IconProps) {
  const { loading, error, SvgIconEl } = useDynamicSvgImport(iconName)

  const sizesVariant = {
    default: { width: 32, height: 32 },
    medium: { width: 24, height: 24 },
    small: { width: 16, height: 16 },
  }[size]

  return (
    <>
      {loading && <div>...</div>} {/** componente loading */}
      {error && <div>Erro ao carregar icone</div>} {/** componente error */}
      {SvgIconEl && (
        <SvgIconEl
          width={sizesVariant.width}
          height={sizesVariant.height}
          {...svgProp}
          className={`${className} pointer-events-none ${svgProp?.className ?? ''}`.trim()}
          viewBox="0 0 50 50"
        />
      )}
    </>
  )
}
