import { SvgIcon } from './svg-icon'

describe(SvgIcon.name, () => {
  it('render icon with default size', () => {
    cy.mount(<SvgIcon iconName="github" />)
    cy.get('svg').should('be.visible')
    cy.matchImage()
  })
})
