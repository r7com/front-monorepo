import { Text } from './text'

const textSelector = '[data-testid="text"]'

describe(Text.name, () => {
  it('uses custom text for disclaimer paragraph', () => {
    cy.mount(
      <Text
        children="Testando"
        fontFamily="font-times-new-roman"
        fontSize="text-little"
        color="text-feedback-success-400"
        fontWeight="font-bold"
        as="h1"
      />,
    )
    cy.get(`${textSelector}`).should('be.visible')
    cy.matchImage()
  })
})
