export type MenuLinkProps = {
  openInNewTab?: boolean
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function MenuLink({ children, openInNewTab = false, ...rest }: MenuLinkProps) {
  return (
    <a
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noreferrer' : undefined}
      className="h-full flex items-center text-xxxs font-normal leading-5 hover:after:border-b-[3px] hover:after:absolute hover:after:w-full hover:after:inset-0 hover:after:content-['']"
      {...rest}
    >
      {children}
    </a>
  )
}
