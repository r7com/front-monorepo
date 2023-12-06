import { useIsInViewport } from '../utils/hooks/use-is-in-viewport'
import { variants } from './internals-header.variants'

import { InternalsHeaderTitle } from '../internals-header-title/internals-header-title'
import { InternalsHeaderSectionName } from '../internals-header-section-name/internals-header-section-name'

export type InternalsHeaderRootProps = {
  children: React.ReactNode
  triggerElementSelector: string
}

export function InternalsHeader({ children, triggerElementSelector }: InternalsHeaderRootProps) {
  const isTriggerElelentInViewport = useIsInViewport(triggerElementSelector)

  return (
    <div
      data-testid="internals-header"
      className={variants({ fadeIn: !isTriggerElelentInViewport })}
    >
      {children}
    </div>
  )
}

InternalsHeader.Title = InternalsHeaderTitle
InternalsHeader.SectionName = InternalsHeaderSectionName
