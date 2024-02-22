type MostReadItemProps = {
  children: React.ReactNode
}

export function MostReadItem({ children }: MostReadItemProps) {
  return <li className="card-z-[1]">{children}</li>
}
