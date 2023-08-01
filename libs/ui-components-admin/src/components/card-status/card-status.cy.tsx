import { CardStatus, CardStatusProps } from './card-status'

describe(CardStatus.name, () => {
  const text = 'Card Status'
  const status = ['success', 'error', 'helper', 'info'] satisfies CardStatusProps['variant'][]

  status.forEach(res => {
    it(`Check status of ${res}`, () => {
      cy.mount(<CardStatus text={text} variant={res} />)
      cy.get('div').should('be.visible')
      cy.get('div > p').should('have.text', text)
      cy.matchImage()
    })
  })
})
