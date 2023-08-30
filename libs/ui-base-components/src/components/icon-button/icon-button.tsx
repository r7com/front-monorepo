export type IconButtonProps = {
  className?: string
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'button'>

export function IconButton({ className = '', children, ...rest }: IconButtonProps) {
  return (
    <button type="button" className={`flex ${className}`.trim()} {...rest}>
      {children}
    </button>
  )
}
