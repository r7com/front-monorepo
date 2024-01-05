import { ConditionalLink } from '@r7/ui-base-components'
import { variants, BreakingNewsVariants } from './breaking-news.variants'
import { Card } from '../card'

export type BreakingNewsProps = {
  showImage?: boolean
  imageUrl?: string
  imageAlt?: string
  tag?: string
  title: string
  href: string
} & BreakingNewsVariants

export function BreakingNews({
  theme = 'live',
  showImage = true,
  tag,
  imageUrl,
  imageAlt,
  title,
  href,
}: BreakingNewsProps) {
  const { rootSlot, articleSlot, imageSlot, tagSlot, titleSlot } = variants({ theme })

  const defaultTagValue: Record<typeof theme, string> = {
    live: 'ao vivo',
    now: 'agora',
    urgent: 'urgente',
  }

  return (
    <div className={rootSlot()}>
      <Card className={articleSlot()}>
        <div className={tagSlot()}>
          <ConditionalLink href={href}>{tag ? tag : defaultTagValue[theme]}</ConditionalLink>
        </div>

        {showImage && imageUrl && imageAlt && (
          <div className={imageSlot()}>
            <ConditionalLink href={href}>
              <Card.Figure format="landscape">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="card-w-full card-object-cover card-h-full"
                />
              </Card.Figure>
            </ConditionalLink>
          </div>
        )}

        <div className={titleSlot()}>
          <Card.Title fontStyle="none" as="h3" color={theme === 'urgent' ? 'high' : 'low'}>
            <ConditionalLink href={href}>{title}</ConditionalLink>
          </Card.Title>
        </div>
      </Card>
    </div>
  )
}
