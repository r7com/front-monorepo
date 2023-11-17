export type SidebarCategoryProps = {
  children: React.ReactNode
  title?: string
}

export function SidebarCategory({ children, title }: SidebarCategoryProps) {
  return (
    <li className="header-pb-xxs header-mb-xxs header-border-b-hairline header-border-b-neutral-high-600/intense header-uppercase">
      {title && (
        <h4 className="header-text-neutral-low-500 header-text-xs header-leading-5 header-mb-xxs header-font-bold">
          {title}
        </h4>
      )}
      {children}
    </li>
  )
}
