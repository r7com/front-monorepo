import { useCopyToClipboard } from '@uidotdev/usehooks'
import { useState } from 'react'
import { variants } from './social-icons.variants'
import { SocialIconProps } from './types'
import { SvgIcon, IconButton } from '@r7/ui-base-components'

export function ShareIcon({ color, link = '' }: SocialIconProps) {
  const { shareSlot } = variants({ color })

  const [showTooltip, setShowTooltip] = useState(false)
  const [, setClipboardValue] = useCopyToClipboard()

  const copyClipboardFeedback = () => {
    setClipboardValue(link)
    setShowTooltip(() => true)

    const timeout = setTimeout(() => {
      setShowTooltip(() => false)
    }, 4000)

    return () => clearTimeout(timeout)
  }

  return (
    <IconButton
      onClick={copyClipboardFeedback}
      title="Copiar o link de compartilhamento"
      aria-label="Clique para copiar o link de compartilhamento"
      className="relative"
    >
      <SvgIcon iconName="share" className={shareSlot()} title="share" />
      {showTooltip && (
        <span className="absolute left-full top-quark">
          <span className="flex justify-center items-center w-xxxl h-xxs rounded-md bg-dark-high-500 text-little">
            Link copiado!
          </span>
        </span>
      )}
    </IconButton>
  )
}
