import { Signature } from '../signature'

describe('Signature', () => {
  it('should render section name props', () => {
    cy.mount(
      <Signature>
        <Signature.Content>
          <Signature.Info
            author="do r7"
            color="#4766ac"
            sectionName="r7"
            sectionUrl="https://noticias.r7.com"
          />
          <Signature.Date published="2023-06-29T15:12:23Z" />
        </Signature.Content>
      </Signature>,
    )

    cy.findByRole('link', { name: /r7/i }).should('be.visible')
    cy.findByText(/do r7/i).should('be.visible')
    // Não existe um role para tag time
    cy.get('time').should('contain.text', '29/06/2023 - 12h12')
    cy.get('time').should('have.attr', 'datetime', '2023-06-29T15:12:23Z')
  })

  it('should render updated time', () => {
    cy.mount(
      <Signature>
        <Signature.Content>
          <Signature.Info
            author="do r7"
            color="#4766ac"
            sectionName="r7"
            sectionUrl="https://noticias.r7.com"
          />
          <Signature.Date published="2023-06-29T15:12:23Z" modified="2023-08-28T14:32:13.07Z" />
        </Signature.Content>
      </Signature>,
    )

    cy.get('time').eq(0).should('have.attr', 'datetime', '2023-06-29T15:12:23Z')
    cy.get('time').eq(0).should('contain.text', '29/06/2023 - 12h12')
    cy.get('time').eq(1).should('have.attr', 'datetime', '2023-08-28T14:32:13.07Z')
    cy.get('time').eq(1).should('contain.text', '(Atualizado em 28/08/2023 - 11h32)')
    cy.matchImage()
  })

  it('should render agencyImageUrl prop', () => {
    cy.mount(
      <Signature>
        <Signature.Agency
          url="https://agenciaestado.com.br"
          name="Agência Estado - R7"
          imageUrl="https://img.r7.com/images/logo-agencia-estado-09012020093353497?dimensions=50x50"
        ></Signature.Agency>
        <Signature.Content>
          <Signature.Info
            author="Agência Estado"
            color="#4766ac"
            sectionName="r7"
            sectionUrl="https://noticias.r7.com/agencia-estado"
          />
          <Signature.Date published="2023-06-29T15:12:23Z" modified="2023-08-28T14:32:13.07Z" />
        </Signature.Content>
      </Signature>,
    )

    cy.findByAltText(/agência estado - r7/i)
      .should('be.visible')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0)
    cy.findAllByTitle(/agência estado - r7/i).should('have.attr', 'target', '_blank')
    cy.findAllByTitle(/agência estado - r7/i).should('have.attr', 'rel', 'noreferrer')
    cy.matchImage()
  })
})
