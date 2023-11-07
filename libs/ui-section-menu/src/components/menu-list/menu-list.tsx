export type MenuListProps = {
  children: React.ReactNode
}

export function MenuList({ children }: MenuListProps) {
  return (
    <ul className="flex gap-xxs cursor-pointer" aria-label="Barra de navegação">
      {children}
    </ul>
  )
}
