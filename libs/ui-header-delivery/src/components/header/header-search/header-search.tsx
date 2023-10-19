import { useHeaderActions } from '../utils/hooks/use-header-actions'
import { variants } from './header-search.variants'

export function HeaderSearch() {
  const { header } = useHeaderActions()

  const { wrapperSlot, formSlot, inputSlot, submitSlot } = variants({
    isSearchActive: header.isSearchActive,
  })

  return (
    <div id="header-search-form" className={wrapperSlot()}>
      <form role="search" action="https://busca.r7.com" className={formSlot()}>
        <label htmlFor="headerSearchBar" className="sr-only">
          Busca do Portal R7
        </label>
        <input
          type="search"
          name="q"
          id="headerSearchBar"
          placeholder="Digite sua busca"
          className={inputSlot()}
        />
        <button type="submit" title="buscar" className={submitSlot()}>
          Buscar
        </button>
      </form>
    </div>
  )
}
