type AsideProps = {
  children: React.ReactNode
}

export function Aside({ children }: AsideProps) {
  return (
    <aside className="md:layout-col-span-24 lg:layout-col-span-7 layout-flex layout-flex-col layout-gap-y-xxs">
      {children}
    </aside>
  )
}
