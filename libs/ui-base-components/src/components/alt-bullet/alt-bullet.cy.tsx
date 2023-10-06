import { AltBullet } from './alt-bullet'

describe(AltBullet.name, () => {
  const text = {
    small: 'Headline example small',
    medium: 'Headline example medium',
    large: 'Headline example large',
  }
  const url = 'https://www.r7.com/'
  it(`render all size variants`, () => {
    cy.mount(
      <>
        <AltBullet url={url} text={text.small} size="small" />
        <AltBullet url={url} text={text.medium} size="medium" />
        <AltBullet url={url} text={text.large} size="large" />
      </>,
    )

    cy.findByRole('link', { name: text.small }).should('be.visible')
    cy.findByRole('link', { name: text.medium }).should('be.visible')
    cy.findByRole('link', { name: text.large }).should('be.visible')
    cy.matchImage()
  })
})
