export type MenuListProps = {
  children: React.ReactNode
}

export function MenuList({ children }: MenuListProps) {
  return (
    <ul className="ml-xxxs" aria-label="Barra de navegação">
      {children}
    </ul>
  )
}
