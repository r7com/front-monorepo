export type InstitucionalEditorialProps = {
  editorialName: string
}

export function InstitutionalEditorial({ editorialName }: InstitucionalEditorialProps) {
  return (
    <p className="footer-ml-nano footer-uppercase footer-font-bold footer-text-sm">
      {editorialName.toLowerCase() === 'r7' ? '.com' : editorialName}
    </p>
  )
}
