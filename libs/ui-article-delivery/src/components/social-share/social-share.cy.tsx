import { SocialShare } from './social-share'

describe(SocialShare.name, () => {
  beforeEach(() => {
    cy.mount(
      <SocialShare>
        <SocialShare.List>
          <SocialShare.Item name="facebook" link="#facebook" title="facebook" />
          <SocialShare.Item name="linkedin" link="#linkedin" title="linkedin" />
          <SocialShare.Item name="twitter" link="#twitter" title="twitter" />
          <SocialShare.Item name="whatsapp" link="#whatsapp" title="whatsapp" />
          <SocialShare.Item name="googleNews" link="#googlenews" title="google-news" />
          <SocialShare.Item name="share" link="#share" title="share" />
        </SocialShare.List>
      </SocialShare>,
    )
  })

  it('should render social-share links', () => {
    cy.findByTitle('facebook').should('exist')
    cy.findByTitle('linkedin').should('exist')
    cy.findByTitle('twitter').should('exist')
    cy.findByTitle('whatsapp').should('exist')
    cy.findByTitle('google-news').should('exist')
    cy.findByTitle('share').should('exist')

    cy.findAllByRole('listitem').should('be.visible').and('have.length', 6)
    cy.matchImage()
  })
})
