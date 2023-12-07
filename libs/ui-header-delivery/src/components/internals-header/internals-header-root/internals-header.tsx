import { useIsInViewport } from '../utils/hooks/use-is-in-viewport'
import { variants } from './internals-header.variants'

import { InternalsHeaderTitle } from '../internals-header-title/internals-header-title'
import { InternalsHeaderSectionName } from '../internals-header-section-name/internals-header-section-name'

export type InternalsHeaderRootProps = {
  children: React.ReactNode
  triggerElementSelector: string
}

export function InternalsHeader({ children, triggerElementSelector }: InternalsHeaderRootProps) {
  const isTriggerElementInViewport = useIsInViewport(triggerElementSelector)

  return (
    <div
      data-testid="internals-header"
      className={variants({ fadeIn: !isTriggerElementInViewport })}
    >
      {children}
    </div>
  )
}

InternalsHeader.Title = InternalsHeaderTitle
InternalsHeader.SectionName = InternalsHeaderSectionName
