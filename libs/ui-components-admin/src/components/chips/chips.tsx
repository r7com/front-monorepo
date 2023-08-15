import React from 'react'

export type ChipsProps<C extends React.ElementType> = {
  as?: C
  size: 'medium' | 'small' | 'large' | 'default'
  color?: 'primary' | 'secondary' | 'tertiary'
  children: React.ReactNode
  active?: boolean
  disabled?: boolean
} & React.ComponentPropsWithoutRef<C>

export function Chips<C extends React.ElementType = 'span'>({
  as,
  size = 'default',
  color = 'primary',
  active = false,
  disabled = false,
  children,
  ...rest
}: ChipsProps<C>) {
  const DynamicTag = as || 'span'

  const sizes = {
    large: 'h-sm',
    medium: 'h-xs',
    small: 'hxxs',
    default: 'h-lg',
  }[size]

  const colors = {
    primary: active
      ? 'bg-brand-primary-600 text-brand-primary-600 border-hairline border-brand-primary-600'
      : disabled
      ? 'bg-dark-high-600 text-dark-high-500 cursor-not-allowed'
      : 'bg-brand-primary-500 text-neutral-high-500',
    secondary: active
      ? 'bg-highlight-600 text-highlight-600 border-highlight-600 border-hairline'
      : disabled
      ? 'bg-dark-high-600 text-dark-high-500 cursor-not-allowed'
      : 'bg-highlight-500 text-neutral-high-500',
    tertiary: active
      ? 'bg-neutral-high-400 text-light-low-500 border-hairline border-light-low-500'
      : disabled
      ? 'text-dark-high-500 border-hairline border-dark-high-500 cursor-not-allowed'
      : 'text-brand-primary-500 border-hairline border-brand-primary-500',
  }[color]

  const hover = {
    primary: 'hover:bg-brand-primary-600',
    secondary: 'hover:bg-highlight-600',
    tertiary: 'hover:border-brand-primary-600 hover:text-brand-primary-600',
  }[color]

  const focus = {
    primary:
      'focus:outline-none focus:ring focus:ring-brand-primary-600 focus:shadow-highlight-500',
    secondary: '',
    tertiary: 'focus:shadow-level5 focus:shadow-brand-primary-500',
  }[color]

  const pressed = {
    primary: 'active:bg-brand-primary-600 active:shadow-inner-level5',
    secondary: 'active:border-highlight-400 active:shadow-inner-level5',
    tertiary: 'active:shadow-brand-primary-500 active:shadow-inner-level0',
  }[color]

  return (
    <DynamicTag
      className={`${sizes} ${hover} ${focus} ${pressed} ${colors} px-xxxs font-semibold cursor-pointer flex items-center justify-center rounded-full w-fit text-xs`}
      {...rest}
    >
      {children}
    </DynamicTag>
  )
}
