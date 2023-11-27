export type ConditionalLinkProps = {
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function ConditionalLink({ children, href, target, ...rest }: ConditionalLinkProps) {
  if (!href) return children
  return (
    <a href={href} rel={target === '_blank' ? 'noreferrer' : undefined} {...rest}>
      {children}
    </a>
  )
}
