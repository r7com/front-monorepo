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
        <SocialShare.Item name="facebook" link="#facebook" title="facebook" />
        <SocialShare.Item name="linkedin" link="#linkedin" title="linkedin" />
        <SocialShare.Item name="twitter" link="#twitter" title="twitter" />
        <SocialShare.Item name="whatsapp" link="#whatsapp" title="whatsapp" />
        <SocialShare.Item name="googleNews" link="#googlenews" title="google-news" />
        <SocialShare.Item name="share" link="#share" title="share" />
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
