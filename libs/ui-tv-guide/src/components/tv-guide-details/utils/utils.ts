import { TvGuideRatingVariants } from '../variants'

export function getRatingTitle(rating: TvGuideRatingVariants['rating'] = 'default') {
  const ratingFree = 'Classificação Livre.'
  const ratingNotRecommended = `Não recomendado para menores de ${rating} anos.`

  if (rating === 'L') {
    return ratingFree
  } else {
    return `${
      rating.toLowerCase().startsWith('a') ? 'Autoclassificação:' : ''
    } ${ratingNotRecommended}`.trim()
  }
}
