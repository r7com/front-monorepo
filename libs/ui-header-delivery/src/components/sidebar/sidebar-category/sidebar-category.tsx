export type SidebarCategoryProps = {
  children: React.ReactNode
  title?: string
}

export function SidebarCategory({ children, title }: SidebarCategoryProps) {
  return (
    <li className="pb-xxs mb-xxs border-b-hairline border-b-neutral-high-600/intense uppercase">
      {title && <h4 className="text-[#333] text-xs leading-5 mb-xxs font-bold">{title}</h4>}
      {children}
    </li>
  )
}
