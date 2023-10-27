import { Card } from '../'

describe(Card.HatTitle.name, () => {
  it('should render hat', () => {
    cy.mount(<Card.HatTitle>I am a hat</Card.HatTitle>)
    cy.findByText('I am a hat').should('be.visible')
    cy.matchImage()
  })

  it('should render all "color" variants of title', () => {
    cy.mount(
      <body className="bg-brand-primary-500">
        <Card.HatTitle color="high-bold">I am a hat</Card.HatTitle>
        <Card.HatTitle color="low">I am a hat</Card.HatTitle>
        <Card.HatTitle color="high">I am a hat</Card.HatTitle>
      </body>,
    )
    cy.findAllByText('I am a hat').should('be.visible').should('have.length', 3)
    cy.matchImage()
  })
})

describe(Card.HatImage.name, () => {
  it('should render hat image', () => {
    cy.mount(
      <Card.HatImage
        description="I am a hat image"
        imageSource="http://img.r7.com/images/concurso-publico-14032022123440824?dimensions=128x128"
      />,
    )
    cy.findByRole('img').should('be.visible')
    cy.matchImage()
  })
})

describe(Card.HatWrapper.name, () => {
  it('should render hat image and hat title composition', () => {
    cy.mount(
      <Card.HatWrapper>
        <Card.HatImage
          description="I am a hat image"
          imageSource="http://img.r7.com/images/concurso-publico-14032022123440824?dimensions=128x128"
        />
        <Card.HatTitle>I am a hat</Card.HatTitle>
      </Card.HatWrapper>,
    )
    cy.matchImage()
  })

  it('should render "type" variant composition', () => {
    cy.mount(
      <Card.HatWrapper type="warning">
        <Card.HatImage
          description="I am a hat image"
          imageSource="http://img.r7.com/images/concurso-publico-14032022123440824?dimensions=128x128"
        />
        <Card.HatTitle color="high-bold">I am a hat</Card.HatTitle>
      </Card.HatWrapper>,
    )
    cy.matchImage()
  })
})