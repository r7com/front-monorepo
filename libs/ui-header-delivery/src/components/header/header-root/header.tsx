import { HeaderProvider } from '../utils/provider/header-provider'
import { HeaderMainSection } from '../header-main-section/header-main-section'
import { HeaderSection } from '../header-section/header-section'

export type HeaderProps = {
  children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <HeaderProvider>
      <header className="flex flex-col">{children}</header>
    </HeaderProvider>
  )
}

/** Use this component to wrapp site logo, sidebar menu, navigation menu, social media, etc */
Header.MainSection = HeaderMainSection

/** Use this component to wrapp secondary contents, such as banners or hotsite related contents */
Header.Section = HeaderSection
