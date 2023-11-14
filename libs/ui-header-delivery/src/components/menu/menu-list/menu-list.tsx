export type MenuListProps = {
  children: React.ReactNode
}

export function MenuList({ children }: MenuListProps) {
  return (
    <ul className="header-ml-xxxs" aria-label="Barra de navegação">
      {children}
    </ul>
  )
}
