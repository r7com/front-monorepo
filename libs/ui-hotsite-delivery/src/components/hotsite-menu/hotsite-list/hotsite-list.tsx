export type HotsiteListProps = {
  children: React.ReactNode
}

export function HotsiteList({ children }: HotsiteListProps) {
  return (
    <ul className="flex gap-xxs cursor-pointer" aria-label="Barra de navegação">
      {children}
    </ul>
  )
}
