export type MenuLinkProps = {
  newWindow?: boolean
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function MenuLink({ children, newWindow = false, ...rest }: MenuLinkProps) {
  return (
    <a
      target={newWindow ? '_blank' : undefined}
      rel={newWindow ? 'noreferrer' : undefined}
      className="h-full flex items-center text-xxxs font-normal leading-5 hover:after:border-b-[3px] hover:after:absolute hover:after:w-full hover:after:inset-0 hover:after:content-['']"
      {...rest}
    >
      {children}
    </a>
  )
}
