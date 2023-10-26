export type SignatureInfoProps = {
  sectionUrl: string
  sectionName: string
  author: string
  color?: string
}

export function SignatureInfo({ sectionName, sectionUrl, author, color }: SignatureInfoProps) {
  return (
    <p className="text-xxxs dark:text-neutral-high-400">
      <a
        href={sectionUrl}
        title={sectionName}
        className="text-editorial-color font-semibold uppercase dark:!text-neutral-high-400"
        style={{ color }}
      >
        {sectionName}
      </a>
      <span
        className="text-editorial-color ml-quark mr-quark dark:!text-neutral-high-400"
        style={{ color }}
      >
        |
      </span>
      {author}
    </p>
  )
}
