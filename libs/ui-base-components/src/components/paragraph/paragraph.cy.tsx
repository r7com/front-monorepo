import { Paragraph } from './paragraph'

describe(Paragraph.name, () => {
  const text = 'Test'
  it('using fontSize', () => {
    cy.mount(
      <>
        <Paragraph fontSize="little">{text}</Paragraph>
        <Paragraph fontSize="xxxs">{text}</Paragraph>
        <Paragraph fontSize="xxs">{text}</Paragraph>
        <Paragraph fontSize="xs">{text}</Paragraph>
        <Paragraph fontSize="sm">{text}</Paragraph>
        <Paragraph fontSize="md">{text}</Paragraph>
        <Paragraph fontSize="lg">{text}</Paragraph>
        <Paragraph fontSize="xl">{text}</Paragraph>
        <Paragraph fontSize="xxl">{text}</Paragraph>
        <Paragraph fontSize="xxxl">{text}</Paragraph>
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
        <Paragraph fontWeight="light">{text}</Paragraph>
        <Paragraph fontWeight="normal">{text}</Paragraph>
        <Paragraph fontWeight="semibold">{text}</Paragraph>
        <Paragraph fontWeight="bold">{text}</Paragraph>
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
        <Paragraph fontFamily="openSans">{text}</Paragraph>
        <Paragraph fontFamily="primary">{text}</Paragraph>
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
        <Paragraph color="neutralLow">{text}</Paragraph>
        <div className="base-bg-neutral-low-600">
          <Paragraph color="neutralHigh">{text}</Paragraph>
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
