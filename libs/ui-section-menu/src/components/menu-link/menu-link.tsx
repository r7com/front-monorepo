export type MenuLinkProps = {
  openInNewTab?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function MenuLink({ children, openInNewTab = false, ...rest }: MenuLinkProps) {
  /**
  ────────────▄▄█▀─────▄
  ────────▄▄▀▀▒▒▒▀████▀▄
  ───▄▄▄▀▀▒▄▀▒▒▄▄██▀▒▒▒█
  ▄▀▀░░░░░░▀███▀▀░░░░░░█
  ▀███▄▄▄▄▄▄▄▄▄▄▄▄▄▄███▀
  */

  return (
    <a
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noreferrer' : undefined}
      className="uppercase hover:text-[var(--section-color)] transition-colors"
      {...rest}
    >
      {children}
    </a>
  )
}
