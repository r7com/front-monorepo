export type MenuLinkProps = {
  newWindow?: boolean
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function MenuLink({ children, newWindow = true, ...rest }: MenuLinkProps) {
  return (
    <a
      className="h-full flex items-center text-xxxs font-normal leading-5"
      target={newWindow ? '_blank' : undefined}
      rel={newWindow ? 'noreferrer' : undefined}
      {...rest}
    >
      {children}
    </a>
  )
}
