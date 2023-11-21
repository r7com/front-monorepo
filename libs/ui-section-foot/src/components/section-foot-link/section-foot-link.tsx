export type SectionFootLinkProps = {
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function SectionFootLink({ children, ...rest }: SectionFootLinkProps) {
  return (
    <a
      className="sfoot-flex sfoot-items-center sfoot-gap-nano sfoot-uppercase sfoot-px-[16px] sfoot-py-[10px] sfoot-bg-[var(--bg)] sfoot-rounded-pill sfoot-whitespace-nowrap sfoot-z-10 sfoot-text-little sfoot-font-normal sfoot-break-keep sfoot-text-neutral-high-400 sfoot-mt-[2px]"
      {...rest}
    >
      {children}
    </a>
  )
}
