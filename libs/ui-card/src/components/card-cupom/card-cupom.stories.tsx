import { Meta, StoryObj } from '@storybook/react'
import { CardCupom, CardCupomProps } from './'

import { ConditionalLink, Typography } from '@r7/ui-base-components'
import { CUPOM_DATA } from './mock/CUPOM_DATA'

const meta: Meta<CardCupomProps> = {
  title: 'ui-card/CardCupom',
  component: CardCupom,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<CardCupomProps>

export const Primary: Story = {
  render: () => (
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
    </CardCupom>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/wm2WOlSlO2Yl4ClV00bdlP/Artigos---Desktop?node-id=935-1175',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
