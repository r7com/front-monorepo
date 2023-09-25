type InstitutionalLinkProps = {
  name: string
  url: string
}

export function InstitutionalLink({ name, url }: InstitutionalLinkProps) {
  return (
    <a
      title={name}
      href={url}
      target="_blank"
      className="text-light-high-400 uppercase text-little hover:underline"
      rel="noreferrer"
    >
      {name}
    </a>
  )
}
