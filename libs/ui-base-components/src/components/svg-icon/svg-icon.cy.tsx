import { SvgIcon } from './svg-icon'

describe(SvgIcon.name, () => {
  it('render icon with default size', () => {
    cy.mount(<SvgIcon iconName="circle-info" color="primary" title="Informação" />)
    cy.findByTitle('Informação').should('exist')
    cy.matchImage()
  })

  it('should not render svg when icon name not exist', () => {
    cy.mount(<SvgIcon iconName="non-existent" color="primary" title="Informação" />)
    cy.findByTitle('Informação').should('not.exist')
    cy.matchImage()
  })
})
