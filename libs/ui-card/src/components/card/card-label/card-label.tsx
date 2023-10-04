import { CardLabelVariants, variants } from './card-label-variants'

export type CardLabelProps = {
  sponsoredByUrl?: string
  sponsoredByImage?: string
  sponsoredByImageDesc?: string
  sponsoredByTitle?: string
} & CardLabelVariants

export function CardLabel({
  type = 'live',
  sponsoredByUrl,
  sponsoredByImage,
  sponsoredByImageDesc,
  sponsoredByTitle,
}: CardLabelProps) {
  if (type === 'sponsored-by') {
    return (
      <a href={sponsoredByUrl} title={sponsoredByTitle}>
        <span className={variants({ type })}>
          <span className="mr-nano">Oferecido por</span>
          <img className="w-xxs h-auto" src={sponsoredByImage} alt={sponsoredByImageDesc} />
        </span>
      </a>
    )
  }

  return <span className={variants({ type })}></span>
}
