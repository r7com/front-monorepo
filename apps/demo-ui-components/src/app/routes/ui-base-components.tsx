import { AdPlaceholder, AdShell } from '@r7/ui-base-components'

export function UiBaseComponents() {
  return (
    <div className="p-md">
      <AdShell layout="background">
        <AdPlaceholder />
      </AdShell>
      <br></br>
      <AdShell layout="none">
        <AdPlaceholder />
      </AdShell>
      <br></br>
      <AdShell layout="tag">
        <AdPlaceholder />
      </AdShell>
      <br></br>
      <AdShell layout="lines">
        <AdPlaceholder />
      </AdShell>
    </div>
  )
}
