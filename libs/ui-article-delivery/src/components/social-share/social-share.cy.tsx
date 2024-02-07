import { SocialShare } from './social-share'

describe(SocialShare.name, () => {
  it('should render social-share links with primary color and square shape', () => {
    cy.mount(
      <SocialShare>
        <SocialShare.List>
          <SocialShare.Item position="topo" name="facebook" link="#facebook" title="facebook" />
          <SocialShare.Item position="topo" name="linkedin" link="#linkedin" title="linkedin" />
          <SocialShare.Item position="topo" name="twitter" link="#twitter" title="twitter" />
          <SocialShare.Item position="topo" name="whatsapp" link="#whatsapp" title="whatsapp" />
          <SocialShare.Item
            position="topo"
            name="googleNews"
            link="#googlenews"
            title="google-news"
          />
          <SocialShare.Item position="topo" name="share" link="#share" title="share" />
        </SocialShare.List>
      </SocialShare>,
    )

    cy.findByTitle('facebook').should('exist')
    cy.findByTitle('linkedin').should('exist')
    cy.findByTitle('twitter').should('exist')
    cy.findByTitle('whatsapp').should('exist')
    cy.findByTitle('google-news').should('exist')
    cy.findByTitle('share').should('exist')

    cy.findAllByRole('listitem').should('be.visible').and('have.length', 6)
    cy.matchImage()
  })

  it('should render social-share links with secondary color and rounded shape', () => {
    cy.mount(
      <div className="article-bg-neutral-low-600 article-h-screen">
        <SocialShare>
          <SocialShare.List>
            <SocialShare.Item
              color="secondary"
              shape="circle"
              name="facebook"
              link="#facebook"
              title="facebook"
            />
            <SocialShare.Item
              color="secondary"
              shape="circle"
              name="linkedin"
              link="#linkedin"
              title="linkedin"
            />
            <SocialShare.Item
              color="secondary"
              shape="circle"
              name="twitter"
              link="#twitter"
              title="twitter"
            />
            <SocialShare.Item
              color="secondary"
              shape="circle"
              name="whatsapp"
              link="#whatsapp"
              title="whatsapp"
            />
            <SocialShare.Item
              color="secondary"
              shape="circle"
              name="googleNews"
              link="#googlenews"
              title="google-news"
            />
            <SocialShare.Item
              color="secondary"
              shape="circle"
              name="share"
              link="#share"
              title="share"
            />
          </SocialShare.List>
        </SocialShare>
      </div>,
    )

    cy.findByTitle('facebook').should('exist')
    cy.findByTitle('linkedin').should('exist')
    cy.findByTitle('twitter').should('exist')
    cy.findByTitle('whatsapp').should('exist')
    cy.findByTitle('google-news').should('exist')
    cy.findByTitle('share').should('exist')

    cy.findAllByRole('listitem').should('be.visible').and('have.length', 6)
    cy.matchImage()
  })

  it('should render social-share dark mode', () => {
    cy.mount(
      <SocialShare>
        <SocialShare.List>
          <SocialShare.Item position="topo" name="facebook" link="#facebook" title="facebook" />
          <SocialShare.Item position="topo" name="linkedin" link="#linkedin" title="linkedin" />
          <SocialShare.Item position="topo" name="twitter" link="#twitter" title="twitter" />
          <SocialShare.Item position="topo" name="whatsapp" link="#whatsapp" title="whatsapp" />
          <SocialShare.Item
            position="topo"
            name="googleNews"
            link="#googlenews"
            title="google-news"
          />
          <SocialShare.Item position="topo" name="share" link="#share" title="share" />
        </SocialShare.List>
      </SocialShare>,
    )

    cy.addDarkMode()
    cy.matchImage()
  })
})
