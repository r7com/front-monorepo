import { Component, Prop, State, h } from '@stencil/core'
import { format } from '../../utils/utils'

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
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
        <button type="button" onClick={this.onToggleShowName}>
          Mostrar bem vindo
        </button>
        {this.isVisible && <p>Hello, World! I'm {this.getText()}</p>}
      </div>
    )
  }
}
