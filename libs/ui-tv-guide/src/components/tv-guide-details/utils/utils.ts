export function getRatingTitle(rating: string | number) {
  const ratingFree = 'Classificação Livre.'
  const ratingNotRecommended = `Não recomendado para menores de ${rating} anos.`

  if (rating === 'L') {
    return ratingFree
  } else {
    if (typeof rating === 'number') return ratingNotRecommended
    else {
      return `${
        rating.toLowerCase().startsWith('a') && 'Autoclassificação:'
      } ${ratingNotRecommended}`
    }
  }
}
