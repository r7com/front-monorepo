export type SubmenuItemProps = {
  children: React.ReactNode
}

export function SubmenuItem({ children }: SubmenuItemProps) {
  return (
    <li className="smenu-py-[19px] smenu-px-xxxs smenu-bg-neutral-high-400 hover:smenu-bg-neutral-high-500 smenu-transition-colors">
      {children}
    </li>
  )
}
