import { ConditionalLink, Typography } from '@r7/ui-base-components'
import { CardCoupon } from '.'
import { COUPON_DATA } from './mock/COUPON_DATA'

describe(CardCoupon.name, () => {
  it('should render default card coupon', () => {
    cy.mount(
      <CardCoupon>
        <Typography primaryTitle as="span">
          r7 Cupons
        </Typography>
        <CardCoupon.List>
          {COUPON_DATA.map(({ id, name, url, logo, best_offer_text, anchor_text }) => (
            <CardCoupon.Item key={id}>
              <ConditionalLink target="_blank" title={anchor_text} href={url} data-partner={name}>
                <CardCoupon.Content>
                  <CardCoupon.Image logo={logo} alt={anchor_text} />
                  <div>
                    <Typography className="uppercase" fontSize="little" color="neutralLow">
                      {name}
                    </Typography>
                    <Typography fontSize="xxxs" fontWeight="bold">
                      {best_offer_text}
                    </Typography>
                  </div>
                </CardCoupon.Content>
              </ConditionalLink>
            </CardCoupon.Item>
          ))}
        </CardCoupon.List>
      </CardCoupon>,
    )

    cy.matchImage()
  })

  it('should render structure card coupon', () => {
    cy.mount(
      <CardCoupon>
        <Typography primaryTitle as="span">
          r7 Cupons
        </Typography>
        <CardCoupon.List>
          <CardCoupon.Item>
            <ConditionalLink href="link">
              <CardCoupon.Content>R7 Cupons</CardCoupon.Content>
            </ConditionalLink>
          </CardCoupon.Item>
        </CardCoupon.List>
      </CardCoupon>,
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
  })

  it('should render default card coupon dark mode', () => {
    cy.mount(
      <CardCoupon>
        <Typography primaryTitle as="span">
          r7 Cupons
        </Typography>
        <CardCoupon.List>
          {COUPON_DATA.map(({ id, name, url, logo, best_offer_text, anchor_text }) => (
            <CardCoupon.Item key={id}>
              <ConditionalLink target="_blank" title={anchor_text} href={url} data-partner={name}>
                <CardCoupon.Content>
                  <CardCoupon.Image logo={logo} alt={anchor_text} />
                  <div>
                    <Typography className="uppercase" fontSize="little" color="neutralLow">
                      {name}
                    </Typography>
                    <Typography fontSize="xxxs" fontWeight="bold">
                      {best_offer_text}
                    </Typography>
                  </div>
                </CardCoupon.Content>
              </ConditionalLink>
            </CardCoupon.Item>
          ))}
        </CardCoupon.List>
      </CardCoupon>,
    )
    cy.addDarkMode()
    cy.matchImage()
  })
})
