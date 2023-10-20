import { Bullet } from './bullet'

describe(Bullet.name, () => {
  const text = {
    small: 'Headline example small',
    medium: 'Headline example medium',
    large: 'Headline example large',
  }
  const url = 'https://www.r7.com/'
  it(`render all size variants`, () => {
    cy.mount(
      <>
        <Bullet url={url} size="small">
          {text.small}
        </Bullet>
        <Bullet url={url} size="medium">
          {text.small}
        </Bullet>
        <Bullet url={url} size="large">
          {text.small}
        </Bullet>
      </>,
    )

    cy.findByRole('link', { name: text.small }).should('be.visible')
    cy.findByRole('link', { name: text.medium }).should('be.visible')
    cy.findByRole('link', { name: text.large }).should('be.visible')
    cy.matchImage()
  })
})
