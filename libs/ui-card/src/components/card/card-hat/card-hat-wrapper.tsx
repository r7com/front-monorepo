import { CardHatWrapperVariants, variants } from './card-hat-wrapper.variants'

export type CardHatWrapperProps = {
  children: React.ReactNode
  withLink?: boolean
  hatUrl?: string
  hatUrlTitle?: string
  openInBlank?: boolean
} & CardHatWrapperVariants

export function CardHatWrapper({
  children,
  type,
  withLink = false,
  hatUrl,
  hatUrlTitle,
  openInBlank = false,
}: CardHatWrapperProps) {
  return (
    <div className={variants({ type })}>
      {withLink ? (
        <a
          className="flex items-center"
          href={hatUrl}
          title={hatUrlTitle}
          target={openInBlank ? '_blank' : undefined}
          rel={openInBlank ? 'noreferrer' : undefined}
        >
          {children}
        </a>
      ) : (
        children
      )}
    </div>
  )
}
