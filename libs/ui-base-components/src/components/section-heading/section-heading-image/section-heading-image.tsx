export type SectionHeadingImageProps = {
  src: string
  alt: string
}

export function SectionHeadingImage({ src, alt }: SectionHeadingImageProps) {
  return <img className="rounded-md w-[110px] min-w-[110px] h-[70px]" src={src} alt={alt} />
}
