type LinkInstitucionalProps = {
  name: string
  url: string
}

export function LinkInstitucional({ name, url }: LinkInstitucionalProps) {
  return (
    <a
      title={name}
      href={url}
      target="_blank"
      className="text-light-high-400 mr-xxxs last:mr-0 uppercase text-little hover:underline"
      rel="noreferrer"
    >
      {name}
    </a>
  )
}
