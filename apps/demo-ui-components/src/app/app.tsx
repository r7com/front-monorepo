import '@r7/ui-header-delivery/css'
import '@r7/ui-base-components/css'
import '@r7/ui-base-components/fonts'
import { Route, Routes } from 'react-router-dom'
import {
  UiFooterDelivery,
  UiSectionMenu,
  UiArticleDelivery,
  UiBaseComponents,
  UiLayout,
  UiCard,
  UiSection,
  UiTvGuide,
} from './routes'
import { MENU_DATA } from './mocks/MENU_DATA'
import { SIDEBAR_DATA } from './mocks/SIDEBAR_DATA'
import { Header, Menu, Sidebar } from '@r7/ui-header-delivery'
import { ArticleProvider } from '@r7/ui-article-delivery'
import { PrivacyBox, SvgSprites } from '@r7/ui-base-components'
export function App() {
  return (
    <>
      <Header>
        <Header.Fixed>
          <Header.MainSection>
            <Header.Logo
              link="https://www.r7.com"
              logoUrl="https://static.themebuilder.aws.arc.pub/newr7-sandbox/1698842893138.svg"
              alt="Portal R7"
            />

            <Sidebar.Toggle>menu</Sidebar.Toggle>
            <Sidebar>
              <Sidebar.Search />

              <Sidebar.Category title={'Conheça também'}>
                <Sidebar.List label={'list'}>
                  <Sidebar.Item>
                    <Header.PlayPlusLogo
                      alt="PlayPlus"
                      logoUrl="https://static.themebuilder.aws.arc.pub/newr7-sandbox/1707322344315.svg"
                      link="https://www.playplus.com/home"
                      color="colorful"
                    />
                  </Sidebar.Item>
                </Sidebar.List>
              </Sidebar.Category>

              {SIDEBAR_DATA.map(({ category, data, id }) => {
                return (
                  <Sidebar.Category key={id} title={category}>
                    <Sidebar.List label={category}>
                      {data.map(({ id, text, submenu, title, url }) => {
                        return (
                          <Sidebar.Item key={id}>
                            {submenu?.length ? (
                              <>
                                <Sidebar.Button id={id}>{text}</Sidebar.Button>
                                <Sidebar.Submenu id={id}>
                                  <Sidebar.List label={text}>
                                    {submenu.map(({ id, text, title, url }) => {
                                      return (
                                        <Sidebar.Item key={id}>
                                          <Sidebar.Link title={title} href={url}>
                                            {text}
                                          </Sidebar.Link>
                                        </Sidebar.Item>
                                      )
                                    })}
                                  </Sidebar.List>
                                </Sidebar.Submenu>
                              </>
                            ) : (
                              <Sidebar.Link title={title} href={url}>
                                {text}
                              </Sidebar.Link>
                            )}
                          </Sidebar.Item>
                        )
                      })}
                    </Sidebar.List>
                  </Sidebar.Category>
                )
              })}
            </Sidebar>

            <Menu>
              <Menu.List>
                {MENU_DATA.map(({ id, text, title, url }) => {
                  return (
                    <Menu.Item key={id}>
                      <Menu.Link href={url} title={title}>
                        {text}
                      </Menu.Link>
                    </Menu.Item>
                  )
                })}
              </Menu.List>
            </Menu>
            <Header.PlayPlusLogo
              alt="PlayPLus"
              link="https://www.playplus.com/home"
              logoUrl="https://static.themebuilder.aws.arc.pub/newr7-sandbox/1707335463663.svg"
              color="white"
            />
            <Header.SocialList>
              <Header.SocialItem
                socialName="facebook"
                socialUrl="https://www.facebook.com/portalr7"
              />
              <Header.SocialItem socialName="twitter" socialUrl="https://twitter.com/portalr7" />
              <Header.SocialItem
                socialName="instagram"
                socialUrl="https://instagram.com/portalr7"
              />
            </Header.SocialList>
            <Header.SearchToggle />
            <Header.Search />
          </Header.MainSection>
        </Header.Fixed>
      </Header>
      <br />
      <br />
      <Routes>
        <Route path="/" />
        <Route path="/ui-footer-delivery" element={<UiFooterDelivery />} />
        <Route
          path="/ui-article-delivery"
          element={
            <ArticleProvider>
              <UiArticleDelivery />
            </ArticleProvider>
          }
        />
        <Route path="/ui-section-menu" element={<UiSectionMenu />} />
        <Route path="/ui-base-components" element={<UiBaseComponents />} />
        <Route path="/ui-layout" element={<UiLayout />} />
        <Route path="/ui-card" element={<UiCard />} />
        <Route path="/ui-section" element={<UiSection />} />
        <Route path="/ui-tv-guide" element={<UiTvGuide />} />
      </Routes>
      <PrivacyBox link="https://www.google.com.br/" />
      <SvgSprites />
      {/* END: routes */}
    </>
  )
}

export default App
