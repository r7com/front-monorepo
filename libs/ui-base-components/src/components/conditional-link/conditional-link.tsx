import { variants, ConditionalLinkVariants } from './conditional-link.variants'

export type ConditionalLinkProps = {
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  ConditionalLinkVariants

export function ConditionalLink({
  children,
  href,
  target,
  width = 'default',
  ...rest
}: ConditionalLinkProps) {
  if (!href) return children
  return (
    <a
      className={variants({ width })}
      href={href}
      rel={target === '_blank' ? 'noreferrer' : undefined}
      {...rest}
    >
      {children}
    </a>
  )
}
