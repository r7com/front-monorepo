import { SvgIcon } from './svg-icon'

const svgIconSelector = '[data-testid="svg-icon"]'

describe(SvgIcon.name, () => {
  it('render icon with default size', () => {
    cy.mount(<SvgIcon iconName="circle-info" />)
    cy.get(svgIconSelector).should('be.visible')
    cy.matchImage()
  })
})
