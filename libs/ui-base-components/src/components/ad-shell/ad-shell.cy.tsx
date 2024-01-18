import { AdPlaceholder } from '../ad-placeholder/placeholder'
import { AdShell } from './ad-shell'

const selector = '[data-testid="ad-shell"]'
describe(`${AdShell.name}`, () =>
  it('should render all layout variants', () => {
    cy.mount(
      <div className="base-p-md">
        <AdShell minHeight="100px">
          <AdPlaceholder />
        </AdShell>
        <br></br>
        <AdShell layout="background" minHeight="150px">
          <AdPlaceholder />
        </AdShell>
        <br></br>
        <AdShell layout="tag">
          <AdPlaceholder />
        </AdShell>
        <br></br>
        <AdShell layout="lines" minHeight="200px">
          <AdPlaceholder />
        </AdShell>
      </div>,
    )
    cy.get(selector).should('be.visible').should('have.length', 4)
    cy.matchImage()
  }))
