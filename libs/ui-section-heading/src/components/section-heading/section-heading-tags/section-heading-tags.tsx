export type SectionHeadingTagsProps = {
  children: React.ReactNode
}

export function SectionHeadingTags({ children }: SectionHeadingTagsProps) {
  return (
    <div className="sheading-flex sheading-gap-xxxs md:sheading-gap-nano sheading-pb-nano max-md:sheading-overflow-x-auto">
      {children}
    </div>
  )
}
