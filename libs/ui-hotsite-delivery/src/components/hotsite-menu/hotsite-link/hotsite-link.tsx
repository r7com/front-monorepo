export type HotsiteLinkProps = {
  openInNewTab?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function HotsiteLink({ children, openInNewTab = false, ...rest }: HotsiteLinkProps) {
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
