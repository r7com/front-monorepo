import { useEffect, useState } from 'react'
import { Button } from '../button'
import { ConditionalLink } from '../conditional-link'
import { Typography } from '../typography'
import { variants } from './privacy-box.variants'
import { Cookie, getDomain } from '@r7/plugins'
import { isDevMode } from '@r7/helpers'

export function PrivacyBox() {
  const [show, setShow] = useState<boolean>(false)
  const CNAME = 'r7_lgpd_accepted'

  useEffect(() => {
    Cookie.get(CNAME) ? setShow(false) : setShow(true)
  }, [])

  function handleClick() {
    Cookie.set({
      cname: CNAME,
      cvalue: 'true',
      expiration: 1,
      unit: 'year',
      cdomain: isDevMode() ? 'localhost' : getDomain(),
    })
    setShow(false)
  }

  return (
    <div className={variants({ show })}>
      <div className="base-flex-col lg:base-flex-row base-flex base-w-full base-items-center base-justify-between base-p-xxxs">
        <Typography>
          Utilizamos cookies e tecnologia para aprimorar sua experiência de navegação de acordo com
          o
          <ConditionalLink
            href="https://www.r7.com/termos-e-condicoes"
            className="base-ml-quark base-underline base-text-brand-primary-500"
            target="_blank"
          >
            Aviso de Privacidade
          </ConditionalLink>
          .
        </Typography>
        <Button
          onClick={handleClick}
          size="medium"
          className="base-mt-xxxs lg:base-mt-0 base-w-full lg:base-w-auto base-flex base-justify-center"
        >
          FECHAR
        </Button>
      </div>
    </div>
  )
}
