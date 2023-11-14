export type CardHatImageProps = {
  imageSource: string
  description: string
}

export function CardHatImage({ imageSource, description }: CardHatImageProps) {
  return (
    <img
      src={imageSource}
      alt={description}
      className="card-mr-nano card-aspect-square"
      width="16"
      height="16"
    />
  )
}
