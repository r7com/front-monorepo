export type CardHatImageProps = {
  imageSource: string
  description: string
}

export function CardHatImage({ imageSource, description }: CardHatImageProps) {
  return (
    <img
      src={imageSource}
      alt={description}
      className="w-xxxs h-xxxs mr-nano aspect-square"
      width="16"
      height="16"
    />
  )
}
