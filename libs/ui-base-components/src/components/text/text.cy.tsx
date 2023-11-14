import { Text } from './text'

describe(Text.name, () => {
  const text = 'Teste'
  it('using fontSize', () => {
    cy.mount(
      <>
        <Text fontSize="little">{text}</Text>
        <Text fontSize="xxxs">{text}</Text>
        <Text fontSize="xxs">{text}</Text>
        <Text fontSize="xs">{text}</Text>
        <Text fontSize="sm">{text}</Text>
        <Text fontSize="md">{text}</Text>
        <Text fontSize="lg">{text}</Text>
        <Text fontSize="xl">{text}</Text>
        <Text fontSize="xxl">{text}</Text>
        <Text fontSize="xxxl">{text}</Text>
      </>,
    )
    cy.findAllByText(text).each(element => {
      expect(element.text()).to.be.equal(text)
    })
    cy.findAllByText(text).should('be.visible')
    cy.matchImage()
  })

  it('using fontWeight', () => {
    cy.mount(
      <>
        <Text fontWeight="light">{text}</Text>
        <Text fontWeight="normal">{text}</Text>
        <Text fontWeight="semibold">{text}</Text>
        <Text fontWeight="bold">{text}</Text>
      </>,
    )
    cy.findAllByText(text).each(element => {
      expect(element.text()).to.be.equal(text)
    })
    cy.findAllByText(text).should('be.visible')
    cy.matchImage()
  })

  it('using fontFamily', () => {
    cy.mount(
      <>
        <Text fontFamily="openSans">{text}</Text>
        <Text fontFamily="playfair">{text}</Text>
      </>,
    )
    cy.findAllByText(text).each(element => {
      expect(element.text()).to.be.equal(text)
    })
    cy.findAllByText(text).should('be.visible')
    cy.matchImage()
  })

  it('using color', () => {
    cy.mount(
      <>
        <Text color="neutralLow">{text}</Text>
        <div className="base-bg-neutral-low-600">
          <Text color="neutralHigh">{text}</Text>
        </div>
      </>,
    )
    cy.findAllByText(text).each(element => {
      expect(element.text()).to.be.equal(text)
    })
    cy.findAllByText(text).should('be.visible')
    cy.matchImage()
  })
})
