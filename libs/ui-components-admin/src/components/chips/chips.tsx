import { variants, ChipsVariants } from './chips.variants'

export type ChipsProps<C extends React.ElementType> = {
  as?: C
  size: 'medium' | 'small' | 'large'
  color?: 'primary' | 'secondary' | 'tertiary'
  children: React.ReactNode
  disabled?: boolean
  selected?: boolean
  startIcon?: React.ReactNode | null
  endIcon?: React.ReactNode | null
  clickable?: boolean
  onClick?: () => void
} & ChipsVariants &
  React.ComponentPropsWithoutRef<C>

export function Chips<C extends React.ElementType = 'span'>({
  as,
  size = 'large',
  color = 'primary',
  disabled = false,
  selected,
  children,
  startIcon,
  endIcon,
  clickable = false,
  onClick,
  ...rest
}: ChipsProps<C>) {
  const DynamicTag = clickable ? 'button' : as || 'span'

  const chipVariants = variants({ color, size, disabled, selected })

  return (
    <DynamicTag className={chipVariants} onClick={onClick} disabled={disabled} {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </DynamicTag>
  )
}
