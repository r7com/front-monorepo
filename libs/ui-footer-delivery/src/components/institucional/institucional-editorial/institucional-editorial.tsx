import { SvgIcon } from '@r7-jarvics/ui-base-components'
export type institucionalEditorialProps = {
  editorialName: string
}

export function institucionalEditorial({ editorialName }: institucionalEditorialProps) {
  return (
    <div className="flex justify-center">
      <a href="https://www.r7.com" className="flex items-end text-light-high-400">
        <SvgIcon iconName="logo-R7" title="Logo-R7" className="fill-neutral-high-400" />

        <p className="ml-nano uppercase font-bold text-sm">
          {editorialName.toLowerCase() === 'r7' ? '.com' : editorialName}
        </p>
      </a>
    </div>
  )
}
