export type SectionHeadingTagsProps = {
  children: React.ReactNode
}

export function SectionHeadingTags({ children }: SectionHeadingTagsProps) {
  return (
    <div className="sheading-flex sheading-gap-xxxs md:sheading-gap-nano sheading-pb-nano sheading-sheading-max-md:overflow-x-auto">
      {children}
    </div>
  )
}
