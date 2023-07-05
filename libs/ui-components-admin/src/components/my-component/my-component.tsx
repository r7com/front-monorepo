import { Component, Prop, State, h } from '@stencil/core'
import { format } from '../../utils/utils'

@Component({
  tag: 'my-component',
})
export class MyComponent {
  @State() isVisible = false

  /**
   * The first name
   */
  @Prop() first: string

  /**
   * The middle name
   */
  @Prop() middle: string

  /**
   * The last name
   */
  @Prop() last: string

  private getText(): string {
    return format(this.first, this.middle, this.last)
  }

  private onToggleShowName = () => {
    this.isVisible = !this.isVisible
  }

  render() {
    return (
      <div>
        <button
          class="bg-gray-800 flex h-8 w-full text-white"
          type="button"
          onClick={this.onToggleShowName}
        >
          Mostrar bem vindo
        </button>
        {this.isVisible && <p class="text-lg">Hello, World! I'm {this.getText()}</p>}
      </div>
    )
  }
}
