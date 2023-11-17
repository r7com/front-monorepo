import { formatDate } from '../utils/formatDate'

export type SignatureDateProps = {
  published: string
  modified?: string
}

export function SignatureDate({ published, modified }: SignatureDateProps) {
  const formatPublished = formatDate(published)
  const formatModified = modified ? formatDate(modified) : null

  return (
    <p className="article-uppercase article-text-little article-text-agerating-18anos-500 dark:article-text-neutral-high-400">
      <time itemProp="datePublished" dateTime={published}>
        {formatPublished}
      </time>
      {formatModified && (
        <time itemProp="dateModified" dateTime={modified}>
          {' '}
          (Atualizado em {formatModified})
        </time>
      )}
    </p>
  )
}
