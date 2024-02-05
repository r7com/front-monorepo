type MostReadDescriptionProps = {
  children: React.ReactNode
}

export function MostReadDescription({ children }: MostReadDescriptionProps) {
  return <h4 className="card-text-neutral-low-500 card-font-semibold card-mb-xxxs">{children}</h4>
}
