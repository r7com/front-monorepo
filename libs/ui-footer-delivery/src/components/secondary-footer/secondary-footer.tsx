import { SvgIcon } from '@r7-jarvics/ui-base-components'

export type SecondaryFooterProps = {
  editorialName: string
}

export function SecondaryFooter({ editorialName }: SecondaryFooterProps) {
  const actualYear = new Date().getFullYear()
  return (
    <section
      className="bg-editorial-color"
      data-testid="secondary-footer"
      aria-label="secondary-footer"
    >
      <div className="px-sm pt-sm pb-xxs">
        <div className="flex justify-center items-center mb-xxs">
          <a href="https://www.r7.com" className="flex items-center text-light-high-400">
            <SvgIcon iconName="logo-R7" title="Logo-R7" className="fill-neutral-high-400" />

            <p className="ml-nano uppercase font-bold text-sm">{editorialName}</p>
          </a>
        </div>
        <p className="text-light-high-400 text-little text-center">
          Todos os direitos reservados - 2009-{actualYear} - Rádio e Televisão Record S.A
        </p>
      </div>

      <hr className="my-xxxs border-none h-[1px] bg-light-high-500 w-full"></hr>

      <nav className="px-sm pt-xxs pb-sm">
        <ul className="flex flex-wrap items-center justify-center">
          <li className="mr-nano ml-nano mb-nano text-center">
            <a
              title="Anuncie no R7"
              href="http://anuncie.r7.com/"
              className="text-light-high-400 uppercase text-little hover:underline"
            >
              Anuncie no R7
            </a>
          </li>
          <li className="mr-nano ml-nano mb-nano text-center">
            <a
              title="Carreira"
              href="https://recordtv.gupy.io/"
              target="_blank"
              className="text-light-high-400 uppercase text-little hover:underline"
              rel="noreferrer"
            >
              Carreira
            </a>
          </li>
          <li className="mr-nano ml-nano mb-nano text-center">
            <a
              title="Comunicar erro"
              href="http://www.r7.com/institucional/comunicar-erro/"
              className="text-light-high-400 uppercase text-little hover:underline"
            >
              Comunicar erro
            </a>
          </li>
          <li className="mr-nano ml-nano mb-nano text-center">
            <a
              title="Fale com o R7"
              href="http://recordtv.r7.com/cite/"
              className="text-light-high-400 uppercase text-little hover:underline"
            >
              Fale com o R7
            </a>
          </li>
          <li className="mr-nano ml-nano mb-nano text-center">
            <a
              title="Mapa do Site"
              href="http://www.r7.com/institucional/mapa-do-site"
              className="text-light-high-400 uppercase text-little hover:underline"
            >
              Mapa do Site
            </a>
          </li>
          <li className="mr-nano ml-nano mb-nano text-center">
            <a
              title="Termos e Condições de Uso"
              href="https://www.r7.com/termos-e-condicoes"
              className="text-light-high-400 uppercase text-little hover:underline"
            >
              Termos e Condições de Uso
            </a>
          </li>
          <li className="mr-nano ml-nano mb-nano text-center">
            <a
              title="Privacidade"
              href="https://www.r7.com/privacidade"
              className="text-light-high-400 uppercase text-little hover:underline"
            >
              Privacidade
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}
