export type SignatureAgencyProps = {
  name: string
  url: string
  imageUrl: string
}

export function SignatureAgency({ name, url, imageUrl }: SignatureAgencyProps) {
  return (
    <a href={url} title={name} target="_blank" rel="noreferrer">
      <img
        src={imageUrl}
        alt={name}
        className="article-rounded-md article-mr-nano article-block dark:article-grayscale"
        title={name}
        width={37}
        height={37}
      />
    </a>
  )
}
