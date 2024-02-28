import '@r7/ui-base-components/css'
import '@r7/ui-base-components/fonts'
import '@r7/ui-article-delivery/css'
import '@r7/ui-card/css'
import '@r7/ui-footer-delivery/css'
import '@r7/ui-header-delivery/css'
import '@r7/ui-section-foot/css'
import '@r7/ui-section-heading/css'
import '@r7/ui-section-menu/css'
import '@r7/ui-layout/css'
import '@r7/ui-tv-guide/css'
import './tailwind.css'
import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Fragment } from 'react'
import { SvgSprites } from '@r7/ui-base-components'

const preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [
    Story => (
      <Fragment>
        <Story />
        <SvgSprites />
      </Fragment>
    ),
  ],
}

export default preview
