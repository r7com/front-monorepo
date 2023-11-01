export type SectionFootTextProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLHeadingElement>

export function SectionFootText({ children, ...rest }: SectionFootTextProps) {
  return (
    <span
      role="presentation"
      className={`text-little md:text-xxxs font-normal break-keep whitespace-nowrap text-white`}
      {...rest}
    >
      {children}
    </span>
  )
}
