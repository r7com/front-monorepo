export type SectionHeadingTitleProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLHeadingElement>

export function SectionHeadingTitle({ children, ...rest }: SectionHeadingTitleProps) {
  return (
    <span
      role="presentation"
      className="sheading-text-xl md:sheading-text-xxl sheading-font-light sheading-break-keep sheading-whitespace-nowrap sheading-text-[var(--color)] dark:sheading-text-neutral-high-400"
      {...rest}
    >
      {children}
    </span>
  )
}
