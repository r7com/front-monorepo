import { Route, Routes } from 'react-router-dom'
import { UiFooterDelivery, UiSectionMenu, UiArticleDelivery } from './routes'
import { ArticleProvider } from '@r7/ui-article-delivery'
import { Header, Menu } from '@r7/ui-header-delivery'

export function App() {
  return (
    <ArticleProvider>
      <Header>
        <Header.MainSection>
          <Header.Logo link="https://www.r7.com" image={'asdasda'} />

          <Menu>
            <Menu.List>
              <Menu.Item>
                <Menu.RouterLink to="/">Home</Menu.RouterLink>
              </Menu.Item>
              <Menu.Item>
                <Menu.RouterLink to="/ui-footer-delivery">Footer Delivery</Menu.RouterLink>
              </Menu.Item>
              <Menu.Item>
                <Menu.RouterLink to="/ui-article-delivery">Article Delivery</Menu.RouterLink>
              </Menu.Item>
              <Menu.Item>
                <Menu.RouterLink to="/ui-section-menu">Section Menu</Menu.RouterLink>
              </Menu.Item>
            </Menu.List>
          </Menu>
        </Header.MainSection>
      </Header>
      <br />
      <hr />
      <br />

      <Routes>
        <Route path="/" />
        <Route path="/ui-footer-delivery" element={<UiFooterDelivery />} />
        <Route path="/ui-article-delivery" element={<UiArticleDelivery />} />
        <Route path="/ui-section-menu" element={<UiSectionMenu />} />
      </Routes>
      {/* END: routes */}
    </ArticleProvider>
  )
}

export default App
