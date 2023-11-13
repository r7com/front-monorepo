export type SubmenuItemProps = {
  children: React.ReactNode
}

export function SubmenuItem({ children }: SubmenuItemProps) {
  return (
    <li className="py-[19px] px-xxxs bg-neutral-high-400 hover:bg-neutral-high-500 transition-colors">
      {children}
    </li>
  )
}
