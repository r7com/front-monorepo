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
      className="article-relative"
    >
      <SvgIcon iconName="share" className={shareSlot()} title="share" />
      {showTooltip && (
        <span className="article-absolute article-left-full article-top-quark">
          <span className="article-flex article-justify-center article-items-center article-w-xxxl article-h-xxs article-rounded-md article-bg-dark-high-500 article-text-little">
            Link copiado!
          </span>
        </span>
      )}
    </IconButton>
  )
}
