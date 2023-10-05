import { SvgIcon } from '@r7/ui-base-components'

export type SidebarButtonProps = {
  children: React.ReactNode
  id: string
}

export function SidebarButton({ children, id }: SidebarButtonProps) {
  return (
    <button
      type="button"
      className="bg-none flex justify-between items-center w-full text-neutral-low-500 uppercase"
    >
      {children}
      <SvgIcon iconName="chevron-right" className="fill-neutral-high-600" width={13} height={13} />
    </button>
  )
}
