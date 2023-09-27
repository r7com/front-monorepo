export type MenuLinkProps = {
  newWindow?: boolean
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function MenuLink({ children, newWindow = true, ...rest }: MenuLinkProps) {
  return (
    <a
      className="h-full flex items-center text-xxxs font-normal leading-5 text-neutral-high-500 hover:text-neutral-high-400 hover:after:border-b-[3px] hover:after:absolute hover:after:w-full hover:after:inset-0 hover:after:content-['']"
      target={newWindow ? '_blank' : '_self'}
      rel={newWindow ? 'noreferrer' : undefined}
      {...rest}
    >
      {children}
    </a>
  )
}
