type ListInstitucionalProps = {
  children: React.ReactNode
}

export function ListInstitucional({ children }: ListInstitucionalProps) {
  return <ul className="flex flex-wrap">{children}</ul>
}
