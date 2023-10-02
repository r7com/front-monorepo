import { SectionHeading } from './'

describe(`${SectionHeading.Root.name} variants`, () => {
  it('should render', () => {
    cy.mount(
      <SectionHeading.Root color="red">
        <SectionHeading.Title>
          <a href="/">Entretenimento</a>
        </SectionHeading.Title>

        <SectionHeading.Line />

        <SectionHeading.Tag href="#" title="Flavio Ricco">
          Flavio Ricco
        </SectionHeading.Tag>

        <SectionHeading.Tag href="#" title="Keila Jimenez">
          Keila Jimenez
        </SectionHeading.Tag>

        <SectionHeading.Tag href="#" title="Fabíola Reipert">
          Fabíola Reipert
        </SectionHeading.Tag>
      </SectionHeading.Root>,
    )
    cy.findByRole('status').should('be.visible')
    cy.matchImage()
  })
})
