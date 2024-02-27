import { variants, TvGuideRatingVariants } from './variants'
import { getRatingTitle } from './utils/utils'

type TvGuideRatingProps = {
  children: React.ReactNode
} & TvGuideRatingVariants

export function TvGuideRating({ children, rating = 'default' }: TvGuideRatingProps) {
  return (
    <span title={getRatingTitle(rating)} className={variants({ rating })}>
      {children}
    </span>
  )
}

export function TvGuideClosedCaption() {
  return (
    <span title="Closed Caption disponível" className={variants({ rating: 'default' })}>
      cc
    </span>
  )
}

export function TvGuideAudioDesctiption() {
  return (
    <span title="Áudio Descrição disponível" className={variants({ rating: 'default' })}>
      ad
    </span>
  )
}

export function TvGuideHighDefinition() {
  return (
    <span title="Alta Definição disponível" className={variants({ rating: 'default' })}>
      hd
    </span>
  )
}
