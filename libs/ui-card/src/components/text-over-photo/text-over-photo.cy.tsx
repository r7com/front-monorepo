import { Card } from '../card'
import { TextOverPhoto } from './text-over-photo'

const TextOverPhotoHalf = (
  <div className="card-p-xxxs">
    <TextOverPhoto
      layout="half"
      renderTitle={({ CardTitle }) => (
        <CardTitle>Clientes dão Kombi para ex-galã Daniel Erthal trabalhar em Copacabana</CardTitle>
      )}
      renderHat={
        <Card.HatWrapper>
          <Card.HatTitle color="high">vendedor ambulante</Card.HatTitle>
        </Card.HatWrapper>
      }
      renderImage={
        <img
          src="//img.r7.com/images/daniel-erthal-03012024135027266?resize=536x326&crop=607x369 34 0&dimensions=536x326"
          alt="Clientes dão Kombi para ex-galã Daniel Erthal trabalhar em Copacabana"
        />
      }
    />
  </div>
)

const TextOverPhotoVertical = (
  <div className="card-p-xxxs">
    <TextOverPhoto
      layout="vertical"
      renderTitle={({ CardTitle }) => (
        <CardTitle>
          Leonardo Bricio contrai dengue e desabafa sobre estar doente e sozinho
        </CardTitle>
      )}
      renderHat={
        <Card.HatWrapper>
          <Card.HatTitle color="high">'Me recuperando'</Card.HatTitle>
        </Card.HatWrapper>
      }
      renderImage={
        <img
          src="//img.r7.com/images/leonardo-bricio-10012024120558929?resize=208x324&crop=542x844 454 0&dimensions=208x324"
          alt="Leonardo Bricio contrai dengue e desabafa sobre estar doente e sozinho"
        />
      }
    />
  </div>
)

describe(TextOverPhoto.name, () => {
  context('half layout', () => {
    it('should render half layout - desktop', () => {
      cy.mount(<div className="card-max-w-[450px] card-h-[320px]">{TextOverPhotoHalf}</div>)
      cy.viewport('macbook-16')
      cy.findAllByRole('article').should('be.visible')
      cy.matchImage()
    })

    it('should render half layout - mobile', () => {
      cy.mount(TextOverPhotoHalf)
      cy.viewport('iphone-se2')
      cy.findAllByRole('article').should('be.visible')
      cy.matchImage()
    })
  })

  context('vertical layout', () => {
    it('should render vertical layout - desktop', () => {
      cy.mount(<div className="card-max-w-[200px] card-h-[320px]">{TextOverPhotoVertical}</div>)
      cy.viewport('macbook-16')
      cy.findAllByRole('article').should('be.visible')
      cy.matchImage()
    })

    it('should render vertical layout - mobile', () => {
      cy.mount(TextOverPhotoVertical)
      cy.viewport('iphone-se2')
      cy.findAllByRole('article').should('be.visible')
      cy.matchImage()
    })
  })
})
