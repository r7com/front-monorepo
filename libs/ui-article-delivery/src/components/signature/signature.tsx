type SignatureProps = {
  sectionName: string
  sectionUrl: string
  author: string
  published: string
  color: string
  modified?: string
}

export function Signature({
  sectionName,
  sectionUrl,
  author,
  published,
  modified,
  color,
}: SignatureProps): JSX.Element {
  return (
    <div className="flex flex-col mb-xxxs lg:mb-0">
      <p>
        <a
          href={sectionUrl}
          title={sectionName}
          className="text-editorial-color text-xxxs font-semibold uppercase"
          style={{ color }}
        >
          {sectionName}
        </a>
        <span className="text-editorial-color ml-quark mr-quark" style={{ color }}>
          |
        </span>
        {author}
      </p>
      <time dateTime={`${published}`} className="uppercase text-little">
        {published}
        {modified && <span> (Atualizado em {modified})</span>}
      </time>
    </div>
  )
}
