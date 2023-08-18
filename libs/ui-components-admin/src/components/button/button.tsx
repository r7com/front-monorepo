export type ButtonProps<C extends React.ElementType> = {
  as?: C
  className?: string
  size?: 'large' | 'medium' | 'small'
  color?: 'primary' | 'secondary' | 'tertiary' | 'ghost'
  disabled?: boolean
  startIcon?: React.ReactNode | null
  endIcon?: React.ReactNode | null
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<C>

export function Button<C extends React.ElementType = 'button'>({
  as,
  className = '',
  size = 'medium',
  color = 'primary',
  disabled = false,
  startIcon = null,
  endIcon = null,
  children,
  ...rest
}: ButtonProps<C>) {
  const DynamicTag = as || 'button'

  const defaultVariant = `
    inline-flex
    items-center
    box-border
    cursor-pointer
    border-hairline
    rounded-md
    text-center
    leading-6
    font-medium
    transition-all
    ${disabled ? '!pointer-events-none !select-none' : ''}
  `

  const sizesVariant = {
    large: 'text-xs py-[16px] px-nano',
    medium: 'text-xxs py-[10px] px-nano',
    small: 'text-xxxs py-[6px] px-nano',
  }[size]

  const colorsVariant = {
    primary: `
      bg-brand-primary-500 hover:bg-brand-primary-600 active:bg-brand-primary-400
      border-brand-primary-500 hover:border-brand-primary-600 active:border-brand-primary-600 focus:border-light-high-500
      text-light-high-500 active:text-brand-primary-600
    `,
    secondary: `
      bg-highlight-500 hover:bg-highlight-600 active:bg-highlight-400
      border-highlight-500 hover:border-highlight-600 active:border-highlight-600 focus:border-light-high-500
      text-light-high-500 active:text-highlight-600
    `,
    tertiary: `
      bg-transparent
      border-brand-primary-500 hover:border-brand-primary-600 active:border-light-low-500 focus:shadow-level1 focus:shadow-brand-primary-500
      text-brand-primary-500 hover:text-brand-primary-600 active:text-light-low-500
    `,
    ghost: `
      bg-transparent
      border-none
      text-brand-primary-500 hover:text-brand-primary-600 active:text-light-low-500
    `,
  }[color]

  const disabledColorsVariant = {
    primary: '!text-light-low-400 !border-dark-high-600 !bg-dark-high-600',
    secondary: '!text-light-low-400 !border-dark-high-600 !bg-dark-high-600',
    tertiary: '!text-dark-high-500 !border-dark-high-500',
    ghost: '!text-dark-high-500',
  }[color]

  const compiledClasses = [
    defaultVariant,
    className,
    sizesVariant,
    colorsVariant,
    disabled ? disabledColorsVariant : '',
  ]
    .join(' ')
    .trim()

  return (
    <DynamicTag data-testid="button" className={compiledClasses} {...rest}>
      {startIcon && <span className="mr-nano">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-nano">{endIcon}</span>}
    </DynamicTag>
  )
}
