type ArticleMainProps = {
  children: React.ReactNode
}

export function ArticleMain({ children }: ArticleMainProps) {
  return (
    <main className="md:layout-col-span-24 lg:layout-col-span-17 layout-flex layout-flex-col layout-gap-xxs">
      {children}
    </main>
  )
}
