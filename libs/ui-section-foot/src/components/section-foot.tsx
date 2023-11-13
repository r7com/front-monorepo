import { SectionFootLine } from './section-foot-line/section-foot-line'
import { SectionFootLink } from './section-foot-link/section-foot-link'

export type SectionFootProps = {
  children: React.ReactNode
  bg?: string
}

export function SectionFoot({ children, bg = '#556373' }: SectionFootProps) {
  return (
    <div
      className="flex flex-nowrap justify-center items-center gap-nano py-xxxs relative"
      style={{ '--bg': bg } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

SectionFoot.Line = SectionFootLine
SectionFoot.Link = SectionFootLink
