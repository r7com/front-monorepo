export type InstitutionalWrapperProps = {
  children: React.ReactNode
}

export function InstitutionalWrapper({ children }: InstitutionalWrapperProps) {
  return (
    <div className="footer-flex footer-justify-center">
      <a
        href="https://www.r7.com"
        className="footer-flex footer-items-end footer-text-light-high-400"
      >
        {children}
      </a>
    </div>
  )
}
