import { SectionHeading } from './'

const SectionHeadingTitle = (
  <SectionHeading.Root color="#F78714">
    <SectionHeading.Title>
      <a href="/">Entretenimento</a>
    </SectionHeading.Title>

    <SectionHeading.Line />

    <SectionHeading.Tags>
      <SectionHeading.Tag href="#" title="Flavio Ricco">
        Flavio Ricco
      </SectionHeading.Tag>

      <SectionHeading.Tag href="#" title="Keila Jimenez">
        Keila Jimenez
      </SectionHeading.Tag>

      <SectionHeading.Tag href="#" title="Fabíola Reipert">
        Fabíola Reipert
      </SectionHeading.Tag>
    </SectionHeading.Tags>
  </SectionHeading.Root>
)

const SectionHeadingImage = (
  <SectionHeading.Root color="#4766ac">
    <a href="/">
      <SectionHeading.Image
        src="https://img.r7.com/images/jr-24h-18112019115830166?resize=110x70&crop=200x127+0+37"
        alt="Jornal da Record"
      />
    </a>

    <SectionHeading.Line />

    <SectionHeading.Tags>
      <SectionHeading.Tag href="#" title="Christina Lemos">
        Christina Lemos
      </SectionHeading.Tag>

      <SectionHeading.Tag href="#" title="Thiago Nolasco">
        Thiago Nolasco
      </SectionHeading.Tag>

      <SectionHeading.Tag href="#" title="Luiz Fara Monteiro">
        Luiz Fara Monteiro
      </SectionHeading.Tag>
    </SectionHeading.Tags>
  </SectionHeading.Root>
)

describe(`SectionHeading`, () => {
  beforeEach(() => {
    cy.mount(SectionHeadingTitle)
  })

  it('should have a separator', () => {
    cy.findByRole('separator').should('be.visible')
  })

  it('should render its tags', () => {
    cy.findByRole('link', { name: /Flavio Ricco/i }).should('be.visible')
    cy.findByRole('link', { name: /Keila Jimenez/i }).should('be.visible')
    cy.findByRole('link', { name: /Fabíola Reipert/i }).should('be.visible')
  })
})

describe(`SectionHeading - Title`, () => {
  beforeEach(() => {
    cy.mount(SectionHeadingTitle)
  })

  it('should match desktop image with text as title', () => {
    cy.viewport('macbook-11')
    cy.matchImage()
  })

  it('should match mobile image with text as title', () => {
    cy.viewport('iphone-se2')
    cy.matchImage()
  })

  it('should have a title when title is text', () => {
    cy.findByRole('heading').should('be.visible')
  })
})

describe(`SectionHeading - Image`, () => {
  beforeEach(() => {
    cy.mount(SectionHeadingImage)
  })

  it('should match desktop image with image as title', () => {
    cy.viewport('macbook-11')
    cy.matchImage()
  })

  it('should match mobile image with image as title', () => {
    cy.viewport('iphone-se2')
    cy.matchImage()
  })

  it('should have a image when title is image', () => {
    cy.findByRole('img').should('be.visible')
  })
})
