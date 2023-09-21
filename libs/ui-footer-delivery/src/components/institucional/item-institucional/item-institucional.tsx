type ItemInstitucionalProps = {
  children: React.ReactNode
}

export function ItemInstitucional({ children }: ItemInstitucionalProps) {
  return <li className="text-center">{children}</li>
}
