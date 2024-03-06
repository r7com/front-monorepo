export type InstitutionalContentProps = {
  children?: React.ReactNode
}

export function InstitutionalContent({ children }: InstitutionalContentProps) {
  return (
    <div className="footer-block lg:footer-flex footer-justify-between footer-pb-xxxs footer-items-center footer-border-t-transparent footer-border-l-transparent footer-border-r-transparent footer-border-b-4 footer-border-light-high-500 footer-border-[1px] footer-border-solid ">
      {children}
    </div>
  )
}
