import { Avatar } from './avatar'

const avatarSelector = '[data-testid="avatar"]'

describe(Avatar.name, () => {
  it('should renders avatar with image variant with fallback image', () => {
    cy.mount(<Avatar />)
    cy.get(avatarSelector).should('be.visible')
    cy.matchImage()
  })

  it('should renders avatar with image variant', () => {
    cy.mount(<Avatar type="default" />)
    cy.get(avatarSelector).should('be.visible')
    cy.matchImage()
  })

  it('should renders avatar with image variant with determined source', () => {
    const testSrc =
      'https://img.r7.com/images/r7-30072019142631584?crop_position=c&dimensions=32x32'

    cy.mount(<Avatar type="default" sourceUrl={testSrc} />)
    cy.get(`${avatarSelector} > img`).invoke('attr', 'src').should('eq', testSrc)
    cy.matchImage()
  })

  it('renders avatar enumerator variant with default value +1', () => {
    cy.mount(<Avatar type="enumerator" />)
    cy.get(avatarSelector).contains('+1')
    cy.matchImage()
  })

  it('renders avatar enumerator variant with determined enumerator value', () => {
    const testValue = 3

    cy.mount(<Avatar type="enumerator" enumValue={testValue} />)
    cy.get(avatarSelector).contains(`+${testValue}`)
    cy.matchImage()
  })
})
