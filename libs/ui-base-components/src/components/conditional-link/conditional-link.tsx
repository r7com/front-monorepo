export type ConditionalLinkProps = {
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function ConditionalLink({ children, href, ...rest }: ConditionalLinkProps) {
  return href ? (
    <a href={href} {...rest}>
      {children}
    </a>
  ) : (
    <>{children}</>
  )
}
