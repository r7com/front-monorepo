export type MenuLinkProps = {
  newWindow?: boolean
  children: React.ReactNode
  url: string
  title: string
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

export function MenuLink({ children, title, url, newWindow = false, ...rest }: MenuLinkProps) {
  return (
    <a
      title={title}
      href={url}
      target={newWindow ? '_blank' : undefined}
      rel={newWindow ? 'noreferrer' : undefined}
      className="h-full flex items-center text-xxxs font-normal leading-5 hover:after:border-b-[3px] hover:after:absolute hover:after:w-full hover:after:inset-0 hover:after:content-['']"
      {...rest}
    >
      {children}
    </a>
  )
}
