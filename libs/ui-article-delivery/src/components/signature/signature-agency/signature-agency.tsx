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
        className="w-[37px] h-[37px] rounded-md mr-nano block"
        title={name}
        width={37}
        height={37}
      />
    </a>
  )
}
