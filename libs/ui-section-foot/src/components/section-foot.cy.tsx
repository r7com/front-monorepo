import { SectionFoot } from './'

const sectionFoot = (
  <SectionFoot bg="#556373">
    <SectionFoot.Line />

    <SectionFoot.Link href="https://www.r7.com/" title="Mais a fazenda">
      <SectionFoot.Title>MAIS A FAZENDA</SectionFoot.Title>
    </SectionFoot.Link>
  </SectionFoot>
)

describe(`${SectionFoot.name}`, () => {
  beforeEach(() => {
    cy.mount(sectionFoot)
  })

  it('should have a separator', () => {
    cy.findByRole('separator').should('be.visible')
  })

  it('should render its link', () => {
    cy.findByRole('link', { name: /MAIS A FAZENDA/i }).should('be.visible')
  })

  it('should have a title', () => {
    cy.findByRole('presentation').should('be.visible')
  })
})

describe(`${SectionFoot.name} - Viewport`, () => {
  beforeEach(() => {
    cy.mount(sectionFoot)
  })

  it('should match the section foot on the desktop', () => {
    cy.viewport('macbook-11')
    cy.matchImage()
  })

  it('should match the section foot on the mobile', () => {
    cy.viewport('iphone-se2')
    cy.matchImage()
  })
})
