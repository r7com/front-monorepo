export type SectionFootLinkProps = {
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function SectionFootLink({ children, ...rest }: SectionFootLinkProps) {
  return (
    <a
      className="flex items-center gap-nano uppercase px-[16px] py-[10px] bg-[var(--bg)] rounded-pill whitespace-nowrap z-10 text-little font-normal break-keep text-neutral-high-400 mt-[2px]"
      {...rest}
    >
      {children}
    </a>
  )
}
