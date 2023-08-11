export type ChipsProps<C extends React.ElementType> = {
  as?: C
  size: 'medium' | 'small' | 'large' | 'default'
  color?: 'primary' | 'secondary' | 'tertiary'
  children: React.ReactNode
  variant?: 'disabled' | 'active'
} & React.ComponentPropsWithoutRef<C>

export function Chips<C extends React.ElementType = 'span'>({
  as,
  size = 'default',
  color = 'primary',
  variant,
  children,
  ...rest
}: ChipsProps<C>) {
  const DynamicTag = as || 'span'

  const sizes = {
    large: 'p-xxxs h-sm',
    medium: 'p-xxxs h-xs',
    small: 'p-xxxs h-xxs',
    default: 'p-xxxs h-lg',
  }[size]

  const colors = {
    primary:
      variant === 'active'
        ? 'bg-brand-primary-500 text-brand-primary-600 border-hairline border-brand-primary-600'
        : variant === 'disabled'
        ? 'bg-dark-high-600 text-dark-high-500'
        : 'bg-[#218EE1] text-neutral-high-500',
    secondary:
      variant === 'active'
        ? 'bg-[#1AA194] text-highlight-600 border-highlight-600 border-hairline'
        : variant === 'disabled'
        ? 'bg-dark-high-600 text-dark-high-500'
        : 'bg-highlight-500 text-neutral-high-500',
    tertiary:
      variant === 'active'
        ? 'bg-neutral-high-400 text-light-low-500 border-hairline border-light-low-500'
        : variant === 'disabled'
        ? 'text-dark-high-500 border-hairline border-dark-high-500'
        : 'text-[#218EE1] border-hairline border-[#218EE1]',
  }[color]

  const hover = {
    primary: 'hover:bg-brand-primary-600',
    secondary: 'hover:bg-highlight-600',
    tertiary: 'hover:border-brand-primary-600 hover:text-brand-primary-600',
  }[color]

  const focus = {
    primary: 'focus:outline-none focus:ring focus:ring-[#218EE1]',
    secondary: '',
    tertiary: 'focus:shadow-[0_0_4px_0_rgba(33,142,225,1)]',
  }[color]

  const pressed = {
    primary: 'active:bg-brand-primary-600 active:shadow-inner',
    secondary: 'active:bg-highlight-400 active:shadow-inner',
    tertiary: 'active:shadow-[4px_4px_4px_0px_rgba(33,142,225,0.32)] active:shadow-inner',
  }[color]

  return (
    <DynamicTag
      className={`${sizes} ${hover} ${focus} ${pressed} ${colors} font-[400] cursor-pointer flex w-[fit-content] items-center justify-center rounded-[100px] text-little`}
      {...rest}
    >
      {children}
    </DynamicTag>
  )
}
