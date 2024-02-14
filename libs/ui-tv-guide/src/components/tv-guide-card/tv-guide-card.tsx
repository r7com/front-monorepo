import { Children, ReactNode } from 'react'

type TvGuideCardProps = {
  children: ReactNode
}

export function TvGuideCard({ children }: TvGuideCardProps) {
  const [figure, ...content] = Children.toArray(children)
  return (
    <div className="tv-flex tv-gap-x-xxs">
      <div>{figure}</div>
      <div className="tv-flex tv-flex-col tv-justify-center">{content}</div>
    </div>
  )
}
