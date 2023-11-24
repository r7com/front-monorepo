import { ConditionalLink } from '@r7/ui-base-components'
import { CardHatWrapperVariants, variants } from './card-hat-wrapper.variants'

export type CardHatWrapperProps = {
  children: React.ReactNode
  hatUrl?: string
  hatUrlTitle?: string
  openInBlank?: boolean
} & CardHatWrapperVariants

export function CardHatWrapper({
  children,
  type,
  hatUrl,
  hatUrlTitle,
  openInBlank = false,
}: CardHatWrapperProps) {
  return (
    <div className={variants({ type })}>
      <ConditionalLink
        href={hatUrl}
        className="card-flex card-items-center"
        title={hatUrlTitle}
        target={openInBlank ? '_blank' : undefined}
        rel={openInBlank ? 'noreferrer' : undefined}
      >
        {children}
      </ConditionalLink>
    </div>
  )
}
