import { HeaderProvider } from '../utils/provider/header-provider'
import { HeaderMainSection } from '../header-main-section/header-main-section'
import { HeaderSection } from '../header-section/header-section'
import { HeaderLogo } from '../header-logo/header-logo'
import { HeaderSearch } from '../header-search/header-search'
import { HeaderSearchToggle } from '../header-search-toggle/header-search-toggle'
import { HeaderSocialList } from '../header-social-list/header-social-list'
import { HeaderSocialItem } from '../header-social-item/header-social-item'

export type HeaderProps = {
  children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <HeaderProvider>
      <header className="header-flex header-flex-col">{children}</header>
    </HeaderProvider>
  )
}

/** Use this component to wrapp site logo, sidebar menu, navigation menu, social media, etc */
Header.MainSection = HeaderMainSection

/** Use this component to wrapp secondary contents, such as banners or hotsite related contents */
Header.Section = HeaderSection

Header.Logo = HeaderLogo
Header.Search = HeaderSearch
Header.SearchToggle = HeaderSearchToggle
Header.SocialList = HeaderSocialList
Header.SocialItem = HeaderSocialItem
