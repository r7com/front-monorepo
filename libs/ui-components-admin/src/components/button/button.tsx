export type ButtonProps<C extends React.ElementType> = {
  as?: C
  className?: string
  size?: 'default' | 'medium' | 'small' | 'content'
  color?: 'primary' | 'secondary' | 'tertiary' | 'neutral' | 'transparent'
  border?: 'square' | 'rounded' | 'circular' | 'none'
  textCase?: 'uppercase' | 'lowercase' | 'capitalize' | 'default'
  disabled?: boolean
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<C>

export function Button<C extends React.ElementType = 'button'>({
  as,
  className = '',
  size = 'default',
  color = 'primary',
  border = 'rounded',
  textCase = 'default',
  disabled = false,
  children,
  ...rest
}: ButtonProps<C>) {
  const DynamicTag = as || 'button'

  const defaultClasses = 'box-border cursor-pointer'

  const sizesVariant = {
    default: 'py-[16px] px-[12px]',
    medium: 'py-[10px] px-[12px]',
    small: 'py-[6px] px-[12px]',
    content: 'p-0',
  }[size]

  const colorsVariant = {
    primary:
      'bg-brand-primary-500 border-brand-primary-500 hover:border-brand-primary-600 hover:bg-brand-primary-600 text-[#fff] transition-colors',
    secondary:
      'bg-highlight-400 border-highlight-400 hover:border-highlight-600 hover:bg-highlight-600 text-[#fff] transition-colors',
    tertiary:
      'bg-transparent border-brand-primary-500 hover:bg-brand-primary-500 text-brand-primary-500 hover:text-[#fff] transition-colors',
    neutral:
      'bg-[#556373] border-[#556373] hover:border-[#333b45] hover:bg-[#333b45] text-[#fff] transition-colors',
    transparent: 'bg-transparent border-transparent',
  }[color]

  const bordersVariant = {
    square: 'border-thin rounded-[0px]',
    rounded: 'border-thin rounded-md',
    circular: 'border-thin rounded-circular',
    none: 'border-none',
  }[border]

  const textCaseVariant = {
    default: 'normal-case',
    capitalize: 'capitalize',
    lowercase: 'lowercase',
    uppercase: 'uppercase',
  }[textCase]

  const compiledClasses = [
    defaultClasses,
    className,
    sizesVariant,
    colorsVariant,
    bordersVariant,
    textCaseVariant,
    disabled ? 'pointer-events-none bg-[#dddde1] border-[#dddde1]' : '',
  ]
    .join(' ')
    .trim()

  return (
    <DynamicTag className={compiledClasses} {...rest}>
      {children}
    </DynamicTag>
  )
}
