import { Bullet } from './bullet'

describe(Bullet.name, () => {
  const text = 'Testando disclaimer'

  beforeEach(() => {
    cy.mount(<Bullet text={text} variant={'waiting'} />)
  })

  it('uses custom text for disclaimer paragraph', () => {
    cy.get('p').should('have.text', text)
  })

  it('should match the snapshot', () => {
    cy.matchImage()
  })
})
