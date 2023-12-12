import { ConditionalLink } from '../conditional-link'
import { Breadcrumb } from './'
import { MENU_DATA } from './mocks/MENU_DATA'

describe('Breadcrumb', () => {
  it('should render Breadcrumb mobile', () => {
    cy.mount(
      <Breadcrumb>
        <Breadcrumb.List>
          {MENU_DATA.map(({ id, text, url, title }) => {
            const lastItem = MENU_DATA[MENU_DATA.length - 1].id === id
            return (
              <Breadcrumb.Item key={id}>
                <ConditionalLink
                  href={url}
                  title={`Ir para a página de ${title}`}
                  aria-current={lastItem ? 'page' : 'false'}
                >
                  {text}
                </ConditionalLink>
              </Breadcrumb.Item>
            )
          })}
        </Breadcrumb.List>
      </Breadcrumb>,
    )
    cy.viewport('iphone-xr')
    cy.matchImage()
  })

  it('should render Breadcrumb Desktop', () => {
    cy.mount(
      <Breadcrumb>
        <Breadcrumb.List>
          {MENU_DATA.map(({ id, text, url, title }) => {
            const lastItem = MENU_DATA[MENU_DATA.length - 1].id === id
            return (
              <Breadcrumb.Item key={id}>
                <ConditionalLink
                  href={url}
                  title={`Ir para a página de ${title}`}
                  aria-current={lastItem ? 'page' : 'false'}
                >
                  {text}
                </ConditionalLink>
              </Breadcrumb.Item>
            )
          })}
        </Breadcrumb.List>
      </Breadcrumb>,
    )
    cy.viewport(1024, 768)
    cy.matchImage()
  })

  it('should render structure Breadcrumb', () => {
    cy.mount(
      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <ConditionalLink href="https://noticias.r7.com/" title="Ir para a página de Noticias">
              Noticias
            </ConditionalLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>,
    )
    cy.findByRole('list').within(() => {
      cy.findByRole('listitem').within(() => {
        cy.findByRole('link', { name: /Noticias/i })
      })
    })
  })
})
