import { SectionHeadingImage } from './section-heading-image/section-heading-image'
import { SectionHeadingLine } from './section-heading-line/section-heading-line'
import { SectionHeadingTag } from './section-heading-tag/section-heading-tag'
import { SectionHeadingTags } from './section-heading-tags/section-heading-tags'
import { SectionHeadingTitle } from './section-heading-title/section-heading-title'

export type SectionHeadingProps = {
  children: React.ReactNode
  color?: string
}

export function SectionHeading({ children, color = '#4766ac' }: SectionHeadingProps) {
  return (
    <div
      className="flex flex-wrap md:flex-nowrap items-center gap-nano py-xxxs"
      style={{ '--color': color } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

SectionHeading.Image = SectionHeadingImage
SectionHeading.Line = SectionHeadingLine
SectionHeading.Tag = SectionHeadingTag
SectionHeading.Tags = SectionHeadingTags
SectionHeading.Title = SectionHeadingTitle
