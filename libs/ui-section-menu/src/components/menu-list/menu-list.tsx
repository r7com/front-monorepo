export type MenuListProps = {
  children: React.ReactNode
}

export function MenuList({ children }: MenuListProps) {
  return (
    <ul className="smenu-flex smenu-gap-xxs smenu-cursor-pointer" aria-label="Barra de navegação">
      {children}
    </ul>
  )
}
