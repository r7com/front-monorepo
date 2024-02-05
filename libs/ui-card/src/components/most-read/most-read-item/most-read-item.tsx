type MostReadItemProps = {
  children: React.ReactNode
}

export function MostReadItem({ children }: MostReadItemProps) {
  return <li className="card-mr-xxxs last:card-mr-0 card-z-20">{children}</li>
}
