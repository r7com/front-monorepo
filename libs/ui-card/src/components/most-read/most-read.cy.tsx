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
          {MOST_READ_DATA.map(({ img, sectioName, description, url }, i) => {
            const order = i + 1
            return (
              <MostRead.Item key={i}>
                <ConditionalLink href={url} title={description}>
                  <MostRead.Figure>
                    <MostRead.Image img={img} description={description} />
                    <MostRead.Order order={order}>
                      <MostRead.Title>{sectioName}</MostRead.Title>
                      <MostRead.Description>{description}</MostRead.Description>
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
          {MOST_READ_DATA.map(({ img, sectioName, description, url }, i) => {
            const order = i + 1
            return (
              <MostRead.Item key={i}>
                <ConditionalLink href={url} title={description}>
                  <MostRead.Figure>
                    <MostRead.Image img={img} description={description} />
                    <MostRead.Order order={order}>
                      <MostRead.Title>{sectioName}</MostRead.Title>
                      <MostRead.Description>{description}</MostRead.Description>
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
                <MostRead.Image
                  img={
                    'http://img.r7.com/external_images?dimensions=141x141&url=https://vtb.akamaized.net/image/399599/2024/02/04/65c02b89ca9084f222000eb8/d667f277ae884feea6c52c8a6a62479a__2494639_EPP_0402_DE_POLEMICA_COPO_thumb.jpg&resize=141x141&crop=323x323+531+73'
                  }
                  description={MOST_READ_DATA[0].description}
                />
                <MostRead.Order order={1}>
                  <MostRead.Title>{MOST_READ_DATA[0].sectioName}</MostRead.Title>
                  <MostRead.Description>{MOST_READ_DATA[0].description}</MostRead.Description>
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
