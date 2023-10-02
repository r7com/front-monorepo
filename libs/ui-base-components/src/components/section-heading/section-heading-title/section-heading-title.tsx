export type SectionHeadingTitleProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLHeadingElement>

export function SectionHeadingTitle({ children, ...rest }: SectionHeadingTitleProps) {
  return (
    <h2
      className={`text-xl md:text-xxl font-light break-keep whitespace-nowrap text-[var(--color)]`}
      {...rest}
    >
      {children}
    </h2>
  )
}
