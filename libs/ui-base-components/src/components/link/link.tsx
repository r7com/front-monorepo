export type LinkProps = {
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({ children, href, ...rest }: LinkProps) {
  return href ? (
    <a href={href} {...rest}>
      {children}
    </a>
  ) : (
    { children }
  )
}
