import { audimaDomain } from './utils'

export function Audima() {
  console.log('andersson')
  return (
    <>
      <div id="audimaWidget"></div>
      <script src={`https://${audimaDomain()}.audima.co/audima-widget.js`} async></script>
    </>
  )
}
