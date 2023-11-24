import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const Button = () => <button>COMPONENT</button>

const meta: Meta<typeof Button> = {
  title: 'Test/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Button>

export const FirstStory: Story = {
  args: {
    render: () => <Button />,
    //👇 The args you need here will depend on your component
  },
}
