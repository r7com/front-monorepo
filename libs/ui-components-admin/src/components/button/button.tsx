import { variants, ButtonVariants } from './variants'

export type ButtonProps<C extends React.ElementType> = {
  as?: C
  className?: string
  startIcon?: React.ReactNode | null
  endIcon?: React.ReactNode | null
  children: React.ReactNode
} & ButtonVariants &
  React.ComponentPropsWithoutRef<C>

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

  return (
    <DynamicTag
      data-testid="button"
      className={variants({ color, size, disabled, className })}
      {...rest}
    >
      {startIcon && (
        <span className="mr-nano" aria-hidden="true">
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && (
        <span className="ml-nano" aria-hidden="true">
          {endIcon}
        </span>
      )}
    </DynamicTag>
  )
}
