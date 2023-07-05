import { Component, h } from '@stencil/core'
// import { format } from '../../utils/utils'

@Component({
  tag: 'other-component',
  // styleUrl: 'other-component.css',
})
export class OtherComponent {
  // @State() isVisible = false

  // /**
  //  * The first name
  //  */
  // @Prop() first: string

  // /**
  //  * The middle name
  //  */
  // @Prop() middle: string

  // /**
  //  * The last name
  //  */
  // @Prop() last: string

  // private getText(): string {
  //   return format(this.first, this.middle, this.last)
  // }

  // private onToggleShowName = () => {
  //   this.isVisible = !this.isVisible
  // }

  render() {
    return (
      <div>
        <button class="bg-white block h-6" type="button">
          Other Component
        </button>
        {/* {this.isVisible && <p class="text-lg">Hello, World! I'm {this.getText()}</p>} */}
      </div>
    )
  }
}
