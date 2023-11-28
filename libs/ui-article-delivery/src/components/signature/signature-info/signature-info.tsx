export type SignatureInfoProps = {
  sectionUrl: string
  sectionName: string
  author: string
  color?: string
}

export function SignatureInfo({ sectionName, sectionUrl, author, color }: SignatureInfoProps) {
  return (
    <p className="article-text-xxxs dark:article-text-neutral-high-400">
      <a
        href={sectionUrl}
        title={sectionName}
        className="article-text-editorial-color article-font-semibold article-uppercase dark:!article-text-neutral-high-400"
        style={{ color }}
      >
        {sectionName}
      </a>
      <span
        className="article-text-editorial-color article-ml-quark article-mr-quark dark:!article-text-neutral-high-400"
        style={{ color }}
      >
        |
      </span>
      {author}
    </p>
  )
}
