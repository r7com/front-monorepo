import { ConditionalLink } from '@r7/ui-base-components'

type MostReadLinkProps = {
  children: React.ReactNode
  url: string
  title: string
}

export function MostReadLink({ children, url, title }: MostReadLinkProps) {
  return (
    <ConditionalLink href={url} title={title} className="card-w-[141px] card-block">
      {children}
    </ConditionalLink>
  )
}
