export type SectionFootTextProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLHeadingElement>

export function SectionFootText({ children }: SectionFootTextProps) {
  return (
    <span
      role="presentation"
      className={`text-little font-normal break-keep whitespace-nowrap text-neutral-high-400 mt-[2px]`}
    >
      {children}
    </span>
  )
}
