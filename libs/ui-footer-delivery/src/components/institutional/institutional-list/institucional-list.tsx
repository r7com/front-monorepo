type InstitutionalListProps = {
  children: React.ReactNode
}

export function InstitutionalList({ children }: InstitutionalListProps) {
  return (
    <ul className="footer-flex footer-flex-wrap footer-justify-center lg:footer-justify-start footer-mt-xxxs">
      {children}
    </ul>
  )
}
