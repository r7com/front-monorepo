import { SvgIcon } from '../../../svg-icon'
import { BannerIcon } from './banner-icon'

describe(BannerIcon.name, () => {
  it('should render all type variants', () => {
    cy.mount(
      <div className="flex flex-row flex-wrap gap-nano p-nano">
        <BannerIcon type="informative" />

        <BannerIcon type="positive" />

        <BannerIcon type="alert" />

        <BannerIcon type="error" />

        <div className="dark">
          <BannerIcon type="custom">
            <SvgIcon iconName="record" />
          </BannerIcon>
        </div>

        <BannerIcon type="custom">
          <SvgIcon iconName="record" />
        </BannerIcon>

        <div className="dark bg-neutral-low-500">
          <BannerIcon type="custom">
            <SvgIcon iconName="record" />
          </BannerIcon>
        </div>
      </div>,
    )
    cy.matchImage()
  })
})
