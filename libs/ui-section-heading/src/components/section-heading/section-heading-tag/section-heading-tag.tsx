export type SectionHeadingTagProps = {
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function SectionHeadingTag({ children, ...rest }: SectionHeadingTagProps) {
  return (
    <a
      className="text-little uppercase p-nano bg-neutral-high-500 text-neutral-low-400 rounded-pill whitespace-nowrap"
      {...rest}
    >
      {children}
    </a>
  )
}
