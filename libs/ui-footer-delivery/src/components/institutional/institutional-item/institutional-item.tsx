type InstitutionalItemProps = {
  children: React.ReactNode
}

export function InstitutionalItem({ children }: InstitutionalItemProps) {
  return <li className="mr-xxxs last:mr-0">{children}</li>
}
