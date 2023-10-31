import { SectionFootLine } from './section-foot-line/section-foot-line'
import { SectionFootLink } from './section-foot-link/section-foot-link'
import { SectionFootText } from './section-foot-text/section-foot-text'

export type SectionFootProps = {
  children: React.ReactNode
  color?: string
  bg?: string
}

export function SectionFoot({ children, color = '#ffffff', bg = '#4766ac' }: SectionFootProps) {
  return (
    <div
      className="flex flex-nowrap justify-center items-center gap-nano py-xxxs relative"
      style={{ '--color': color, '--bg': bg } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

SectionFoot.Line = SectionFootLine
SectionFoot.Link = SectionFootLink
SectionFoot.Text = SectionFootText
