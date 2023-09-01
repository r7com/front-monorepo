import { SvgIcon } from './svg-icon'
import { SvgIcons } from './svg-icon.types'

describe(SvgIcon.name, () => {
  it('should renders all "color" variant options', () => {
    cy.mount(
      <>
        <SvgIcon iconName="circle-info" color="primary" title="icon 1" />
        <SvgIcon iconName="circle-info" color="secondary" title="icon 2" />
        <SvgIcon iconName="circle-info" color="tertiary" title="icon 3" />
        <SvgIcon iconName="circle-info" color="original" title="icon 4" fill="black" />
      </>,
    )

    cy.findByTitle('icon 1').should('exist')
    cy.findByTitle('icon 2').should('exist')
    cy.findByTitle('icon 3').should('exist')
    cy.findByTitle('icon 4').should('exist')
    cy.matchImage()
  })

  it('should renders all "size" variant options', () => {
    cy.mount(
      <>
        <SvgIcon iconName="circle-info" color="primary" title="icon 1" size="small" />
        <SvgIcon iconName="circle-info" color="primary" title="icon 2" size="medium" />
        <SvgIcon iconName="circle-info" color="primary" title="icon 3" size="default" />
      </>,
    )

    cy.findByTitle('icon 1').should('exist')
    cy.findByTitle('icon 2').should('exist')
    cy.findByTitle('icon 3').should('exist')
    cy.matchImage()
  })

  it('should not render svg when icon name not exist', () => {
    cy.mount(<SvgIcon iconName={'non-existent' as SvgIcons} color="primary" title="Informação" />)
    cy.findByTitle('Informação').should('not.exist')
  })

  it('should renders svg with aria-hidden=true when title does not exists', () => {
    cy.mount(<SvgIcon iconName="archive" color="primary" />)
    cy.get('svg').should('have.attr', 'aria-hidden', 'true')
  })
})
