describe('Audima', () => {
  it('Should render Audima', () => {
    cy.mount(
      <div className="article-h-screen article-w-screen article-flex article-justify-center article-items-center">
        <iframe
          aria-label="Pressione control e ponto para iniciar ou pausar a leitura do conteúdo. Audíma"
          title="Audima-player"
          id="audima-iframe"
          width="100%"
          height="50"
          src="https://audio.audima.co/iframe-later-thin-audima.html?skin=thin&amp;statistic=true"
          className="article-checked article-aud-message-received article-w-[350px] md:article-w-[600px] -article-ml-nano md:-article-ml-auto article-mb-xxxs md:article-mb-0"
        ></iframe>
      </div>,
    )

    cy.matchImage()
  })
})
