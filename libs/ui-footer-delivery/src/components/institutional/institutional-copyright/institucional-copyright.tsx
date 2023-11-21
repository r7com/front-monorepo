type InstitutionalCopyrightProps = {
  children: React.ReactNode
}

export function InstitutionalCopyright({ children }: InstitutionalCopyrightProps) {
  return (
    <p className="footer-text-light-high-400 footer-text-little footer-text-center lg:footer-text-left footer-mt-xxxs lg:footer-mt-auto">
      {children}
    </p>
  )
}
