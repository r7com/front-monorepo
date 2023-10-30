import { AccessibilityBar } from './accessibility-bar'
import { Audima } from '../audima'
import { ContrastControl } from '../contrast-control'
import { FontSizeControl } from '../font-size-control'

describe('AccessibilityBar', () => {
  it('Should render AccessibilityBar', () => {
    cy.mount(
      <AccessibilityBar>
        <Audima />
        <AccessibilityBar.List>
          <AccessibilityBar.Item>
            <ContrastControl />
          </AccessibilityBar.Item>
          <AccessibilityBar.Item>
            <FontSizeControl.Increase />
          </AccessibilityBar.Item>
          <AccessibilityBar.Item>
            <FontSizeControl.Decrease />
          </AccessibilityBar.Item>
        </AccessibilityBar.List>
      </AccessibilityBar>,
    )

    // cy.matchImage()
  })

  // it('Should render AccessibilityBar mobile', () => {
  //   cy.mount(
  //     <AccessibilityBar>
  //       <Audima />
  //       <AccessibilityBar.List>
  //         <AccessibilityBar.Item>
  //           <ContrastControl />
  //         </AccessibilityBar.Item>
  //         <AccessibilityBar.Item>
  //           <FontSizeControl.Increase />
  //         </AccessibilityBar.Item>
  //         <AccessibilityBar.Item>
  //           <FontSizeControl.Decrease />
  //         </AccessibilityBar.Item>
  //       </AccessibilityBar.List>
  //     </AccessibilityBar>,
  //   )

  //   cy.viewport(320, 480)
  //   cy.matchImage()
  // })
})
