export type ButtonProps<C extends React.ElementType> = {
  as?: C
  className?: string
  size?: 'default' | 'medium' | 'small'
  color?: 'primary' | 'secondary' | 'tertiary'
  borders?: boolean
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<C>

export function Button<C extends React.ElementType = 'button'>({
  as,
  className = '',
  size = 'default',
  color = 'primary',
  borders = true,
  children,
  ...rest
}: ButtonProps<C>) {
  /**
   * Todo: Variações (cor, formato, tamanhos)
   * Todo: Testes
   * Todo: Storybook
   */

  const DynamicTag = as || 'button'

  const sizesVariant = {
    default: 'size-default ',
    medium: 'size-medium',
    small: 'size-small',
  }[size]

  const colorsVariant = {
    primary: 'color-primary',
    secondary: 'color-secondary',
    tertiary: 'color-tertiary',
  }[color]

  const borderVariant = ''

  const styles = Object.values({
    className,
    sizesVariant,
    colorsVariant,
    borderVariant: borders ? borderVariant : '',
  }).join(' ')

  return (
    <DynamicTag className={styles.trim()} {...rest}>
      {children}
    </DynamicTag>
  )
}
