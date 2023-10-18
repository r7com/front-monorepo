import { SvgIcon } from '@r7/ui-base-components'
import { variants } from './sidebar-search.variants'

export type SidebarSearchProps = {
  onSubmit(evt: React.FormEvent<HTMLFormElement>): void
}

export function SidebarSearch({ onSubmit }: SidebarSearchProps) {
  const { wrapperSlot, formSlot, inputSlot, submitSlot } = variants()

  return (
    <div className={wrapperSlot()}>
      <form role="search" className={formSlot()} action="https://busca.r7.com" onSubmit={onSubmit}>
        <button type="submit" title="buscar" className={submitSlot()}>
          <SvgIcon iconName="search" size="small" className="fill-neutral-low-400" />
        </button>
        <label htmlFor="searchBar" className="sr-only">
          Campo de busca
        </label>
        <input
          type="search"
          name="q"
          id="searchBar"
          placeholder="O que você procura?"
          className={inputSlot()}
        />
      </form>
    </div>
  )
}
