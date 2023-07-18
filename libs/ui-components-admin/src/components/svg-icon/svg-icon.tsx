import { useDynamicSvgImport } from '../../hooks/use-dynamic-svg-import'

export type IconProps = {
  iconName: string
  size?: 'default' | 'medium' | 'small'
  svgProp?: React.SVGProps<SVGAElement>
}

export function SvgIcon({ iconName, size = 'default', svgProp }: IconProps) {
  /**
   * Todo: Variações de formatos
   * Todo: Testes
   * Todo: Storybook
   */

  const { loading, error, SvgIconEl } = useDynamicSvgImport(iconName)

  const sizesVariant = {
    small: '',
    medium: '',
    default: '',
  }[size]

  return (
    <>
      {loading && <div>...</div>} {/** componente loading */}
      {error && <div>Erro ao carregar icone</div>} {/** componente error */}
      {SvgIconEl && (
        <SvgIconEl viewBox="0 0 50 50" className={`${sizesVariant}`.trim()} {...svgProp} />
      )}
    </>
  )
}
