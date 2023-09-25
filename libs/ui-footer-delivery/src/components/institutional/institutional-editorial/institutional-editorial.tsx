export type InstitucionalEditorialProps = {
  editorialName: string
}

export function InstitutionalEditorial({ editorialName }: InstitucionalEditorialProps) {
  return (
    <p className="ml-nano uppercase font-bold text-sm">
      {editorialName.toLowerCase() === 'r7' ? '.com' : editorialName}
    </p>
  )
}
