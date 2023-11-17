export type MenuLinkProps = {
  openInNewTab?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function MenuLink({ children, openInNewTab = false, ...rest }: MenuLinkProps) {
  return (
    <a
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noreferrer' : undefined}
      className="smenu-uppercase hover:smenu-text-[var(--section-color)] smenu-transition-colors"
      {...rest}
    >
      {children}
    </a>
  )
}
