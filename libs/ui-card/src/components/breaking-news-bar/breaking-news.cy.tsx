import { BreakingNews } from './breaking-news'

const DefaultBreakingNewsBar = (
  <div className="card-flex card-flex-col card-gap-xxxs card-xl:gap-xs card-container">
    <BreakingNews
      href="#"
      title="titulo"
      theme="live"
      imageAlt="Human hand writting in a paper"
      imageUrl="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?resize=536x326&crop=691x420 80 0&dimensions=536x326"
    />

    <BreakingNews
      href="#"
      title="titulo"
      theme="now"
      imageAlt="Human hand writting in a paper"
      imageUrl="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?resize=536x326&crop=691x420 80 0&dimensions=536x326"
    />

    <BreakingNews
      href="#"
      title="titulo"
      theme="urgent"
      imageAlt="Human hand writting in a paper"
      imageUrl="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?resize=536x326&crop=691x420 80 0&dimensions=536x326"
    />
  </div>
)

const BreakingNewsBarNoImage = (
  <div className="card-flex card-flex-col card-gap-xxxs card-xl:gap-xs card-container">
    <BreakingNews
      href="#"
      title="titulo"
      showImage={false}
      theme="live"
      imageAlt="Human hand writting in a paper"
      imageUrl="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?resize=536x326&crop=691x420 80 0&dimensions=536x326"
    />

    <BreakingNews
      href="#"
      title="titulo"
      showImage={false}
      theme="now"
      imageAlt="Human hand writting in a paper"
      imageUrl="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?resize=536x326&crop=691x420 80 0&dimensions=536x326"
    />

    <BreakingNews
      href="#"
      title="titulo"
      showImage={false}
      theme="urgent"
      imageAlt="Human hand writting in a paper"
      imageUrl="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?resize=536x326&crop=691x420 80 0&dimensions=536x326"
    />
  </div>
)

describe(`${BreakingNews.name} - With Image`, () => {
  it('should render breaking news bar without image - desktop', () => {
    cy.mount(DefaultBreakingNewsBar)
    cy.viewport('macbook-11')

    cy.findAllByRole('article').should('be.visible')
    cy.findAllByRole('figure').should('be.visible')
    cy.findAllByRole('heading', { level: 3 }).should('be.visible')

    cy.matchImage()
  })

  it('should render breaking news bar without image - mobile', () => {
    cy.mount(DefaultBreakingNewsBar)
    cy.viewport('iphone-se2')

    cy.findAllByRole('article').should('be.visible')
    cy.findAllByRole('figure').should('be.visible')
    cy.findAllByRole('heading', { level: 3 }).should('be.visible')

    cy.matchImage()
  })
})

describe(`${BreakingNews.name} - Without Image`, () => {
  it('should render breaking news bar without image - desktop', () => {
    cy.mount(BreakingNewsBarNoImage)
    cy.viewport('macbook-11')

    cy.findAllByRole('article').should('be.visible')
    cy.findAllByRole('heading', { level: 3 }).should('be.visible')

    cy.matchImage()
  })

  it('should render breaking news bar without image - mobile', () => {
    cy.mount(BreakingNewsBarNoImage)
    cy.viewport('iphone-se2')

    cy.findAllByRole('article').should('be.visible')
    cy.findAllByRole('heading', { level: 3 }).should('be.visible')

    cy.matchImage()
  })
})
