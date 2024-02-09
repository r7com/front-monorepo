import type { Meta, StoryObj } from '@storybook/react'
import { SocialShare, SocialShareProps } from './social-share'

const meta: Meta<SocialShareProps> = {
  title: 'Article/SocialShare',
  tags: ['autodocs'],
  component: SocialShare,
}

export default meta

type Story = StoryObj<SocialShareProps>

export const Primary: Story = {
  render: () => (
    <SocialShare>
      <SocialShare.List>
        <SocialShare.Item position="topo" name="facebook" link="#facebook" title="facebook" />
        <SocialShare.Item position="topo" name="linkedin" link="#linkedin" title="linkedin" />
        <SocialShare.Item position="topo" name="twitter" link="#twitter" title="twitter" />
        <SocialShare.Item position="topo" name="whatsapp" link="#whatsapp" title="whatsapp" />
        <SocialShare.Item
          position="topo"
          name="googleNews"
          link="#googlenews"
          title="google-news"
        />
        <SocialShare.Item
          position="topo"
          name="share"
          link="https://esportes.r7.com"
          title="share"
        />
      </SocialShare.List>
    </SocialShare>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OBWV1tXbl1eXmdxzgEmcs3/Core-C-%7C-Delivery?node-id=1970%3A2772&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
