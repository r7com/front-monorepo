import { Header } from './header'
import { InternalsHeader } from './internals-header'

const CompleteHeader = (
  <div>
    <Header>
      <Header.Fixed>
        <Header.MainSection>
          <Header.Logo
            link="https://www.r7.com"
            logoUrl="https://static.themebuilder.aws.arc.pub/newr7-sandbox/1698842893138.svg"
            alt="Portal R7"
          />

          <InternalsHeader triggerElementSelector='[data-el="heading-trigger"]'>
            <Header.Logo
              link="https://www.r7.com"
              logoUrl="https://static.themebuilder.aws.arc.pub/newr7-sandbox/1695891496962.png"
              alt="Portal R7"
            />
            <InternalsHeader.SectionName sectionUrl="#">editoria</InternalsHeader.SectionName>

            <InternalsHeader.Title>titulo do artigo</InternalsHeader.Title>
          </InternalsHeader>
        </Header.MainSection>
      </Header.Fixed>
    </Header>
    <ul>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li data-el="heading-trigger">element trigger</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
      <li>element</li>
    </ul>
  </div>
)

describe('InternalsHeader', () => {
  it('should only be visible when "triggerElement" is out of the viewport', () => {
    cy.mount(CompleteHeader)

    cy.viewport('macbook-11')

    cy.get('[data-testid="internals-header"]').should('not.be.visible')

    cy.scrollTo(0, 500)

    cy.get('[data-testid="internals-header"]').should('be.visible')

    cy.matchImage()
  })
})
