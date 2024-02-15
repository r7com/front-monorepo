type ArticleAsideProps = {
  children: React.ReactNode
}

export function ArticleAside({ children }: ArticleAsideProps) {
  return (
    <aside className="md:layout-col-span-24 lg:layout-col-span-7 layout-flex layout-flex-col layout-gap-xxs">
      {children}
    </aside>
  )
}
