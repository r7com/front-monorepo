type InstitutionalLinkProps = {
  children: React.ReactNode
  url: string
  title: string
}

export function InstitutionalLink({ children, url, title }: InstitutionalLinkProps) {
  return (
    <a
      title={title}
      href={url}
      target="_blank"
      className="text-light-high-400 uppercase text-little hover:underline"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}
