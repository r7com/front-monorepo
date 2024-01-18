import { AdPlaceholder, AdShell } from '@r7/ui-base-components'

export function UiBaseComponents() {
  return (
    <div className="p-md">
      <AdShell layout="background" minHeight="100px">
        <AdPlaceholder />
      </AdShell>
      <br></br>
      <AdShell layout="none" minHeight="300px">
        <AdPlaceholder />
      </AdShell>
      <br></br>
      <AdShell layout="tag" minHeight="300px">
        <AdPlaceholder />
      </AdShell>
      <br></br>
      <AdShell layout="lines" minHeight="250px">
        <AdPlaceholder />
      </AdShell>
    </div>
  )
}
