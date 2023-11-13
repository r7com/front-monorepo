import { SectionMenu } from './section-menu'
import { menuData } from '../mocks/data'

const CompleteSectionMenu = (
  <SectionMenu label={menuData.label}>
    <SectionMenu.List>
      {menuData.items.map(item => (
        <SectionMenu.Item key={item.id}>
          {item.submenu ? (
            <>
              <SectionMenu.Button id={item.id}>{item.name}</SectionMenu.Button>
              <SectionMenu.Submenu id={item.id}>
                {item.submenu.map(submenu => (
                  <SectionMenu.SubmenuItem key={submenu.id}>
                    <SectionMenu.Link href={submenu.url}>{submenu.name}</SectionMenu.Link>
                  </SectionMenu.SubmenuItem>
                ))}
              </SectionMenu.Submenu>
            </>
          ) : (
            <SectionMenu.Link href={item.url}>{item.name}</SectionMenu.Link>
          )}
        </SectionMenu.Item>
      ))}
    </SectionMenu.List>
  </SectionMenu>
)

describe(SectionMenu.name, () => {
  beforeEach(() => cy.mount(CompleteSectionMenu))

  it('should be visible in small devices', () => {
    cy.viewport('iphone-se2')

    cy.findByRole('navigation').should('be.visible')
    cy.matchImage()
  })

  it('should be visible in large devices', () => {
    cy.viewport('macbook-11')

    cy.findByRole('navigation').should('be.visible')
    cy.matchImage()
  })
})

describe(`${SectionMenu.name} - Interactions`, () => {
  beforeEach(() => cy.mount(CompleteSectionMenu))

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
