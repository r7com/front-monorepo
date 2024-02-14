type MainProps = {
  children: React.ReactNode
}

export function Main({ children }: MainProps) {
  return <main className="md:layout-col-span-24 lg:layout-col-span-17">{children}</main>
}
