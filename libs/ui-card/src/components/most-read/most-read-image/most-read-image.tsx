type MostReadImageProps = {
  img: string
  description: string
}

export function MostReadImage({ img, description }: MostReadImageProps) {
  return (
    <img
      className="card-mb-xxxs card-object-contain card-rounded-md card-w-[141px] card-h-[141px]"
      src={img}
      loading="lazy"
      alt={description}
      height={141}
      width={141}
    />
  )
}
