import { SectionFoot } from './'

const SectionFootCy = (
  <SectionFoot bg="#556373">
    <SectionFoot.Line />

    <SectionFoot.Link href="https://www.r7.com/" title="Mais a fazenda">
      Mais a fazenda
    </SectionFoot.Link>
  </SectionFoot>
)

describe(`${SectionFoot.name}`, () => {
  beforeEach(() => {
    cy.mount(SectionFootCy)
  })

  it('should have a separator', () => {
    cy.findByRole('separator').should('be.visible')
  })

  it('should render its link', () => {
    cy.findByRole('link', { name: /Mais a fazenda/i }).should('be.visible')
  })
})

describe(`${SectionFoot.name} - Viewport`, () => {
  beforeEach(() => {
    cy.mount(SectionFootCy)
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
