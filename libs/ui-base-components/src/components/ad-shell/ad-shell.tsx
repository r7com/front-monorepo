import { variants } from './ad-shell.variants'

export type AdShellProps = {
  children: React.ReactNode
  layout?: 'lines' | 'background' | 'tag' | 'none'
  minHeight?: string
}

export function AdShell({ children, layout = 'none', minHeight = '0px' }: AdShellProps) {
  const { adContainer, text } = variants({ layout })

  const AdShellVariant = {
    background: (
      <div className="base-pb-sm base-bg-neutral-high-600 base-rounded-md" data-testid="ad-shell">
        <span className={text()}>Publicidade</span>
        <div className={adContainer()} style={{ minHeight }}>
          {children}
        </div>
      </div>
    ),
    lines: (
      <div
        className="base-border-b-hairline base-border-b-neutral-low-400 base-border-solid base-pb-[11px]"
        data-testid="ad-shell"
      >
        <div className="base-flex base-items-center base-mb-nano">
          <span className="base-bg-neutral-low-400 base-grow base-h-[1px]"></span>
          <span className="base-text-neutral-low-400 base-text-little base-uppercase base-mx-nano base-my-0 base-font-primary">
            Continua após a publicidade
          </span>
          <span className="base-bg-neutral-low-400 base-grow base-h-[1px]"></span>
        </div>
        <div className={adContainer()} style={{ minHeight }}>
          {children}
        </div>
      </div>
    ),
    none: (
      <div data-testid="ad-shell" className={adContainer()} style={{ minHeight }}>
        {children}
      </div>
    ),
    tag: (
      <div data-testid="ad-shell">
        <span className={text()}>Publicidade</span>
        <div className={adContainer()} style={{ minHeight }}>
          {children}
        </div>
      </div>
    ),
  }[layout]

  return AdShellVariant
}
