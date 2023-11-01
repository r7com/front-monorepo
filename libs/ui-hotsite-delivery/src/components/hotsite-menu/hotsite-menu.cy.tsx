import { Hotsite } from './hotsite-menu'
import { menuData } from '../../mocks/data'

const CompleteHotsiteMenu = (
  <Hotsite label={menuData.label}>
    <Hotsite.List>
      {menuData.items.map(item => (
        <Hotsite.Item key={item.id}>
          {item.submenu ? (
            <>
              <Hotsite.Button id={item.id}>{item.name}</Hotsite.Button>
              <Hotsite.Submenu id={item.id}>
                {item.submenu.map(submenu => (
                  <Hotsite.SubmenuItem key={submenu.id}>
                    <Hotsite.Link href={submenu.url}>{submenu.name}</Hotsite.Link>
                  </Hotsite.SubmenuItem>
                ))}
              </Hotsite.Submenu>
            </>
          ) : (
            <Hotsite.Link href={item.url}>{item.name}</Hotsite.Link>
          )}
        </Hotsite.Item>
      ))}
    </Hotsite.List>
  </Hotsite>
)

describe(Hotsite.name, () => {
  beforeEach(() => cy.mount(CompleteHotsiteMenu))

  it('should be visible in small devices', () => {
    cy.viewport('iphone-se2')

    cy.findByLabelText(menuData.label).should('be.visible')
    cy.matchImage()
  })

  it('should be visible in large devices', () => {
    cy.viewport('macbook-11')

    cy.findByLabelText(menuData.label).should('be.visible')
    cy.matchImage()
  })
})

describe(`${Hotsite.name} - Interactions`, () => {
  beforeEach(() => cy.mount(CompleteHotsiteMenu))

  it('should show submenu on item hover - large devices', () => {
    cy.viewport('macbook-11')

    cy.findByRole('button', { name: /esportes/i }).trigger('mouseover')
    cy.findByRole('button', { name: /esportes/i })
      .siblings('ul')
      .should('be.visible')

    cy.findByRole('button', { name: /esportes/i }).trigger('mouseout')
    cy.findByRole('button', { name: /esportes/i })
      .siblings('ul')
      .should('not.be.visible')
  })

  it('should show submenu on item hover - small devices', () => {
    cy.viewport('iphone-se2')

    cy.findByRole('button', { name: /esportes/i }).click()
    cy.findByRole('button', { name: /esportes/i })
      .siblings('ul')
      .should('be.visible')

    cy.findByRole('button', { name: /esportes/i }).click()
    cy.findByRole('button', { name: /esportes/i })
      .siblings('ul')
      .should('not.be.visible')
  })
})
