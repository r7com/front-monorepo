import { Avatar } from './avatar'

describe(Avatar.name, () => {
  it('should renders avatar with image variant with fallback image', () => {
    cy.mount(<Avatar></Avatar>)
    cy.get('img').should('be.visible')
    cy.matchImage()
  })

  it('should renders avatar with image variant', () => {
    cy.mount(<Avatar type="default"></Avatar>)
    cy.get('img').should('be.visible')
    cy.matchImage()
  })

  it('should renders avatar with image variant with determined source', () => {
    const testSrc =
      'https://img.r7.com/images/r7-30072019142631584?crop_position=c&dimensions=32x32'

    cy.mount(<Avatar type="default" sourceUrl={testSrc}></Avatar>)
    cy.get('img').invoke('attr', 'src').should('eq', testSrc)
    cy.matchImage()
  })

  it('renders avatar enumerator variant with default value +1', () => {
    cy.mount(<Avatar type="enumerator"></Avatar>)
    cy.get('div').contains('+1')
    cy.matchImage()
  })

  it('renders avatar enumerator variant with determined enumerator value', () => {
    const testValue = 3

    cy.mount(<Avatar type="enumerator" enumValue={testValue}></Avatar>)
    cy.get('div').contains(`+${testValue}`)
    cy.matchImage()
  })
})
