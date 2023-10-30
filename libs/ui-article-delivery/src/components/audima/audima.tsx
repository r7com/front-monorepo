import { audimaDomain } from './utils'

export function Audima() {
  return (
    <>
      <div id="audimaWidget"></div>
      <script src={`https://${audimaDomain()}.audima.co/audima-widget.js`} async></script>
    </>
  )
}
