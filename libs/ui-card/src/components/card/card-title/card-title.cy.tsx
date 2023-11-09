import { Card } from '../'
describe(Card.Title.name, () => {
  it('should render default title', () => {
    cy.mount(<Card.Title>I am a title</Card.Title>)
    cy.findByRole('heading', { level: 3 }).should('be.visible')
  })

  it('should render title with link', () => {
    cy.mount(
      <Card.Title
        withLink
        newsUrl="https://www.google.com"
        newsUrlTitle="The McRib is back (again): How a McNugget shortage led to its rise"
      >
        I am a title
      </Card.Title>,
    )

    cy.findByRole('link').should('be.visible')
    cy.findByRole('heading', { level: 3 }).should('be.visible')
  })

  it('should render all "color" variants', () => {
    cy.mount(
      <body className="bg-brand-primary-500">
        <Card.Title color="high">I am a title 1</Card.Title>
        <Card.Title color="low">I am a title 2</Card.Title>
      </body>,
    )
    cy.findByRole('heading', { name: /I am a title 1/i }).should('be.visible')
    cy.findByRole('heading', { name: /I am a title 2/i }).should('be.visible')
    cy.matchImage()
  })

  it('should render all "as" variants', () => {
    cy.mount(
      <>
        <Card.Title as="h1">I am a title 1</Card.Title>
        <Card.Title as="h2">I am a title 2</Card.Title>
        <Card.Title as="h3">I am a title 3</Card.Title>
        <Card.Title as="h4">I am a title 4</Card.Title>
        <Card.Title as="h5">I am a title 5</Card.Title>
        <Card.Title as="h6">I am a title 6</Card.Title>
      </>,
    )
    cy.findByRole('heading', { level: 1 }).should('be.visible')
    cy.findByRole('heading', { level: 2 }).should('be.visible')
    cy.findByRole('heading', { level: 3 }).should('be.visible')
    cy.findByRole('heading', { level: 4 }).should('be.visible')
    cy.findByRole('heading', { level: 5 }).should('be.visible')
    cy.findByRole('heading', { level: 6 }).should('be.visible')
  })

  it('should render all "fontStyle" variants in desktop', () => {
    cy.viewport('macbook-11')
    cy.mount(
      <>
        <Card.Title fontStyle="heading-level-1">I am a title 1</Card.Title>
        <Card.Title fontStyle="heading-level-2">I am a title 2</Card.Title>
        <Card.Title fontStyle="heading-level-3">I am a title 3</Card.Title>
        <Card.Title fontStyle="heading-level-4">I am a title 4</Card.Title>
      </>,
    )
    cy.findByRole('heading', { name: /I am a title 1/i }).should('be.visible')
    cy.findByRole('heading', { name: /I am a title 2/i }).should('be.visible')
    cy.findByRole('heading', { name: /I am a title 3/i }).should('be.visible')
    cy.findByRole('heading', { name: /I am a title 4/i }).should('be.visible')
    cy.matchImage()
  })

  it('should render all "fontStyle" variants in mobile', () => {
    cy.viewport('iphone-se2')
    cy.mount(
      <>
        <Card.Title fontStyle="heading-level-1">I am a title 1</Card.Title>
        <Card.Title fontStyle="heading-level-2">I am a title 2</Card.Title>
        <Card.Title fontStyle="heading-level-3">I am a title 3</Card.Title>
        <Card.Title fontStyle="heading-level-4">I am a title 4</Card.Title>
      </>,
    )
    cy.findByRole('heading', { name: /I am a title 1/i }).should('be.visible')
    cy.findByRole('heading', { name: /I am a title 2/i }).should('be.visible')
    cy.findByRole('heading', { name: /I am a title 3/i }).should('be.visible')
    cy.findByRole('heading', { name: /I am a title 4/i }).should('be.visible')
    cy.matchImage()
  })
})
