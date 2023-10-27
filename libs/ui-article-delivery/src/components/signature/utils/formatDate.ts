export const formatDate = (date: string) => {
  try {
    const publishedDate = new Date(date)
    const formatedPublishedDate = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'America/Sao_Paulo',
    })
      .format(publishedDate)
      .replace(',', '')

    const [datePart, timePart] = formatedPublishedDate.split(' ')
    const [day, month, year] = datePart.split('/')
    const [hour, minute] = timePart.split(':')

    return `${day}/${month}/${year} - ${hour}h${minute}`
  } catch (e) {
    return ''
  }
}
