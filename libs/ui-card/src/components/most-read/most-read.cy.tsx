import { ConditionalLink, Typography } from '@r7/ui-base-components'
import { MostRead } from '.'
import { MOST_READ_DATA } from './mock/MOST_READ_DATA'

describe(MostRead.name, () => {
  it('should render most read Desktop', () => {
    cy.mount(
      <MostRead>
        <Typography primaryTitle as="header">
          Mais Lidas
        </Typography>
        <MostRead.List>
          {MOST_READ_DATA.map(({ img, sectionName, description, url }, i) => {
            const order = i + 1
            return (
              <MostRead.Item key={i}>
                <ConditionalLink href={url} title={description}>
                  <MostRead.Figure>
                    <img
                      className="card-mb-xxxs card-object-contain card-rounded-md card-w-[141px] card-h-[141px]"
                      src={img}
                      loading="lazy"
                      alt={description}
                      height={141}
                      width={141}
                    />
                    <MostRead.Order order={order}>
                      <MostRead.Hat>{sectionName}</MostRead.Hat>
                      <MostRead.Title>{description}</MostRead.Title>
                    </MostRead.Order>
                  </MostRead.Figure>
                </ConditionalLink>
              </MostRead.Item>
            )
          })}
        </MostRead.List>
      </MostRead>,
    )
    cy.viewport(1130, 720)
    cy.matchImage()
  })

  it('should render most read mobile', () => {
    cy.mount(
      <MostRead>
        <Typography primaryTitle as="header">
          Mais Lidas
        </Typography>
        <MostRead.List>
          {MOST_READ_DATA.map(({ img, sectionName, description, url }, i) => {
            const order = i + 1
            return (
              <MostRead.Item key={i}>
                <ConditionalLink href={url} title={description}>
                  <MostRead.Figure>
                    <img
                      className="card-mb-xxxs card-object-contain card-rounded-md card-w-[141px] card-h-[141px]"
                      src={img}
                      loading="lazy"
                      alt={description}
                      height={141}
                      width={141}
                    />
                    <MostRead.Order order={order}>
                      <MostRead.Hat>{sectionName}</MostRead.Hat>
                      <MostRead.Title>{description}</MostRead.Title>
                    </MostRead.Order>
                  </MostRead.Figure>
                </ConditionalLink>
              </MostRead.Item>
            )
          })}
        </MostRead.List>
      </MostRead>,
    )

    cy.matchImage()
  })

  it('should render structure most read', () => {
    cy.mount(
      <MostRead>
        <Typography primaryTitle as="header">
          Mais Lidas
        </Typography>
        <MostRead.List>
          <MostRead.Item>
            <ConditionalLink href={MOST_READ_DATA[0].url} title={MOST_READ_DATA[0].description}>
              <MostRead.Figure>
                <img
                  className="card-mb-xxxs card-object-contain card-rounded-md card-w-[141px] card-h-[141px]"
                  src={MOST_READ_DATA[0].img}
                  loading="lazy"
                  alt={MOST_READ_DATA[0].description}
                  height={141}
                  width={141}
                />
                <MostRead.Order order={1}>
                  <MostRead.Hat>{MOST_READ_DATA[0].sectionName}</MostRead.Hat>
                  <MostRead.Title>{MOST_READ_DATA[0].description}</MostRead.Title>
                </MostRead.Order>
              </MostRead.Figure>
            </ConditionalLink>
          </MostRead.Item>
        </MostRead.List>
      </MostRead>,
    )

    cy.findByRole('list').within(() => {
      cy.findByRole('listitem').within(() => {
        cy.findByRole('link').should('be.visible')
      })
    })
  })
})
