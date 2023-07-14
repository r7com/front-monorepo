import { SvgIcon } from './svg-icon'

describe(SvgIcon.name, () => {
  it('render icon with default size', () => {
    cy.mount(<SvgIcon iconName="github" />)
    cy.get('svg').should('have.attr', 'width', '50px').and('have.attr', 'height', '50px')
    cy.matchImage()
  })

  it('render icon with custom sizes', () => {
    cy.mount(<SvgIcon iconName="github" svgProp={{ width: '100px', height: '100px' }} />)
    cy.get('svg').should('have.attr', 'width', '100px').and('have.attr', 'height', '100px')
    cy.matchImage()
  })
})
