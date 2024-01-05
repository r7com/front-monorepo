import { ConditionalLink, Typography } from '@r7/ui-base-components'
import { CardCupom } from './'
import { CUPOM_DATA } from './mock/CUPOM_DATA'

describe(CardCupom.name, () => {
  it('should render default card cupons', () => {
    cy.mount(
      <CardCupom>
        <Typography primaryTitle as="span">
          r7 Cupons
        </Typography>
        <CardCupom.List>
          {CUPOM_DATA.map(({ id, name, url, logo, best_offer_text, anchor_text }) => (
            <CardCupom.Item key={id}>
              <ConditionalLink target="_blank" title={anchor_text} href={url} data-partner={name}>
                <CardCupom.Content>
                  <img
                    className="mr-xxxs rounded-md"
                    src={logo}
                    alt={anchor_text}
                    loading="lazy"
                    height={58}
                    width={58}
                  />
                  <div>
                    <Typography className="uppercase" fontSize="little" color="neutralLow">
                      {name}
                    </Typography>
                    <Typography fontSize="xxxs" fontWeight="bold">
                      {best_offer_text}
                    </Typography>
                  </div>
                </CardCupom.Content>
              </ConditionalLink>
            </CardCupom.Item>
          ))}
        </CardCupom.List>
      </CardCupom>,
    )

    cy.matchImage()
  })

  it('should render structure card cupom', () => {
    cy.mount(
      <CardCupom>
        <Typography primaryTitle as="span">
          r7 Cupons
        </Typography>
        <CardCupom.List>
          <CardCupom.Item>
            <ConditionalLink href="link">
              <CardCupom.Content>R7 Cupons</CardCupom.Content>
            </ConditionalLink>
          </CardCupom.Item>
        </CardCupom.List>
      </CardCupom>,
    )

    cy.findByRole('contentinfo')
      .should('be.visible')
      .within(() => {
        cy.findByRole('list').within(() => {
          cy.findByRole('listitem').within(() => {
            cy.findByRole('link').should('be.visible')
          })
        })
      })
    cy.matchImage()
  })
})
