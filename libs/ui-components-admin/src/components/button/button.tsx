export type ButtonProps<C extends React.ElementType> = {
  as?: C
  className?: string
  size?: 'small' | 'mid' | 'large'
  color?: 'primary' | 'secondary' | 'tertiary'
  shape?: 'circle' | 'square'
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<C>

export function Button<C extends React.ElementType = 'button'>({
  as,
  className = '',
  size = 'mid',
  color = 'primary',
  shape = 'square',
  children,
  ...rest
}: ButtonProps<C>) {
  /**
   * Todo: Variações (cor, formato, tamanhos)
   * Todo: Testes
   * Todo: Storybook
   */

  const DynamicTag = as || 'button'

  const sizes = {
    small: '',
    mid: '',
    large: '',
  }

  const colors = {
    primary: '',
    secondary: '',
    tertiary: '',
  }

  const shapes = {
    circle: '',
    square: '',
  }

  return (
    <DynamicTag
      className={`${className} ${sizes[size]} ${colors[color]} ${shapes[shape]}`.trim()}
      {...rest}
    >
      {children}
    </DynamicTag>
  )
}
