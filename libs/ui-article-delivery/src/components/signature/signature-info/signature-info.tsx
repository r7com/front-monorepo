export type SignatureInfoProps = {
  sectionUrl: string
  sectionName: string
  author: string
  color?: string
}

export function SignatureInfo({ sectionName, sectionUrl, author, color }: SignatureInfoProps) {
  return (
    <p className="text-xxxs">
      <a
        href={sectionUrl}
        title={sectionName}
        className="text-editorial-color font-semibold uppercase"
        style={{ color }}
      >
        {sectionName}
      </a>
      <span className="text-editorial-color ml-quark mr-quark" style={{ color }}>
        |
      </span>
      {author}
    </p>
  )
}
