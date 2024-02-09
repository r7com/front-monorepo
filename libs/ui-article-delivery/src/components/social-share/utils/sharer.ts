export function onMediaShare(shareLink: string) {
  window.open(shareLink, 'sharer', 'toolbar=0,status=0,width=626,height=436')
}

export const shareParams = ({
  link,
  utm_source,
  utm_campaign,
  utm_medium = 'share-bar',
}: {
  link: string
  utm_campaign?: 'galeria' | 'topo' | 'rodapé' | 'quiz' | 'poll'
  utm_source: 'facebook' | 'twitter' | 'whatsapp' | 'linkedin' | 'share'
  utm_medium?: string
}) => {
  const url = new URL(decodeURIComponent(link))

  if (!utm_campaign && !url.searchParams.get('utm_campaign')) return link

  const params = {
    utm_source,
    utm_medium,
    utm_campaign: utm_campaign && `r7-${utm_campaign}`,
  }

  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value)
  })

  return encodeURIComponent(url.href)
}
