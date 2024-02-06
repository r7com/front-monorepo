import { Typography } from '@r7/ui-base-components'
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
                <MostRead.Link url={url} title={description}>
                  <MostRead.Figure>
                    <img
                      className="mb-xxxs"
                      src={img}
                      loading="lazy"
                      alt={description}
                      height={141}
                      width={141}
                      style={{ width: '141px', height: '141px' }}
                    />
                  </MostRead.Figure>
                  <MostRead.Order order={order}>
                    <MostRead.Hat>{sectionName}</MostRead.Hat>
                    <MostRead.Title>{description}</MostRead.Title>
                  </MostRead.Order>
                </MostRead.Link>
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
                <MostRead.Link url={url} title={description}>
                  <MostRead.Figure>
                    <img
                      className="mb-xxxs"
                      src={img}
                      loading="lazy"
                      alt={description}
                      height={141}
                      width={141}
                      style={{ width: '141px', height: '141px' }}
                    />
                  </MostRead.Figure>
                  <MostRead.Order order={order}>
                    <MostRead.Hat>{sectionName}</MostRead.Hat>
                    <MostRead.Title>{description}</MostRead.Title>
                  </MostRead.Order>
                </MostRead.Link>
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
          <MostRead.Item key={1}>
            <MostRead.Link url={MOST_READ_DATA[0].url} title={MOST_READ_DATA[0].description}>
              <MostRead.Figure>
                <img
                  className="mb-xxxs"
                  src={MOST_READ_DATA[0].img}
                  loading="lazy"
                  alt={MOST_READ_DATA[0].description}
                  height={141}
                  width={141}
                  style={{ width: '141px', height: '141px' }}
                />
              </MostRead.Figure>
              <MostRead.Order order={1}>
                <MostRead.Hat>{MOST_READ_DATA[0].sectionName}</MostRead.Hat>
                <MostRead.Title>{MOST_READ_DATA[0].description}</MostRead.Title>
              </MostRead.Order>
            </MostRead.Link>
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
