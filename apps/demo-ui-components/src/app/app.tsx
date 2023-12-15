import '@r7/ui-header-delivery/css'
import '@r7/ui-base-components/css'
import { Route, Routes } from 'react-router-dom'
import { UiFooterDelivery, UiSectionMenu, UiArticleDelivery, UiLayout } from './routes'
import { MENU_DATA } from './mocks/MENU_DATA'
import { SIDEBAR_DATA } from './mocks/SIDEBAR_DATA'
import { Header, Menu, Sidebar } from '@r7/ui-header-delivery'
import { UiSvg } from '@r7/ui-svg'
import { ArticleProvider } from '@r7/ui-article-delivery'

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
      <ArticleProvider>
        <Routes>
          <Route path="/" />
          <Route path="/ui-footer-delivery" element={<UiFooterDelivery />} />
          <Route path="/ui-article-delivery" element={<UiArticleDelivery />} />
          <Route path="/ui-section-menu" element={<UiSectionMenu />} />
          <Route path="/ui-layout" element={<UiLayout />} />
        </Routes>
        {/* END: routes */}
        <UiSvg />
      </ArticleProvider>
    </>
  )
}

export default App
