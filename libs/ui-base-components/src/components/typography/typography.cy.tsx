import { Typography } from './typography'
import './typography.css'

describe(Typography.name, () => {
  it('using ClassName', () => {
    cy.mount(<Typography className="typography">{text}</Typography>)
    cy.findAllByText(text).each(element => {
      expect(element.text()).to.be.equal(text)
    })
    cy.findAllByText(text).should('be.visible')
    cy.matchImage()
  })

  const text = 'Typography'
  it('using fontSize', () => {
    cy.mount(
      <>
        <Typography fontSize="little">{text}</Typography>
        <Typography fontSize="xxxs">{text}</Typography>
        <Typography fontSize="xxs">{text}</Typography>
        <Typography fontSize="xs">{text}</Typography>
        <Typography fontSize="sm">{text}</Typography>
        <Typography fontSize="md">{text}</Typography>
        <Typography fontSize="lg">{text}</Typography>
        <Typography fontSize="xl">{text}</Typography>
        <Typography fontSize="xxl">{text}</Typography>
        <Typography fontSize="xxxl">{text}</Typography>
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
        <Typography fontWeight="light">{text}</Typography>
        <Typography fontWeight="normal">{text}</Typography>
        <Typography fontWeight="semibold">{text}</Typography>
        <Typography fontWeight="bold">{text}</Typography>
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
        <Typography fontFamily="openSans">{text}</Typography>
        <Typography fontFamily="playfair">{text}</Typography>
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
        <Typography color="neutralLow">{text}</Typography>
        <div className="base-bg-neutral-low-600">
          <Typography color="neutralHigh">{text}</Typography>
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
