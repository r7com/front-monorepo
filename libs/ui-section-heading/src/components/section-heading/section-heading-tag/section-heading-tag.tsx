export type SectionHeadingTagProps = {
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function SectionHeadingTag({ children, ...rest }: SectionHeadingTagProps) {
  return (
    <a
      className="sheading-text-little sheading-uppercase sheading-p-nano sheading-bg-neutral-high-500 sheading-text-neutral-low-400 sheading-rounded-pill sheading-whitespace-nowrap"
      {...rest}
    >
      {children}
    </a>
  )
}
