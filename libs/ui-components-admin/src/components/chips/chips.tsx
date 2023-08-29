import React from 'react'

export type ChipsProps<C extends React.ElementType> = {
  as?: C
  size?: 'medium' | 'small' | 'large'
  color?: 'primary' | 'secondary' | 'tertiary'
  children: React.ReactNode
  disabled?: boolean
  selected?: boolean
  startIcon?: React.ReactNode | null
  endIcon?: React.ReactNode | null
  clickable?: boolean
  onClick?: () => void
} & React.ComponentPropsWithoutRef<C>

export function Chips<C extends React.ElementType = 'span'>({
  as,
  size = 'large',
  color = 'primary',
  disabled = false,
  selected,
  children,
  startIcon = null,
  endIcon = null,
  clickable = false,
  onClick,
  ...rest
}: ChipsProps<C>) {
  const DynamicTag = clickable ? 'button' : as || 'span'

  const sizes = {
    large: 'h-sm text-xs [&>svg]:h-xxs [&>svg]:w-xxs',
    medium: 'h-xs text-xs [&>svg]:h-xxs [&>svg]:w-xxs',
    small: 'h-xxs text-xxxs [&>svg]:h-xxxs [&>svg]:w-xxxs',
  }[size]

  const colors = {
    primary: selected
      ? 'bg-brand-primary-500 text-brand-primary-600 border-hairline border-brand-primary-600 [&>svg]:fill-brand-primary-600'
      : disabled
      ? 'bg-dark-high-600 text-dark-high-500 [&>svg]:fill-dark-high-500 pointer-events-none	'
      : 'bg-brand-primary-500 text-neutral-high-500',
    secondary: selected
      ? 'bg-highlight-400 text-highlight-600 border-highlight-600 border-hairline [&>svg]:fill-highlight-600'
      : disabled
      ? 'bg-dark-high-600 text-dark-high-500 [&>svg]:fill-dark-high-500 pointer-events-none	'
      : 'bg-highlight-500 text-neutral-high-500',
    tertiary: selected
      ? 'bg-brand-primary-500/medium text-brand-primary-600 border-hairline border-brand-primary-600 [&>svg]:fill-brand-primary-600'
      : disabled
      ? 'text-dark-high-500 border-hairline border-dark-high-500 [&>svg]:fill-dark-high-500 pointer-events-none	'
      : 'text-brand-primary-500 border-hairline border-brand-primary-500 [&>svg]:fill-brand-primary-500',
  }[color]

  const hover = {
    primary:
      'hover:bg-brand-primary-600 hover:text-neutral-high-500 [&>svg]:hover:fill-neutral-high-500',
    secondary:
      'hover:bg-highlight-600 hover:text-neutral-high-500 [&>svg]:hover:fill-neutral-high-500',
    tertiary:
      'hover:border-brand-primary-600 hover:text-brand-primary-600 [&>svg]:hover:fill-brand-primary-600',
  }[color]

  const focus = {
    primary: 'focus:border-light-low-500 focus:border-thin',
    secondary: 'focus:border-light-low-500 focus:border-thin',
    tertiary: 'focus:shadow-level5 focus:shadow-brand-primary-500',
  }[color]

  const pressed = {
    primary: 'active:bg-brand-primary-600 active:shadow-inner-level5',
    secondary: 'active:border-highlight-400 active:shadow-inner-level5',
    tertiary: 'active:shadow-brand-primary-500/medium active:shadow-inner-level0',
  }[color]

  return (
    <DynamicTag
      className={`${sizes} ${hover} ${focus} ${pressed} ${colors} gap-nano px-xxxs rounded-pill font-semibold cursor-pointer flex items-center justify-center w-fit`}
      onClick={onClick}
      clickable={clickable}
      disabled={disabled}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
    </DynamicTag>
  )
}
