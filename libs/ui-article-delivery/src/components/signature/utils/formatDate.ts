export const formatDate = (date: string) => {
  try {
    const publishedDate = new Date(date)
    const formatedPublishedDate = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/New_York',
    }).format(publishedDate)

    console.log(formatedPublishedDate)

    const finalDate = formatedPublishedDate.replace(/:/g, 'h').replace(/,/g, ' -')

    return finalDate
  } catch (e) {
    return ''
  }
}
