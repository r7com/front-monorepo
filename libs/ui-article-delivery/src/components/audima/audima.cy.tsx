describe('Audima', () => {
  it('Should render Audima', () => {
    cy.mount(
      <div className="h-screen w-screen flex justify-center items-center">
        <iframe
          aria-label="Pressione control e ponto para iniciar ou pausar a leitura do conteúdo. Audíma"
          title="Audima-player"
          id="audima-iframe"
          width="100%"
          height="50"
          src={`https://audio.audima.co/iframe-later-thin-audima.html?skin=thin&amp;statistic=true`}
          className="checked aud-message-received w-[350px] md:w-[600px] -ml-nano md:-ml-auto mb-xxxs md:mb-0"
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="button"
        ></iframe>
      </div>,
    )

    cy.matchImage()
  })
})
