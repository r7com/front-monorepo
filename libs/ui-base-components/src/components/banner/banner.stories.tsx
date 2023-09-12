import type { Meta, StoryObj } from '@storybook/react'
import { Banner } from './'
import { SvgIcon } from '../svg-icon'
import { Text } from '../text'
import { Button } from '../button'
import { BannerIconVariants } from '../banner/components/banner-icon-variants'
import { useArgs } from '@storybook/client-api'

// Unknown temporário
const meta: Meta<unknown> = {
  title: 'Example/Banner',
  component: Banner.Root,
  tags: ['autodocs'],
}

export default meta

type DefaultIconsStory = StoryObj<typeof Banner.Icon>

type CustomStory = StoryObj<typeof Banner.Root>

export const DefaultIcons: DefaultIconsStory = {
  render: ({ ...args }) => (
    <div className="p-xxxs w-full max-w-[1084px] mx-auto">
      <Banner.Root>
        <Banner.Content>
          <Banner.Icon type={args.type} />

          <Banner.Description>
            <Text color="neutralHigh">Fique por dentro das melhores noticias em primeira mão</Text>
          </Banner.Description>
        </Banner.Content>
      </Banner.Root>
    </div>
  ),
  argTypes: {
    type: {
      options: ['alert', 'error', 'informative', 'positive'] as Array<BannerIconVariants['type']>,
      control: { type: 'select' },
    },
  },
  args: {
    type: 'informative',
  },
}

export const DefaultIconsActions: DefaultIconsStory = {
  render: function Render({ ...args }) {
    // const [{ checked }, updateArgs] = useArgs()
    // const handleToggle = () => updateArgs({ checked: !checked })

    return (
      <div className="p-xxxs w-full max-w-[1084px] mx-auto">
        <Banner.Root
          renderBanner={({ close }) => (
            <>
              <Banner.Content>
                <Banner.Icon type={args.type} />

                <Banner.Description>
                  <Text color="neutralHigh">
                    Fique por dentro das melhores noticias em primeira mão
                  </Text>
                </Banner.Description>
              </Banner.Content>

              <Banner.Options>
                <Button>IR PARA</Button>
                <Button color="ghost" onClick={close}>
                  Dispensar
                </Button>
              </Banner.Options>
            </>
          )}
        />
      </div>
    )
  },
  argTypes: {
    type: {
      options: ['alert', 'error', 'informative', 'positive'] as Array<BannerIconVariants['type']>,
      control: { type: 'select' },
    },
  },
  args: {
    type: 'informative',
  },
}

export const CustomIcon: CustomStory = {
  render: ({ ...args }) => (
    <div className="p-xxxs w-full max-w-[1084px] mx-auto">
      <Banner.Root>
        <Banner.Content>
          <Banner.Icon type="custom">
            <SvgIcon iconName="record" />
          </Banner.Icon>

          <Banner.Description>
            <Text color="neutralHigh">Fique por dentro das melhores noticias em primeira mão</Text>
          </Banner.Description>
        </Banner.Content>
      </Banner.Root>
    </div>
  ),
}

export const CustomIconActions: CustomStory = {
  render: ({ ...args }) => (
    <div className="p-xxxs w-full max-w-[1084px] mx-auto">
      <Banner.Root
        renderBanner={({ close }) => (
          <>
            <Banner.Content>
              <Banner.Icon type="custom">
                <SvgIcon iconName="record" />
              </Banner.Icon>

              <Banner.Description>
                <Text color="neutralHigh">
                  Fique por dentro das melhores noticias em primeira mão
                </Text>
              </Banner.Description>
            </Banner.Content>

            <Banner.Options>
              <Button>IR PARA</Button>

              <Button color="ghost" onClick={close}>
                Dispensar
              </Button>
            </Banner.Options>
          </>
        )}
      />
    </div>
  ),
}
