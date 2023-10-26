import { audimaDomain } from './utils'

export function Audima() {
  return (
    <div data-src={window.location.href}>
      <iframe
        aria-label="Pressione control e ponto para iniciar ou pausar a leitura do conteúdo. Audíma"
        title="Audima-player"
        id="audima-iframe"
        width="100%"
        height="50"
        src={`https://${audimaDomain()}.audima.co/iframe-later-thin-audima.html?skin=thin&amp;statistic=true`}
        className="checked aud-message-received"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
      ></iframe>

      <script src={`https://${audimaDomain()}.audima.co/audima-widget.js`} async></script>
    </div>
  )
}
