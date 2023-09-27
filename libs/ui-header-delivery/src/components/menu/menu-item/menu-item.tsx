export type MenuItemProps = {
  url: string
  newWindow?: boolean
  children?: React.ReactNode
}

export function MenuItem({ url, newWindow = true, children }: MenuItemProps) {
  return (
    <li role="none" className="relative h-lg inline-flex mr-xxxs uppercase">
      <a
        className="h-full flex items-center text-xxxs font-normal leading-5 text-neutral-high-500 hover:text-neutral-high-400 hover:after:border-b-[3px] hover:after:absolute hover:after:w-full hover:after:inset-0 hover:after:content-['']"
        role="menuitem"
        href={url}
        target={newWindow ? '_blank' : '_self'}
        rel={newWindow ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    </li>
  )
}
