import './tailwind.css'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
}

export default preview
