import { Meta, StoryObj } from '@storybook/react'
import { CardCoupon, CardCouponProps } from '.'

import { ConditionalLink, Typography } from '@r7/ui-base-components'
import { COUPON_DATA } from './mock/COUPON_DATA'

const meta: Meta<CardCouponProps> = {
  title: 'ui-card/CardCoupon',
  component: CardCoupon,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<CardCouponProps>

export const Primary: Story = {
  render: () => (
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
    </CardCoupon>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/wm2WOlSlO2Yl4ClV00bdlP/Artigos---Desktop?node-id=935-1175',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
