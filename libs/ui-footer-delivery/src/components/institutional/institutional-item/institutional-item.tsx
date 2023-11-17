type InstitutionalItemProps = {
  children: React.ReactNode
}

export function InstitutionalItem({ children }: InstitutionalItemProps) {
  return <li className="footer-mr-xxxs last:footer-mr-0">{children}</li>
}
