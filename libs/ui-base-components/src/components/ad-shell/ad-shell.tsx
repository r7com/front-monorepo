export type AdShellProps = {
  children: React.ReactNode
  layout: 'lines' | 'background' | 'tag' | 'none'
}

export function AdShell({ children, layout = 'none' }: AdShellProps) {
  const AdShellVariant = {
    background: (
      <div className="base-pb-sm base-bg-neutral-high-600 base-rounded-md">
        <span className="base-block base-text-xxxs base-uppercase base-text-neutral-low-500 base-p-nano base-h-sm base-text-center base-font-open-sans">
          Publicidade
        </span>
        <div className="base-bg-neutral-high-600">{children}</div>
      </div>
    ),
    lines: (
      <div className="base-border-b-hairline base-border-b-neutral-low-400 base-pb-[11px]">
        <div className="base-flex base-items-center base-mb-nano">
          <span className="base-bg-neutral-low-400 base-grow base-h-[1px]"></span>
          <span className="base-text-neutral-low-400 base-text-little base-uppercase base-mx-nano base-my-0">
            Continua após a publicidade
          </span>
          <span className="base-bg-neutral-low-400 base-grow base-h-[1px]"></span>
        </div>
        <div className="base-bg-neutral-high-600">{children}</div>
      </div>
    ),
    none: <>{children}</>,
    tag: (
      <div>
        <span className="base-block base-text-xxxs base-uppercase base-text-neutral-low-500 base-mb-nano base-font-open-sans">
          Publicidade
        </span>
        <div className="base-bg-neutral-high-600">{children}</div>
      </div>
    ),
  }[layout]
  return AdShellVariant
}
