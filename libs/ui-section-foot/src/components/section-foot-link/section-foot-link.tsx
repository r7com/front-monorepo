export type SectionFootLinkProps = {
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function SectionFootLink({ children, ...rest }: SectionFootLinkProps) {
  return (
    <a
      className={`flex items-center gap-nano uppercase px-[16px] py-[10px] bg-[var(--bg)] rounded-pill whitespace-nowrap z-10`}
      {...rest}
    >
      {children}
    </a>
  )
}
