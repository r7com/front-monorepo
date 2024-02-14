import { variants, TvGuideTimeVariants } from './variants'

type TvGuideTimeProps = {
  children: React.ReactNode
  datetime: string
} & TvGuideTimeVariants

export function TvGuideTime({ children, datetime, hiddenOnMobile = false }: TvGuideTimeProps) {
  return (
    <time className={variants({ hiddenOnMobile })} dateTime={datetime}>
      {children}
    </time>
  )
}
