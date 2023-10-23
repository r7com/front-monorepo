export type SectionHeadingTagsProps = {
  children: React.ReactNode
}

export function SectionHeadingTags({ children }: SectionHeadingTagsProps) {
  return <div className="flex gap-xxxs md:gap-nano pb-nano max-md:overflow-x-auto">{children}</div>
}
